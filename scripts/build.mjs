import fs from 'node:fs';
import { content } from '../src/content.mjs';

// Contact settings. Change these in one place.
// booking: a Cal.com / Calendly link. Leave empty to hide the booking button.
const site = 'https://chrispietrowicz.com/';
const email = 'krzysztof.pietrowicz@gmail.com';
const booking = '';
const linkedin = 'https://www.linkedin.com/in/krzysztof-pietrowicz-492744a6/';
const reviews = 'https://reviewscoach.com/';
const version = '20261119c';

const root = new URL('../', import.meta.url);
const e = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const external = 'target="_blank" rel="noopener noreferrer"';

function schema(c, lang, url) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {'@type': 'Person', '@id': site + '#person', name: 'Krzysztof Pietrowicz', alternateName: 'Chris Pietrowicz', jobTitle: 'Software engineer', url: site, image: site + 'assets/portrait-640.jpg', sameAs: [linkedin]},
      {'@type': 'ProfessionalService', '@id': url + '#service', name: c.name, url, description: c.description, inLanguage: lang, provider: {'@id': site + '#person'}, image: site + 'assets/og.jpg'}
    ]
  };
  return JSON.stringify(data).replaceAll('<', '\\u003c');
}

function render(lang, isRoot = false) {
  const c = content[lang], prefix = isRoot ? '' : '../';
  const url = site + (isRoot ? '' : lang + '/');
  const mail = `mailto:${email}?subject=${encodeURIComponent(c.mailSubject)}&body=${encodeURIComponent(c.mailBody)}`;
  const ids = ['process', 'example', 'about', 'contact'];
  return `<!doctype html>
<html lang="${lang}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#111315" media="(prefers-color-scheme: dark)">
<title>${e(c.title)}</title><meta name="description" content="${e(c.description)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${site}en/"><link rel="alternate" hreflang="pl" href="${site}pl/"><link rel="alternate" hreflang="x-default" href="${site}">
<meta property="og:title" content="${e(c.title)}"><meta property="og:description" content="${e(c.description)}"><meta property="og:type" content="website"><meta property="og:url" content="${url}"><meta property="og:locale" content="${lang === 'pl' ? 'pl_PL' : 'en_GB'}"><meta property="og:image" content="${site}assets/og.jpg"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml">${isRoot ? '<script src="locale.js"></script>' : ''}
<link rel="stylesheet" href="${prefix}styles.css?v=${version}"><script src="${prefix}analytics.js?v=${version}" defer></script><script src="${prefix}script.js?v=${version}" defer></script>
<noscript><style>@media (max-width:720px){.menu-toggle{display:none!important}.header-inner{height:auto;flex-wrap:wrap;padding-block:12px}nav{display:flex;position:static;flex-direction:row;flex-wrap:wrap;gap:4px 16px;padding:0;border:0;order:3;width:100%}nav a{padding:4px 0;font-size:15px}}</style></noscript>
<script type="application/ld+json">${schema(c, lang, url)}</script>
</head><body><a class="skip" href="#main">${e(c.skip)}</a>
<header class="site-header"><div class="wrap header-inner"><a class="wordmark" href="#top">${e(c.name)}</a>
<nav id="navigation" aria-label="${e(c.navLabel)}">${ids.map((id, i) => `<a href="#${id}">${e(c.nav[i])}</a>`).join('')}</nav>
<div class="header-tools"><div class="language-switch" role="group" aria-label="${e(c.languageLabel)}">${['pl', 'en'].map(l => `<a href="${prefix}${l}/" lang="${l}" hreflang="${l}" data-language-choice="${l}"${lang === l ? ' aria-current="page"' : ''}>${l.toUpperCase()}</a>`).join('')}</div><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="navigation">${e(c.menu)}</button></div></div></header>
<main id="main">
<section class="hero wrap" id="top" aria-labelledby="hero-title"><div class="hero-text"><h1 id="hero-title">${e(c.hero)}</h1><p class="lead">${e(c.lead)}</p><div class="actions"><a class="button" href="${e(mail)}" data-track="intro_request">${e(c.primary)}</a><a class="text-link" href="#example">${e(c.secondary)}</a></div><p class="hero-meta">${e(c.heroMeta)}</p></div></section>

<section class="section wrap" id="situations" aria-labelledby="situations-title"><h2 id="situations-title">${e(c.situationsTitle)}</h2><div class="situations">${c.situations.map(([title, text]) => `<article><h3>${e(title)}</h3><p>${e(text)}</p></article>`).join('')}</div></section>

<section class="section wrap split" id="fixes" aria-labelledby="fixes-title"><div><h2 id="fixes-title">${e(c.fixTitle)}</h2><p class="section-intro">${e(c.fixIntro)}</p></div><ul class="checklist">${c.fixes.map(item => `<li>${e(item)}</li>`).join('')}</ul></section>

<section class="section wrap" id="process" aria-labelledby="process-title"><h2 id="process-title">${e(c.processTitle)}</h2><ol class="steps">${c.process.map(([title, time, text]) => `<li><h3>${e(title)}</h3><p class="time">${e(time)}</p><p>${e(text)}</p></li>`).join('')}</ol><p class="note">${e(c.processNote)}</p></section>

<section class="section wrap case" id="example" aria-labelledby="case-title"><p class="label">${e(c.caseLabel)}</p><h2 id="case-title">${e(c.caseTitle)}</h2>
<div class="case-body"><div class="prose">${c.caseText.map(p => `<p>${e(p)}</p>`).join('')}<p><a class="text-link" href="${reviews}" ${external} data-track="product_open">${e(c.caseLink)}</a></p></div><dl class="facts">${c.caseFacts.map(([k, v]) => `<div><dt>${e(k)}</dt><dd>${e(v)}</dd></div>`).join('')}</dl></div></section>

<section class="section wrap split" id="experience" aria-labelledby="experience-title"><h2 id="experience-title">${e(c.expTitle)}</h2><dl class="experience">${c.experience.map(([company, text]) => `<div><dt>${e(company)}</dt><dd>${e(text)}</dd></div>`).join('')}</dl></section>

<section class="section wrap split" id="about" aria-labelledby="about-title"><div class="about-intro"><h2 id="about-title">${e(c.aboutTitle)}</h2><img class="portrait" src="${prefix}assets/portrait-640.jpg" alt="${e(c.portraitAlt)}" width="640" height="800" loading="lazy" decoding="async"></div><div class="prose">${c.about.map(p => `<p>${e(p)}</p>`).join('')}<p><a class="text-link" href="${linkedin}" ${external} data-track="linkedin_open">${e(c.aboutLink)}</a></p></div></section>

<section class="contact" id="contact" aria-labelledby="contact-title"><div class="wrap"><h2 id="contact-title">${e(c.contactTitle)}</h2><p>${e(c.contactText)}</p>
<div class="actions">${booking ? `<a class="button" href="${e(booking)}" ${external} data-track="booking_open">${e(c.bookingCta)}</a>` : ''}<a class="button${booking ? ' secondary' : ''}" href="${e(mail)}" data-track="intro_request">${e(c.emailCta)}</a><button class="button secondary" type="button" data-copy="${email}" data-copied="${e(c.copied)}" data-track="email_copy" hidden>${e(c.copyCta)}</button></div>
<p class="contact-alt"><a href="mailto:${email}" data-track="email_click">${email}</a><span aria-hidden="true"> · </span><a href="${linkedin}" ${external} data-track="linkedin_open">LinkedIn</a></p></div></section>
</main>
<footer class="wrap footer"><span>© ${new Date().getFullYear()} ${e(c.name)} · ${e(c.personal)}</span><span class="footer-links"><button class="privacy-open" type="button">${e(c.settings)}</button><a href="#top">${e(c.back)}</a></span></footer>
<section id="consent-banner" class="consent-banner" aria-label="${e(c.consentTitle)}" hidden><h2>${e(c.consentTitle)}</h2><p>${e(c.consentText)}</p><div class="consent-actions"><button type="button" data-consent="granted">${e(c.accept)}</button><button type="button" data-consent="denied">${e(c.reject)}</button><button type="button" class="privacy-open">${e(c.privacy)}</button></div></section>
<dialog id="privacy-dialog" aria-labelledby="privacy-title"><button type="button" class="privacy-close" aria-label="${e(c.close)}">×</button><h2 id="privacy-title">${e(c.privacyTitle)}</h2><p>${e(c.privacyText)}</p><p><a href="https://policies.google.com/privacy" ${external}>${e(c.googlePrivacy)}</a></p><p class="analytics-status" data-denied="${e(c.analyticsStatus[0])}" data-granted="${e(c.analyticsStatus[1])}"></p><div class="consent-actions"><button type="button" data-consent="granted">${e(c.accept)}</button><button type="button" data-consent="denied">${e(c.reject)}</button></div></dialog>
</body></html>
`;
}

for (const lang of ['en', 'pl']) {
  fs.mkdirSync(new URL(lang + '/', root), {recursive: true});
  fs.writeFileSync(new URL(lang + '/index.html', root), render(lang));
}
fs.writeFileSync(new URL('index.html', root), render('en', true));
fs.writeFileSync(new URL('sitemap.xml', root), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['en', 'pl'].map(lang => `<url><loc>${site}${lang}/</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod><xhtml:link rel="alternate" hreflang="en" href="${site}en/"/><xhtml:link rel="alternate" hreflang="pl" href="${site}pl/"/></url>`).join('\n')}
</urlset>
`);
console.log('Built EN, PL and automatic entry page.');
