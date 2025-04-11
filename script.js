// Typing animation
const sentences = [
  "I can build cross-platform mobile apps using Flutter for Android and iOS.",
  "I develop responsive websites using React, HTML, CSS, and JavaScript.",
  "I have hands-on experience building AI-powered apps using Python, TensorFlow, and YOLO.",
  "I can integrate databases like MySQL to manage and retrieve large-scale user data efficiently.",
  "I build user-friendly UIs and scalable backends for full-stack applications.",
  "I can work with APIs like OpenRouteService to integrate real-time navigation and routing features into apps.",
  "I constantly upgrade my skills through platforms like Coursera, having completed certifications in Flutter, Python, and Generative AI.",
  "I built bill order entry and management systems with dynamic table controls and multi-page navigation.",
  "I have experience integrating machine learning models into applications to provide intelligent solutions.",
  "I contributed to open-source projects, collaborating with other developers to improve and expand software functionalities.",
  "I implemented responsive design principles to ensure applications are accessible and user-friendly across various devices.",
  "I utilized version control systems like Git to manage and track changes in my projects efficiently.",
  "I applied data analysis techniques to interpret user data, enhancing application performance and user experience."
];

const typingText = document.getElementById("typing-text");
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentSentence = sentences[sentenceIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = currentSentence.slice(0, charIndex);

  if (!isDeleting && charIndex === currentSentence.length) {
    setTimeout(() => (isDeleting = true), 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
  }

  const typingSpeed = isDeleting ? 30 : 60;
  setTimeout(type, typingSpeed);
}

type();

// Initialize Lucide icons
lucide.createIcons();

// Create bubbles
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
