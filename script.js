lucide.createIcons();

  //  bubbles
  const bubblesContainer = document.querySelector('.bubbles-container');
  const bubbleCount = 20;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const size = 20 + Math.random() * 80;
    const duration = 15 + Math.random() * 20;
    const delay = -Math.random() * 40;
    const initialX = Math.random() * 100;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${initialX}%`;
    bubble.style.animation = `float ${duration}s infinite linear`;
    bubble.style.animationDelay = `${delay}s`;

    bubblesContainer.appendChild(bubble);
  }