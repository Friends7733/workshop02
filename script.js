function handleRegister(event) {
  // Add ripple effect
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size/2}px`;
  ripple.style.top = `${event.clientY - rect.top - size/2}px`;
  ripple.classList.add('ripple');
  
  button.appendChild(ripple);
  
  // Remove ripple after animation
  setTimeout(() => ripple.remove(), 1000);
  
  // Log registration click (replace with actual registration logic)
  console.log('Workshop registration clicked');
}

// Add ripple style dynamically
const style = document.createElement('style');
style.textContent = `
  .register-button {
      position: relative;
      overflow: hidden;
      text-decoration: none;
  }
  
  .ripple {
      position: absolute;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 1s linear;
      pointer-events: none;
  }
  
  @keyframes ripple {
      to {
          transform: scale(4);
          opacity: 0;
      }
  }
`;
document.head.appendChild(style);