const links = document.querySelectorAll('.tooltip-link');
const tooltip = document.getElementById('tooltip');

links.forEach(link => {
  // Desktop (mouse events)
  link.addEventListener('mouseenter', (e) => {
    showTooltip(e, link);
  });

  link.addEventListener('mousemove', (e) => {
    moveTooltip(e);
  });

  link.addEventListener('mouseleave', () => {
    hideTooltip();
  });

  // Mobile (touch events)
  link.addEventListener('touchstart', (e) => {
    showTooltip(e.touches[0], link);
  });

  link.addEventListener('touchmove', (e) => {
    moveTooltip(e.touches[0]);
  });

  link.addEventListener('touchend', () => {
    hideTooltip();
  });
});

function showTooltip(e, link) {
  tooltip.style.display = 'block';
  tooltip.textContent = link.dataset.tooltip;
  moveTooltip(e);
}

function moveTooltip(e) {
  tooltip.style.left = e.pageX + 15 + 'px';
  tooltip.style.top = e.pageY + 15 + 'px';
}

function hideTooltip() {
  tooltip.style.display = 'none';
}

function goTo(page) {
  window.location.href = page;
}
