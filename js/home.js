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
