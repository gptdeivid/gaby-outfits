// Carousel state
const carouselState = {
  tops: { currentIndex: 0, items: tops },
  pants: { currentIndex: 0, items: pants },
  shoes: { currentIndex: 0, items: shoes }
};

// Initialize carousels when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initCarousels();
  setupEventListeners();
});

// Initialize all carousels
function initCarousels() {
  updateCarousel('tops');
  updateCarousel('pants');
  updateCarousel('shoes');
}

// Update a specific carousel's display
function updateCarousel(section) {
  const state = carouselState[section];
  const container = document.querySelector(`#${section}-carousel .carousel-items`);
  const item = state.items[state.currentIndex];
  
  if (container && item) {
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;
    
    container.innerHTML = '';
    container.appendChild(img);
  }
}

// Set up event listeners for navigation buttons
function setupEventListeners() {
  document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
      const section = button.dataset.section;
      const direction = button.classList.contains('prev') ? -1 : 1;
      moveCarousel(section, direction);
    });
  });
}

// Move carousel in the specified direction
function moveCarousel(section, direction) {
  const state = carouselState[section];
  state.currentIndex = (state.currentIndex + direction + state.items.length) % state.items.length;
  updateCarousel(section);
}