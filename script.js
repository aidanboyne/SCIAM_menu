document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    const checkVisibility = () => {
      sections.forEach(section => {
        const position = section.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) { // Adjust the value as needed for when to start the animation
          section.style.opacity = 1;
          section.style.transform = 'translateY(0)';
        }
      });
    };
  
    checkVisibility();
  
    window.addEventListener('scroll', checkVisibility);
  });
  