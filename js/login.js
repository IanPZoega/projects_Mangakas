// Esconder senha
const passField = document.querySelector('#password');
const showBtn = document.querySelector('#show-btn');

showBtn.onclick = () => {
  if (passField.type === 'password') {
    passField.type = 'text';
    showBtn.classList.add('hide-btn');
    showBtn.classList.replace('fa-eye', 'fa-eye-slash');

  } else {
    passField.type = 'password';
    showBtn.classList.remove('hide-btn');
    showBtn.classList.replace('fa-eye-slash', 'fa-eye');
  }
};
