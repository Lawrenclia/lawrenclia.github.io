/* Shared Finder sidebar navigation. */
(() => {
  const root = new URL('../', document.currentScript.src);
  const stylesheet = new URL('css/site-chrome.css?v=20261007-rebuild-v1', root);
  const pages = [
    ['index.html', '主页', 'home'], ['projects.html', '项目', 'folder'],
    ['notes.html', '笔记', 'book'], ['about.html', '关于', 'user']
  ];
  const paths = {
    home: '<path d="m3 11 9-8 9 8v10H3Z"/><path d="M9 21v-8h6v8"/>',
    folder: '<path d="M3 5h6l2 2h10v14H3Z"/>',
    book: '<path d="M4 3h16v18H4Z"/><path d="M8 3v18m4-12h5m-5 4h5"/>',
    file: '<path d="M5 3h10l4 4v14H5Z"/><path d="M15 3v5h4M9 12h6m-6 4h6"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 6-6 4 4 3-3 5 5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
  const path = location.pathname.slice(root.pathname.length);
  const current = path.startsWith('files/notes/') ? 'notes.html' : path.startsWith('blogs/') ? 'blog.html'
    : path === 'cv.html' ? 'about.html' : path || 'index.html';
  const links = () => pages.map(([href, label, name]) => `<a href="${new URL(href, root)}" ${current === href ? 'aria-current="page"' : ''}>${icon(name)}<span>${label}</span></a>`).join('');

  class SiteSidebar extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      this.attachShadow({mode:'open'}).innerHTML = `<link rel="stylesheet" href="${stylesheet}"><div class="sidebar"><p>个人空间</p><nav aria-label="页面导航">${links()}</nav><div class="sidebar-footer">Lawrenclia<br><span>项目 · 笔记 · 日常</span></div></div>`;
    }
  }
  customElements.define('site-sidebar', SiteSidebar);
})();
