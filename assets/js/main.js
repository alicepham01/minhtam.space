/* ── Filter ── */
const filterBtns  = document.querySelectorAll('.filter-btn');
const allCards    = document.querySelectorAll('.card');
const showMoreBtn = document.getElementById('showMoreBtn');
const INITIAL     = 6;
let expanded      = false;
let activeFilter  = 'all';

function applyFilter(filter) {
  activeFilter = filter;
  let shown = 0;
  allCards.forEach(card => {
    const match = filter === 'all' || card.dataset.cat === filter;
    if (!match) { card.classList.add('hidden'); return; }
    if (!expanded && shown >= INITIAL) {
      card.classList.add('hidden');
    } else {
      card.classList.remove('hidden');
      shown++;
    }
  });
  if (showMoreBtn) {
    const total = filter === 'all'
      ? allCards.length
      : [...allCards].filter(c => c.dataset.cat === filter).length;
    showMoreBtn.disabled = expanded || total <= INITIAL;
  }
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});

if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {
    expanded = true;
    applyFilter(activeFilter);
  });
}

if (allCards.length) applyFilter('all');

/* ── Nav on scroll ── */
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 40
      ? 'rgba(42,39,32,0.8)'
      : '';
  }, { passive: true });
}
