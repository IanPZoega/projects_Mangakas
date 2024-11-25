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

//----------------------------------------------------------------

const passField1 = document.querySelector('#password');
const passField2 = document.querySelector('#confirm-password');
const showBtn1 = document.querySelector('#show-btn1');
const showBtn2 = document.querySelector('#show-btn2');

showBtn1.onclick = () => {
  if (passField1.type === 'password') {
    passField1.type = 'text';
    showBtn1.classList.add('hide-btn');
    showBtn1.classList.replace('fa-eye', 'fa-eye-slash');

  } else {
    passField1.type = 'password';
    showBtn1.classList.remove('hide-btn');
    showBtn1.classList.replace('fa-eye-slash', 'fa-eye');
  }
};

showBtn2.onclick = () => {
  if (passField2.type === 'password') {
    passField2.type = 'text';
    showBtn2.classList.add('hide-btn');
    showBtn2.classList.replace('fa-eye', 'fa-eye-slash');

  } else {
    passField2.type = 'password';
    showBtn2.classList.remove('hide-btn');
    showBtn2.classList.replace('fa-eye-slash', 'fa-eye');
  }
};
