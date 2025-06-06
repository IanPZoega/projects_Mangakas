// Notificações
const bellIcon = document.querySelector('#bell');
const notifications = document.querySelector('.notifications');

function positionNotifications() {
  const bellRect = bellIcon.getBoundingClientRect();
  
  notifications.style.top = `${bellRect.bottom + 10}px`;
  notifications.style.left = `${bellRect.left - 14}px`;
}

bellIcon.addEventListener('click', () => {
  notifications.classList.toggle('open');
  if (notifications.classList.contains('open')) {
    positionNotifications();
  }
});

window.addEventListener('resize', () => {
  if (notifications.classList.contains('open')) {
    positionNotifications();
  }
});

// Sidebar
const sidebar = document.querySelector('div.sidebar');
const toggleButton = document.querySelector('img#menu');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  
  if (sidebar.classList.contains ('open')) {
    toggleButton.src = '../img/icons/menu-2.png'
  } else {
    toggleButton.src = '../img/icons/menu-1.png'
  }
});

// Carrossel
let index = 1;
document.getElementById('radio1').checked = true;
const chapter = document.getElementById('chapter');

const chapterTexts = ['Chainsaw man #124', 'Gachiakuta #23', 'Dandadan #10', 'Kaiju #65'];

chapter.textContent = chapterTexts[0];

const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach((radio, i) => {
  radio.addEventListener('click', () => {
    index = i + 1;
    chapter.textContent = chapterTexts[i];
  });
});

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  index++;
  if (index > 4) {
    index = 1;
  }
  document.getElementById('radio' + index).checked = true;
  chapter.textContent = chapterTexts[index - 1];
}
