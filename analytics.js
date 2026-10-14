/* GA4 basic consent: no Google request until an explicit opt-in. */
(() => {
  if (window.__localeRedirecting) return;
  const measurementId = 'G-KNV4H5SGS0';
  const consentKey = 'site-analytics-consent-v1';
  const allowedHosts = ['chrispietrowicz.com', 'www.chrispietrowicz.com', 'zealous-meadow-008938803.azurestaticapps.net'];
  const live = allowedHosts.includes(location.hostname);
  const banner = document.querySelector('#consent-banner');
  const dialog = document.querySelector('#privacy-dialog');
  const status = document.querySelector('.analytics-status');
  let choice = 'unknown';
  let started = false;
  try {
    const saved = JSON.parse(localStorage.getItem(consentKey));
    if (saved?.expires > Date.now() && ['granted', 'denied'].includes(saved.value)) choice = saved.value;
  } catch { /* No valid saved choice. */ }
  window['ga-disable-' + measurementId] = choice !== 'granted';
  function cleanUrl(value) {
    try { const url = new URL(value); return url.origin + url.pathname; } catch { return ''; }
  }
  function startAnalytics() {
    if (!live || choice !== 'granted' || started) return;
    started = true;
    window['ga-disable-' + measurementId] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: true,
      page_location: cleanUrl(location.href),
      page_referrer: cleanUrl(document.referrer),
      language: document.documentElement.lang,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 60 * 60 * 24 * 180,
      cookie_update: false
    });
    const script = document.createElement('script');
    script.async = true;
    script.id = 'google-analytics-tag';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.append(script);
  }
  function clearAnalyticsCookies() {
    const host = location.hostname;
    const parts = host.split('.');
    const domains = ['', ...parts.map((_, i) => parts.slice(i).join('.')).filter(d => d.includes('.'))];
    for (const item of document.cookie.split(';')) {
      const name = item.trim().split('=')[0];
      if (!/^_ga(?:_|$)/.test(name)) continue;
      for (const domain of domains) {
        document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '') + '; SameSite=Lax';
      }
    }
  }
  function updateUI() {
    banner.hidden = choice !== 'unknown';
    status.textContent = status.dataset[choice === 'granted' ? 'granted' : 'denied'];
  }
  function choose(value) {
    const previous = choice;
    choice = value;
    try { localStorage.setItem(consentKey, JSON.stringify({ value, expires: Date.now() + 180 * 24 * 60 * 60 * 1000 })); } catch { /* Honour for this page even without storage. */ }
    window['ga-disable-' + measurementId] = value !== 'granted';
    if (value === 'granted') {
      if (started && previous !== 'granted') window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
      startAnalytics();
    } else {
      if (started) window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
      clearAnalyticsCookies();
    }
    updateUI();
    if (dialog.open) dialog.close();
  }
  document.querySelectorAll('[data-consent]').forEach(button => {
    button.addEventListener('click', () => choose(button.dataset.consent));
  });
  document.querySelectorAll('.privacy-open').forEach(button => button.addEventListener('click', () => { updateUI(); dialog.showModal(); }));
  document.querySelector('.privacy-close').addEventListener('click', () => dialog.close());
  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-track]');
    if (link && live && started && choice === 'granted') window.gtag('event', link.dataset.track, { site_language: document.documentElement.lang });
  });
  updateUI();
  startAnalytics();
})();
