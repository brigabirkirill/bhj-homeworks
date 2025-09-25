const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const outBtn = document.getElementById('signout__btn');
const signIn = document.getElementById('signin');

async function logIn() {
  const formData = new FormData(form);
  const response = await fetch("https://students.netoservices.ru/nestjs-backend/auth", {
    method: "POST",
    body: formData,
  })
  const userInfo = await response.json();
  
      if (userInfo.success === true) {
        const id = userInfo.user_id;
        welcome.classList.add("welcome_active");
        userId.textContent = id;
        localStorage.setItem("id", id);
        signIn.classList.remove('signin_active')
      }

      if (userInfo.success === false) {
        alert("Неверный логин/пароль");
      }
  form.reset();
}

if (localStorage.getItem("id")) {
  signIn.classList.remove('signin_active');
  welcome.classList.add("welcome_active");
  userId.textContent = localStorage.getItem("id");
}
form.classList.add("signin_active");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.login.value !== "" && form.password.value !== "") {
    logIn();
  } else {
    alert("Введите логин и пароль");
  }
});

outBtn.addEventListener('click', () => {
  welcome.classList.remove("welcome_active");
  signIn.classList.add('signin_active');
  localStorage.removeItem('id');
})