(() => {
  window.lucide?.createIcons();

  const search = document.querySelector('[data-list-search]');
  const entries = [...document.querySelectorAll('[data-list-entry]')];
  const count = document.querySelector('[data-result-count]');
  const empty = document.querySelector('[data-empty-state]');
  const isProjects = document.body.classList.contains('page-projects');

  function updateList() {
    const query = (search?.value || '').trim().normalize('NFKC').toLocaleLowerCase();
    let visible = 0;
    entries.forEach((entry) => {
      const searchable = `${entry.textContent} ${entry.dataset.search || ''}`.normalize('NFKC').toLocaleLowerCase();
      const matches = searchable.includes(query);
      entry.hidden = !matches;
      if (matches) visible++;
    });
    if (count) count.textContent = `${visible} / ${entries.length} ${isProjects ? '个项目' : '篇笔记'}`;
    if (empty) empty.hidden = visible > 0;
  }
  search?.addEventListener('input', updateList);
  search?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { search.value = ''; updateList(); }
  });
  document.querySelector('[data-clear-search]')?.addEventListener('click', () => {
    search.value = '';
    updateList();
    search.focus();
  });
  if (entries.length) updateList();
})();
