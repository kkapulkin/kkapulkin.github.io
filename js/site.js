// mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  const links = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// publication filter (publications page only)
const chips = document.querySelectorAll('.chip[data-filter]');
if (chips.length) {
  const pubs = document.querySelectorAll('.pub[data-tags]');
  const empty = document.querySelector('.pub-empty');
  const setActive = (f) => {
    let matched = false;
    chips.forEach(c => {
      const on = c.dataset.filter === f;
      c.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (on) matched = true;
    });
    return matched;
  };
  const apply = (f) => {
    let shown = 0;
    pubs.forEach(p => {
      const show = f === 'all' || p.dataset.tags.split(' ').includes(f);
      p.style.display = show ? '' : 'none';
      if (show) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  };
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      setActive(chip.dataset.filter);
      apply(chip.dataset.filter);
      history.replaceState(null, '', chip.dataset.filter === 'sel' ? location.pathname : '#' + chip.dataset.filter);
    });
  });
  // choose initial filter: URL hash (e.g. #homotopy) wins, else the pressed chip
  const hash = location.hash.replace('#', '');
  let initial = (hash && setActive(hash)) ? hash
              : (document.querySelector('.chip[aria-pressed="true"]') || chips[0]).dataset.filter;
  setActive(initial);
  apply(initial);
}
