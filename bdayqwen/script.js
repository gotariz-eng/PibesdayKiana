// Generate floating hearts
function createHearts() {
  const hearts = document.querySelector('.hearts');
  if (!hearts) return;

  const heartSymbols = ['❤️', '💕', '💖', '💗', '💘', '💓'];
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-another';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDelay = Math.random() * 5 + 's';
    hearts.appendChild(heart);
  }
}

// Create falling petals (for flowers page)
function createPetals() {
  const petalsContainer = document.querySelector('.petals');
  if (!petalsContainer) return;

  const petals = ['🌸', '🌹', '🌷', '💐', '💖'];
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 10 + 5) + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';
    petalsContainer.appendChild(petal);
  }
}

// Navigation Functions
function goToMenu() {
  window.location.href = 'menu.html';
}

function goToNo() {
  // Temporarily change body for soft version
  document.body.id = 'page1a';
  document.getElementById('greeting').textContent = "I’ll promise you’ll like it… 💌";
  document.getElementById('subtext').textContent = "";
  document.querySelector('.no-btn').style.display = 'none';
  document.querySelector('.yes-btn').textContent = "Take a look ✨";
  document.querySelector('.yes-btn').onclick = goToMenu;
}

function goBack() {
  window.location.href = 'index.html';
}

// On Load
window.onload = function () {
  createHearts();
  if (window.location.pathname.includes('flowers.html')) {
    createPetals();
  }
};

let currentSlide = 0;

function showSlide(index) {
  const slider = document.getElementById("song-slider");
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
