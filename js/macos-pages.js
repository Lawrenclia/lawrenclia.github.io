(() => {
  window.lucide?.createIcons();

  const search = document.querySelector('[data-list-search]');
  const entries = [...document.querySelectorAll('[data-list-entry]')];
  const filters = [...document.querySelectorAll('[data-project-filter]')];
  const count = document.querySelector('[data-result-count]');
  const empty = document.querySelector('[data-empty-state]');
  const heading = document.querySelector('#projects-title');
  let category = 'all';
  const labels = { all: '全部项目', course: '课程项目', network: '计算机网络', algorithms: '算法练习' };

  function updateList() {
    const query = (search?.value || '').trim().normalize('NFKC').toLocaleLowerCase();
    let visible = 0;
    entries.forEach((entry) => {
      const categories = (entry.dataset.category || '').split(' ');
      const matches = (category === 'all' || categories.includes(category)) && entry.textContent.normalize('NFKC').toLocaleLowerCase().includes(query);
      entry.hidden = !matches;
      if (matches) visible++;
    });
    if (count) count.textContent = `${visible} / ${entries.length} ${filters.length ? '个项目' : '篇笔记'}`;
    if (empty) empty.hidden = visible > 0;
    if (heading) heading.textContent = labels[category];
    filters.forEach((filter) => {
      const selected = filter.dataset.projectFilter === category;
      filter.classList.toggle('is-active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
  }
  function readCategory() {
    const requested = location.hash.slice(1);
    category = Object.hasOwn(labels, requested) ? requested : 'all';
    updateList();
  }
  filters.forEach((filter) => filter.addEventListener('click', () => {
    const next = filter.dataset.projectFilter;
    if (location.hash === `#${next}`) readCategory();
    else location.hash = next;
  }));
  search?.addEventListener('input', updateList);
  search?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { search.value = ''; updateList(); }
  });
  document.querySelector('[data-clear-search]')?.addEventListener('click', () => {
    search.value = '';
    updateList();
    search.focus();
  });
  if (entries.length) {
    if (filters.length) { window.addEventListener('hashchange', readCategory); readCategory(); }
    else updateList();
  }
})();
