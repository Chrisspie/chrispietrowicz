const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '+';
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('span').textContent = open ? '−' : '+';
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); }
});
window.matchMedia('(min-width:561px)').addEventListener('change', closeMenu);
for (const link of document.querySelectorAll('[data-language-choice]')) {
  link.addEventListener('click', () => {
    try { localStorage.setItem('site-language', link.dataset.languageChoice); } catch { /* Link still works. */ }
    const destination = new URL(link.href);
    destination.hash = location.hash;
    link.href = destination.href;
  });
}
