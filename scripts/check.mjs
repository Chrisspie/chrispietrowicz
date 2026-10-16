import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { content } from '../src/content.mjs';
const root = fileURLToPath(new URL('../',import.meta.url));
const localeSource = fs.readFileSync(path.join(root,'locale.js'),'utf8');
function detect({saved=null, timezone='Europe/London', language='en-GB', protocol='https:'}={}) {
 let result='';
 vm.runInNewContext(localeSource, {window:{},URL,location:{protocol,href:'https://chrispietrowicz.com/?utm_source=test#work',search:'?utm_source=test',hash:'#work',replace:v=>result=v},localStorage:{getItem:()=>saved},navigator:{language,languages:[language]},Intl:{DateTimeFormat:()=>({resolvedOptions:()=>({timeZone:timezone})})}});
 return result;
}
test('regional language detection, explicit preference and attribution links',()=>{
 assert.equal(new URL(detect({timezone:'Europe/Warsaw'})).pathname,'/pl/');
 assert.equal(new URL(detect({language:'pl-PL'})).pathname,'/pl/');
 assert.equal(new URL(detect({saved:'en',timezone:'Europe/Warsaw',language:'pl-PL'})).pathname,'/en/');
 assert.equal(new URL(detect({saved:'pl'})).pathname,'/pl/');
 assert.equal(new URL(detect({saved:'invalid'})).pathname,'/en/');
 assert.equal(new URL(detect()).search,'?utm_source=test');
 assert.equal(new URL(detect()).hash,'#work');
 assert.equal(detect({protocol:'file:'}),'');
});
test('both languages are complete static pages with valid local assets and real destinations',()=>{
 assert.deepEqual(Object.keys(content.pl).sort(),Object.keys(content.en).sort());
 for(const lang of ['en','pl']) {
  const html=fs.readFileSync(path.join(root,lang,'index.html'),'utf8');
  assert.ok(html.includes(`<html lang="${lang}">`));
  assert.ok(!html.includes('undefined'));
  assert.ok(!html.includes('YOUR-PROFILE'));
  assert.ok(!html.includes('github.com/'));
  assert.ok(!html.includes('src="locale.js"'));
  for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
   const url=match[1];
   if (/^(https?:|mailto:)/.test(url)) continue;
   const localUrl=url.split(/[?#]/)[0];
   const file=path.resolve(root,lang,localUrl.endsWith('/')?localUrl+'index.html':localUrl);
   assert.ok(fs.existsSync(file),`Missing ${url} in ${lang}`);
  }
  for(const match of html.matchAll(/href="#([^" ]+)"/g)) assert.ok(html.includes(`id="${match[1]}"`));
  assert.ok(html.includes('https://www.linkedin.com/in/krzysztof-pietrowicz-492744a6/'));
  assert.ok(html.includes('thankful-coast-085c22603.2.azurestaticapps.net'));
 }
});
const analyticsSource=fs.readFileSync(path.join(root,'analytics.js'),'utf8');
test('automatic language entry does not initialize a duplicate analytics pageview',()=>{
 assert.doesNotThrow(()=>vm.runInNewContext(analyticsSource,{window:{__localeRedirecting:true}}));
});
function analytics({consent,host='chrispietrowicz.com',expired=false}={}) {
 const listeners={},appended=[],cookies=[];
 const element=()=>({listeners:{},addEventListener(name,callback){this.listeners[name]=callback;}});
 const banner={hidden:true},dialog={open:false,showModal(){this.open=true;},close(){this.open=false;}},status={dataset:{denied:'off',granted:'on'}};
 const grant=element(),deny=element(),open=element(),close=element();grant.dataset={consent:'granted'};deny.dataset={consent:'denied'};
 const storage=new Map();
 if(consent) storage.set('site-analytics-consent-v1',JSON.stringify({value:consent,expires:Date.now()+(expired?-1000:100000)}));
 const doc={referrer:'https://example.com/from?email=private@example.com',documentElement:{lang:'pl'},head:{append:s=>appended.push(s)},createElement:()=>({}),querySelector:s=>({'#consent-banner':banner,'#privacy-dialog':dialog,'.analytics-status':status,'.privacy-close':close}[s]),querySelectorAll:s=>s==='[data-consent]'?[grant,deny]:[open],addEventListener:(type,fn)=>listeners[type]=fn};
 Object.defineProperty(doc,'cookie',{get:()=> '_ga=old; _ga_TEST=old; unrelated=keep',set:v=>cookies.push(v)});
 const context={window:{},URL,document:doc,location:{hostname:host,href:`https://${host}/pl/?email=private@example.com#contact`},localStorage:{getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value)}};
 vm.runInNewContext(analyticsSource,context);
 return {context,appended,cookies,banner,dialog,status,storage,grant:()=>grant.listeners.click(),deny:()=>deny.listeners.click(),open:()=>open.listeners.click(),track:()=>listeners.click({target:{closest:()=>({dataset:{track:'email_click'}})}})};
}
test('analytics sends nothing before consent, after refusal or on local preview',()=>{
 const unknown=analytics();assert.equal(unknown.appended.length,0);assert.equal(unknown.banner.hidden,false);unknown.track();assert.equal(unknown.context.window.dataLayer,undefined);
 const denied=analytics({consent:'denied'});assert.equal(denied.appended.length,0);assert.equal(denied.banner.hidden,true);
 const expired=analytics({consent:'granted',expired:true});assert.equal(expired.appended.length,0);assert.equal(expired.banner.hidden,false);
 const local=analytics({consent:'granted',host:'127.0.0.1'});assert.equal(local.appended.length,0);
});
test('grant initializes once, strips query data and tracks only event names; refusal disables and removes GA cookies',()=>{
 const a=analytics();a.grant();a.grant();assert.equal(a.appended.length,1);
 const calls=a.context.window.dataLayer.map(args=>Array.from(args));
 const configs=calls.filter(c=>c[0]==='config');assert.equal(configs.length,1);
 assert.equal(configs[0][1],'G-KNV4H5SGS0');assert.equal(configs[0][2].page_location,'https://chrispietrowicz.com/pl/');assert.equal(configs[0][2].page_referrer,'https://example.com/from');
 a.track();const event=Array.from(a.context.window.dataLayer.at(-1));assert.equal(event[1],'email_click');assert.equal(event[2].site_language,'pl');assert.ok(!JSON.stringify(event).includes('private@'));
 a.open();assert.equal(a.dialog.open,true);a.deny();assert.equal(a.dialog.open,false);assert.equal(a.context.window['ga-disable-G-KNV4H5SGS0'],true);assert.ok(a.cookies.length>0);assert.ok(a.cookies.every(c=>!c.startsWith('unrelated=')));
 const length=a.context.window.dataLayer.length;a.track();assert.equal(a.context.window.dataLayer.length,length);
 a.grant();assert.equal(a.appended.length,1);assert.equal(a.context.window['ga-disable-G-KNV4H5SGS0'],false);
});
