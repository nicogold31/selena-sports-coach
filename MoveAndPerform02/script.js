const images = document.querySelectorAll('.carousel-image');

// Detect mobile screen
if (window.innerWidth <= 768 ) {

  //Mobile images
  backgrounds = [
    'images/bg1-mobile.jpg',
    'images/bg2-mobile.jpg',
    'images/bg3-mobile.jpg'
  ];

} else {
  //Desktop images
  backgrounds = [
    'images/bg1-desktop.jpg',
    'images/bg2-desktop.jpg',
    'images/bg3-desktop.jpg'
  ];

}

// Set background images
images.forEach((img, index) => {
  img.style.backgroundImage = `url(${backgrounds[index]})`;
});

let current = 0;

setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 4000); // change every 4 seconds
