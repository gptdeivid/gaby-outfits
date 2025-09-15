import { tops, pants, shoes } from './data.js';

// Carousel state
const indices = [0, 0, 0];
let carruseles = [];

// Initialize carousel
export function initCarousel() {
  carruseles = [
    document.querySelector("#carrusel1 .imagenes"),
    document.querySelector("#carrusel2 .imagenes"),
    document.querySelector("#carrusel3 .imagenes")
  ];

  // Load images
  generateItems('imagenesPlayeras', tops);
  generateItems('imagenesPantalones', pants);
  generateItems('imagenesZapatos', shoes);

  // Update all carousels
  updateCarousel(0);
  updateCarousel(1);
  updateCarousel(2);
}

// Move carousel
export function move(direction, row) {
  const total = carruseles[row].children.length;
  indices[row] += direction;
  if (indices[row] < 0) indices[row] = total - 1;
  if (indices[row] >= total) indices[row] = 0;
  updateCarousel(row);
}

// Update carousel position
function updateCarousel(row) {
  const first = carruseles[row].children[0];
  if (!first) return;
  const width = first.clientWidth;
  carruseles[row].style.transform = `translateX(-${indices[row] * width}px)`;
}

// Save current look and navigate to final page
export function saveLook() {
  const selectedTop = tops[indices[0]];
  const selectedPant = pants[indices[1]];
  const selectedShoe = shoes[indices[2]];
  const selection = [selectedTop, selectedPant, selectedShoe];
  localStorage.setItem("lookFinal", JSON.stringify(selection));
  window.location.href = "lookfinal.html";
}

// Generate items for carousel
function generateItems(containerId, items) {
  const container = document.getElementById(containerId);
  items.forEach(item => {
    const a = document.createElement('a');
    a.href = item.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;
    a.appendChild(img);
    container.appendChild(a);
  });
}

// Make functions available globally for HTML onclick handlers
window.mover = move;
window.guardarLook = saveLook;