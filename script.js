// Small progressive enhancements; the offer and navigation work without JavaScript.
document.documentElement.classList.add('js');
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
document.addEventListener('click', event => {
  if (!event.target.closest('.header') && navigation.classList.contains('open')) closeMenu();
});
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
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectScenario(index, focus = false) {
  tabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = i !== index;
  });
  document.querySelector('.scenario-index').textContent = `0${index + 1} / 03`;
  if (focus) tabs[index].focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectScenario(index));
  tab.addEventListener('keydown', event => {
    const next = {ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1}[event.key];
    if (next !== undefined) { event.preventDefault(); selectScenario(next, true); }
  });
});
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('.motion-toggle');
let paused = motionPreference.matches;
function updateMotion() {
  document.documentElement.classList.toggle('motion-paused', paused);
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.setAttribute('aria-label', paused ? motionButton.dataset.play : motionButton.dataset.pause);
  motionButton.querySelector('span').textContent = paused ? '▷' : 'Ⅱ';
}
motionButton.hidden = motionPreference.matches;
motionButton.addEventListener('click', () => { paused = !paused; updateMotion(); });
motionPreference.addEventListener('change', event => {
  paused = event.matches;
  motionButton.hidden = event.matches;
  updateMotion();
});
updateMotion();
if ('IntersectionObserver' in window) {
  const reveals = [...document.querySelectorAll('[data-reveal]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    });
  }, {threshold: 0.05});
  document.documentElement.classList.add('reveal-ready');
  reveals.forEach(element => observer.observe(element));
  const visibility = new IntersectionObserver(([entry]) => {
    document.querySelector('[data-workflow]').classList.toggle('in-view', entry.isIntersecting);
  });
  visibility.observe(document.querySelector('[data-workflow]'));
}
const progress = document.querySelector('.scroll-progress');
let scheduled = false;
function updateProgress() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
}, {passive: true});
window.addEventListener('resize', updateProgress);
updateProgress();
