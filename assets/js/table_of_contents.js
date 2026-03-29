/* PROGRESS BAR */
window.addEventListener('scroll', () => {
  const el = document.documentElement;
  document.getElementById('progress').style.width =
    (el.scrollTop / (el.scrollHeight - el.clientHeight) * 100) + '%';
});

function buildToc(ulId) {
  const ul = document.getElementById(ulId);
  sections.forEach(s => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href = '#' + s.id;
    a.textContent = s.label;
    a.addEventListener('click', () => {
      document.getElementById('toc-drawer').classList.remove('open');
    });
    li.appendChild(a);
    ul.appendChild(li);
  });
}
buildToc('toc-list');
buildToc('toc-drawer-list');

/* SCROLLSPY */
const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean);
const tocLinks   = document.querySelectorAll('#toc-list a');

const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('#toc-list li').forEach(li => li.classList.remove('active'));
      const match = document.querySelector(`#toc-list a[href="#${id}"]`);
      if (match) match.closest('li').classList.add('active');
    }
  });
}, { rootMargin: '-30% 0px -65% 0px' });

sectionEls.forEach(el => spy.observe(el));

/* MOBILE TOC */
document.getElementById('toc-btn').addEventListener('click', () => {
  document.getElementById('toc-drawer').classList.add('open');
});
document.getElementById('toc-drawer-close').addEventListener('click', () => {
  document.getElementById('toc-drawer').classList.remove('open');
});