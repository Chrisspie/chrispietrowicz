import fs from 'node:fs';
import { content } from '../src/content.mjs';
const root = new URL('../', import.meta.url);
const e = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const reviews = 'https://reviewscoach.com/';
const email = 'krzysztof.pietrowicz@gmail.com';
const linkedin = 'https://www.linkedin.com/in/krzysztof-pietrowicz-492744a6/';
const arrow = '<span aria-hidden="true">↗</span>';
const icon = name => {
  const paths = {
    document: '<path d="M9 3H5v18h14V7l-4-4H9Z"/><path d="M14 3v5h5M8 12h8M8 16h5"/>',
    app: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    spark: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    grid: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M10 3v18"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};
function render(lang, isRoot = false) {
  const c = content[lang], prefix = isRoot ? '' : '../';
  const mail = `mailto:${email}?subject=${encodeURIComponent(c.mailSubject)}&body=${encodeURIComponent(c.mailBody)}`;
  return `<!doctype html>
<html lang="${lang}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f6f5f0">
<title>${e(c.title)}</title><meta name="description" content="${e(c.description)}">
<link rel="canonical" href="https://chrispietrowicz.com/${isRoot ? '' : lang + '/'}">
<link rel="alternate" hreflang="en" href="https://chrispietrowicz.com/en/"><link rel="alternate" hreflang="pl" href="https://chrispietrowicz.com/pl/"><link rel="alternate" hreflang="x-default" href="https://chrispietrowicz.com/">
<meta property="og:title" content="${e(c.title)}"><meta property="og:description" content="${e(c.description)}"><meta property="og:type" content="website"><meta property="og:url" content="https://chrispietrowicz.com/${isRoot ? '' : lang + '/'}"><meta property="og:locale" content="${lang === 'pl' ? 'pl_PL' : 'en_GB'}"><meta property="og:image" content="https://chrispietrowicz.com/assets/krzysztof-portrait.png">
<link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml">${isRoot ? '<script src="locale.js"></script>' : ''}
<link rel="stylesheet" href="${prefix}styles.css?v=20261016-experience"><link rel="stylesheet" href="${prefix}experience.css?v=20261016-experience"><link rel="stylesheet" href="${prefix}bilingual.css?v=20261016-experience"><script src="${prefix}analytics.js" defer></script><script src="${prefix}script.js?v=20261016-experience" defer></script>
</head><body data-language="${lang}"><a class="skip" href="#main">${e(c.skip)}</a>
<div class="scroll-progress" aria-hidden="true"></div>
<header class="header wrap"><a class="wordmark" href="#" aria-label="Krzysztof Pietrowicz">krzysztof<span>.</span></a>
<nav id="navigation" aria-label="${lang === 'pl' ? 'Nawigacja główna' : 'Main navigation'}">${['approach', 'work', 'about', 'contact'].map((id, i) => `<a ${i === 3 ? 'class="nav-cta"' : ''} href="#${id}">${e(c.nav[i])}${i === 3 ? ' ' + arrow : ''}</a>`).join('')}</nav>
<div class="header-tools"><div class="language-switch" role="group" aria-label="${e(c.languageLabel)}">${['pl', 'en'].map(l => `<a href="${prefix}${l}/" lang="${l}" hreflang="${l}" data-language-choice="${l}" ${lang === l ? 'aria-current="page"' : ''}>${l.toUpperCase()}</a>`).join('<span aria-hidden="true">/</span>')}</div><button class="menu-toggle" aria-expanded="false" aria-controls="navigation">${e(c.menu)} <span aria-hidden="true">+</span></button></div></header>
<main id="main">
<section class="hero wrap" aria-labelledby="hero-title"><div class="hero-copy"><p class="eyebrow"><span class="dot"></span>${e(c.role)}</p><h1 id="hero-title">${e(c.hero[0])}<br><span>${e(c.hero[1])}</span></h1><p class="intro">${e(c.intro)}</p><div class="actions"><a class="button" href="#contact">${e(c.primary)} ${arrow}</a><a class="text-link" href="#approach">${e(c.secondary)} <span aria-hidden="true">↓</span></a></div><p class="hero-note">${e(c.heroNote)}</p></div>
<div class="workflow in-view" data-workflow><div class="workflow-top"><span class="eyebrow">${e(c.workflowLabel)}</span><button class="motion-toggle" aria-label="${e(c.pause)}" aria-pressed="false" data-pause="${e(c.pause)}" data-play="${e(c.play)}" hidden><span aria-hidden="true">Ⅱ</span></button></div><div class="scenario-tabs" role="tablist" aria-label="${e(c.workflowLabel)}">${c.workflowTabs.map((label, i) => `<button role="tab" id="scenario-tab-${i}" aria-controls="scenario-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? '0' : '-1'}">${e(label)}</button>`).join('')}</div>
${c.workflow.map((w, i) => `<div class="scenario" role="tabpanel" id="scenario-${i}" aria-labelledby="scenario-tab-${i}" tabindex="0" ${i ? 'hidden' : ''}><div class="flow-diagram"><div class="flow-node source">${icon(i === 0 ? 'document' : i === 1 ? 'grid' : 'app')}<span>${e(w.input)}</span></div><div class="flow-track" aria-hidden="true"><i></i></div><div class="flow-engine">${icon('spark')}<span>${e(w.engine)}</span></div><div class="flow-track" aria-hidden="true"><i></i></div><div class="flow-node destination">${icon('check')}<span>${e(w.output)}</span></div></div><div class="scenario-result"><span class="result-marker" aria-hidden="true">↳</span><div><h2>${e(w.title)}</h2><ul>${w.rows.map(row => `<li>${icon('check')}${e(row)}</li>`).join('')}</ul></div></div></div>`).join('')}
<div class="workflow-bottom"><span><i aria-hidden="true"></i>${e(c.workflowNote)}</span><span aria-hidden="true" class="scenario-index">01 / 03</span></div></div></section>
<div class="proof wrap">${c.proof.map(([a, b]) => `<div><strong>${e(a)}</strong><span>${e(b)}</span></div>`).join('')}</div>
<section class="section services" id="approach" aria-labelledby="services-title"><div class="wrap"><div class="section-heading" data-reveal><p class="eyebrow">${e(c.servicesEyebrow)}</p><h2 id="services-title">${e(c.servicesTitle)}</h2></div><div class="service-grid">${c.services.map(([title, text, list, result, link], i) => `<article class="service-card" data-reveal><div class="service-top"><span class="service-icon">${icon(['spark', 'app', 'grid'][i])}</span><span>0${i + 1}</span></div><h3>${e(title)}</h3><p>${e(text)}</p><ul>${list.map(item => `<li>${e(item)}</li>`).join('')}</ul><div class="service-result"><span>${e(c.deliverable)}</span><strong>${e(result)}</strong></div><a class="service-link" href="${e(mail + encodeURIComponent('\n' + c.workflowTabs[i]))}" data-track="intro_request" aria-label="${e(link)}">${arrow}</a></article>`).join('')}</div><div class="how-strip" data-reveal><p class="eyebrow">${e(c.howLabel)}</p><ol>${c.how.map((s, i) => `<li><span>0${i + 1}</span>${e(s)}</li>`).join('')}</ol></div></div></section>
<section class="section work-section professional-work" id="work" aria-labelledby="work-title"><div class="wrap">
<div class="section-heading experience-heading" data-reveal><div><p class="eyebrow">${e(c.workEyebrow)}</p><h2 id="work-title">${e(c.workTitle)}</h2></div><span class="experience-index" aria-hidden="true">01 — 04</span></div>
<div class="professional-grid">${c.professionalWork.map((project, i) => `<article class="professional-case ${i === 0 ? 'featured-case' : ''}" aria-labelledby="case-${i}" data-reveal><header class="case-header"><p class="case-context">${e(project.context)}</p><h3 id="case-${i}">${e(project.company)}</h3></header><div class="case-copy"><h4>${e(project.title)}</h4><p>${e(project.description)}</p><p class="case-contribution">${e(project.contribution)}</p></div><ul class="case-scope">${project.scope.map(item => `<li>${e(item)}</li>`).join('')}</ul></article>`).join('')}</div>
<aside class="independent-work" aria-label="${e(c.ownProductsLabel)}" data-reveal><p class="eyebrow">${e(c.ownProductsLabel)}</p><div class="independent-grid">${c.ownProducts.map((product, i) => `<article><div class="independent-heading"><h3>${i === 0 ? `<a href="${reviews}" target="_blank" rel="noopener noreferrer" aria-label="${e(c.reviewCta)}">${e(product.name)} ${arrow}</a>` : e(product.name)}</h3><span>${e(product.type)}</span></div><p>${e(product.text)}</p></article>`).join('')}</div></aside>
</div></section>
<section class="section about-section" id="about" aria-labelledby="about-title"><div class="wrap about-layout" data-reveal><img class="portrait" src="${prefix}assets/krzysztof-portrait.png" alt="${e(c.portraitAlt)}" width="1122" height="1402" loading="lazy"><div><p class="eyebrow">${e(c.aboutEyebrow)}</p><h2 id="about-title">${e(c.aboutTitle)}</h2><p>${e(c.aboutText)}</p><p>${e(c.aboutWork)}</p><a class="text-link" href="${linkedin}" target="_blank" rel="noopener noreferrer" data-track="linkedin_open">${e(c.aboutLink)} ${arrow}</a></div><span class="about-decoration" aria-hidden="true">↗</span></div></section>
<section class="contact-section" id="contact" aria-labelledby="contact-title"><div class="wrap" data-reveal><p class="eyebrow">${e(c.contactEyebrow)}</p><h2 id="contact-title">${e(c.contactTitle)}</h2><div class="contact-bottom"><div><p>${e(c.contactText)}</p><a class="email-display" href="mailto:${email}" data-track="email_click">${email}</a></div><a class="button" id="intro-link" href="${e(mail)}" data-track="intro_request">${e(c.introCta)} ${arrow}</a></div></div></section>
</main><footer class="wrap footer"><a class="wordmark" href="#">krzysztof<span>.</span></a><span>© ${new Date().getFullYear()} Krzysztof Pietrowicz</span><a href="#">${e(c.back)}</a><div class="footer-legal"><span>${e(c.personal)}</span><button class="privacy-open">${e(c.settings)}</button></div></footer>
<section id="consent-banner" class="consent-banner" aria-label="${e(c.consentTitle)}" hidden><h2>${e(c.consentTitle)}</h2><p>${e(c.consentText)}</p><div class="consent-actions"><button data-consent="granted">${e(c.accept)}</button><button data-consent="denied">${e(c.reject)}</button><button class="privacy-open">${e(c.privacy)}</button></div></section>
<dialog id="privacy-dialog" aria-labelledby="privacy-title"><button class="privacy-close" aria-label="${e(c.close)}">×</button><h2 id="privacy-title">${e(c.privacyTitle)}</h2><p>${e(c.privacyText)}</p><p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">${e(c.googlePrivacy)} ↗</a></p><p class="analytics-status" data-denied="${e(c.analyticsStatus[0])}" data-granted="${e(c.analyticsStatus[1])}"></p><div class="consent-actions"><button data-consent="granted">${e(c.accept)}</button><button data-consent="denied">${e(c.reject)}</button></div></dialog>
</body></html>`;
}
for (const lang of ['en', 'pl']) {
  fs.mkdirSync(new URL(lang + '/', root), {recursive: true});
  fs.writeFileSync(new URL(lang + '/index.html', root), render(lang));
}
fs.writeFileSync(new URL('index.html', root), render('en', true));
fs.writeFileSync(new URL('sitemap.xml', root), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://chrispietrowicz.com/en/</loc></url><url><loc>https://chrispietrowicz.com/pl/</loc></url></urlset>`);
console.log('Built EN, PL and automatic entry page.');
