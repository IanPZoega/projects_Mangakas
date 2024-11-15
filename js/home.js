let index = 1;
document.getElementById('radio1').checked = true;

setInterval(function(){
  nextImage();
}, 5000)

function nextImage() {
  index++
  if (index > 4) {
    index = 1
  }
  document.getElementById('radio' + index).checked = true;
}