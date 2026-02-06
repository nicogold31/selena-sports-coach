const images = document.querySelectorAll('.carousel-image');

const backgrounds = [
  'images/bg1.jpg',
  'images/bg2.jpg',
  'images/bg3.jpg'
];

// Set background images
images.forEach((img, index) => {
  img.style.backgroundImage = `url(${backgrounds[index]})`;
});

let current = 0;

setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 5000); // change every 5 seconds
