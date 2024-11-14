let index = 0;
const images = document.getElementById('images');
const totalImages = document.querySelectorAll('.image').length;

function changeImage() {
  index++;
  if (index >= totalImages) {
    index = 0;
  }

  images.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(changeImage, 3000);
