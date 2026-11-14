document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.certificate-card');

  filters.forEach(button => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;

      filters.forEach(item => {
        const isActive = item === button;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      cards.forEach(card => {
        const matches = selected === 'todos' || card.dataset.category === selected;
        card.hidden = !matches;
      });
    });
  });
});
