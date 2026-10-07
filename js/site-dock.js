/* One navigation component for every page, independent of React and icon CDNs. */
(() => {
  const siteRoot = new URL('../', document.currentScript.src);
  const stylesheet = new URL('css/site-dock.css?v=20261007-dock-v4', siteRoot);
  const icons = {
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
    folder: '<path d="M3 7V5a1 1 0 0 1 1-1h5l2 3h9a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>',
    book: '<path d="M4 3h15a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4Z"/><path d="M8 3v18m4-12h4m-4 4h4"/>',
    user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>',
    file: '<path d="M5 3h10l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"/><path d="M15 3v5h4M9 12h6m-6 4h6"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 6-6 4 4 3-3 5 5"/>',
    moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'
  };
  const svg = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

  class SiteDock extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `<link rel="stylesheet" href="${stylesheet.href}">
        <nav aria-label="主导航" class="dock">
          ${[['home', 'index.html', 'home', '主页'], ['projects', 'projects.html', 'folder', '项目'], ['notes', 'notes.html', 'book', '笔记'], ['blog', 'blog.html', 'file', '博客'], ['mc', 'mc.html', 'image', '相册'], ['about', 'about.html', 'user', '关于']]
            .map(([page, path, icon, label]) => `<a data-page="${page}" href="${new URL(path, siteRoot)}" aria-label="${label}"><span class="app-icon">${svg(icon)}</span><span class="label">${label}</span></a>`).join('')}
          <span class="divider" aria-hidden="true"></span>
          <button type="button" class="theme" aria-label="切换主题"><span class="app-icon"></span><span class="label">外观</span></button>
        </nav>`;
      const path = location.pathname.slice(siteRoot.pathname.length);
      const current = !path || path === 'index.html' ? 'home'
        : path.startsWith('files/notes/') || path === 'notes.html' ? 'notes'
        : path === 'projects.html' ? 'projects'
        : path.startsWith('blogs/') || path === 'blog.html' ? 'blog'
        : path === 'mc.html' ? 'mc'
        : path === 'about.html' || path === 'cv.html' ? 'about' : null;
      if (current) shadow.querySelector(`[data-page="${current}"]`).setAttribute('aria-current', 'page');
      const button = shadow.querySelector('button');
      const update = () => {
        const dark = document.documentElement.dataset.theme === 'dark';
        this.dataset.theme = dark ? 'dark' : 'light';
        button.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
        button.title = dark ? '浅色模式' : '深色模式';
        button.querySelector('.app-icon').innerHTML = svg(dark ? 'sun' : 'moon');
      };
      update();
      this.themeListener = update;
      window.addEventListener('site-theme-change', update);
      button.addEventListener('click', () => window.siteTheme.toggle(button));
    }

    disconnectedCallback() {
      window.removeEventListener('site-theme-change', this.themeListener);
    }
  }

  customElements.define('site-dock', SiteDock);
})();
