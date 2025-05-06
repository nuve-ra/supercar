const links = document.querySelectorAll('.tooltip-link');
const tooltip = document.getElementById('tooltip');

links.forEach(link => {
  link.addEventListener('mouseenter', (e) => {
    tooltip.style.display = 'block';
    tooltip.textContent = link.dataset.tooltip;
  });

  link.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  link.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

function goTo(page) {
  window.location.href = page;
}
