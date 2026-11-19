// Small progressive enhancements; the page works without JavaScript.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header') && navigation.classList.contains('open')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); }
});
window.matchMedia('(min-width:721px)').addEventListener('change', closeMenu);

for (const link of document.querySelectorAll('[data-language-choice]')) {
  link.addEventListener('click', () => {
    try { localStorage.setItem('site-language', link.dataset.languageChoice); } catch { /* Link still works. */ }
    const destination = new URL(link.href);
    destination.hash = location.hash;
    link.href = destination.href;
  });
}

// "Copy address" helps visitors without a configured mail client.
const copyButton = document.querySelector('[data-copy]');
if (copyButton && navigator.clipboard) {
  const label = copyButton.textContent;
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      copyButton.textContent = copyButton.dataset.copied;
      setTimeout(() => { copyButton.textContent = label; }, 2000);
    } catch { /* Address stays visible below the buttons. */ }
  });
}
