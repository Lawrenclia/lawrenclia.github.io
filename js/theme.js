/* Shared by the desktop and document pages; runs before the first paint. */
(() => {
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  let preference;
  let switching = false;
  try { preference = localStorage.getItem('theme'); } catch (_) { /* Storage may be disabled. */ }
  if (preference !== 'light' && preference !== 'dark') preference = null;

  function syncLegacyPage() {
    if (document.body && !document.body.matches('.macos-page, .desktop-home')) {
      document.body.classList.toggle('dark-theme', root.dataset.theme === 'dark');
    }
  }
  document.addEventListener('DOMContentLoaded', syncLegacyPage, { once: true });

  function apply(theme, persist = false) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    syncLegacyPage();
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#202829' : '#e7ebea');
    if (persist) {
      preference = theme;
      try { localStorage.setItem('theme', theme); } catch (_) { /* Keep the in-memory choice. */ }
    }
    window.dispatchEvent(new CustomEvent('site-theme-change', { detail: theme }));
  }

  async function toggle(button) {
    if (switching) return;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      apply(next, true);
      return;
    }
    switching = true;
    button?.classList.add('is-animating');
    root.classList.add('theme-transitioning');
    let transition;
    try {
      const rect = button?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : 0;
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      transition = document.startViewTransition(() => apply(next, true));
      await transition.ready;
      await root.animate({ clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] }, {
        duration: 380, easing: 'cubic-bezier(.22,1,.36,1)', pseudoElement: '::view-transition-new(root)'
      }).finished;
    } catch (_) {
      apply(next, true);
    } finally {
      transition?.skipTransition();
      root.classList.remove('theme-transitioning');
      button?.classList.remove('is-animating');
      switching = false;
    }
  }

  media.addEventListener('change', () => { if (!preference) apply(media.matches ? 'dark' : 'light'); });
  window.addEventListener('storage', (event) => {
    if (event.key !== 'theme' && event.key !== null) return;
    preference = event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : null;
    apply(preference || (media.matches ? 'dark' : 'light'));
  });
  window.siteTheme = { toggle };
  apply(preference || (media.matches ? 'dark' : 'light'));
})();
