const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.certificate-card');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => {
      card.hidden = selected !== 'todos' && card.dataset.category !== selected;
    });
  });
});
