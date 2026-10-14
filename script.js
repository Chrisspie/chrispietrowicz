/* Replace these values before publishing. Empty values preserve labelled placeholders. */
const SITE_CONTACT = {
  email: 'krzysztof.pietrowicz@gmail.com',
  linkedin: '',
  github: '',
  portrait: 'assets/krzysztof-portrait.png'
};

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
window.matchMedia('(min-width: 561px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
if (SITE_CONTACT.email) {
  const email = SITE_CONTACT.email.trim();
  document.querySelector('#email-link').href = `mailto:${email}?subject=Let%27s%20discuss%20a%20business%20problem`;
  const display = document.querySelector('.email-display');
  display.href = `mailto:${email}`;
  display.textContent = email;
  const placeholderNote = document.querySelector('.placeholder-note');
  if (placeholderNote) placeholderNote.hidden = true;
}
for (const key of ['linkedin', 'github']) {
  if (SITE_CONTACT[key]) {
    const link = document.querySelector(`[data-contact="${key}"]`);
    try {
      const url = new URL(SITE_CONTACT[key]);
      if (url.protocol === 'https:') { link.href = url.href; link.querySelector('span').remove(); }
    } catch { /* Keep the explicitly labelled placeholder if the URL is invalid. */ }
  }
}
if (SITE_CONTACT.portrait) {
  const photo = document.querySelector('#portrait-image');
  photo.src = SITE_CONTACT.portrait;
  photo.alt = 'Krzysztof, senior software engineer and product builder';
}
