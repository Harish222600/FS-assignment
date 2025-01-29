// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Tooltip for menu items
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
      const description = item.getAttribute('data-description');
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = description;
      document.body.appendChild(tooltip);
  
      const rect = item.getBoundingClientRect();
      tooltip.style.position = 'absolute';
      tooltip.style.top = `${rect.top - 40}px`;
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.transform = 'translateX(-50%)';
  
      item.addEventListener('mouseout', () => {
        tooltip.remove();
      });
    });
  });