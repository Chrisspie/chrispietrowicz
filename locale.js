/* Regional browser hints, no IP lookup or request for precise location. */
(() => {
  if (location.protocol === 'file:') return;
  let selected;
  try { selected = localStorage.getItem('site-language'); } catch { /* Storage can be unavailable. */ }
  if (!['pl', 'en'].includes(selected)) {
    let timezone = '';
    try { timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch { /* Use language only. */ }
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language || 'en'];
    selected = timezone === 'Europe/Warsaw' || languages[0].toLowerCase().startsWith('pl') ? 'pl' : 'en';
  }
  const destination = new URL(selected + '/', new URL('./', location.href));
  destination.search = location.search;
  destination.hash = location.hash;
  window.__localeRedirecting = true;
  location.replace(destination.href);
})();
