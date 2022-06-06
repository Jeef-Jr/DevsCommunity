const id = sessionStorage.getItem("iduser");

window.onload = validy_login();

function validy_login() {
  const userNavBar = document.querySelector("#user_login");
  const btn1 = document.querySelector("#btn-1");
  const btn2 = document.querySelector("#btn-2");
  if (id > 0) {
    userNavBar.style.display = "block";
    btn1.style.display = "none";
    btn2.style.display = "block";
  } else {
    userNavBar.style.display = "display: none";
    btn1.style.display = "block";
    btn2.style.display = "none";
  }
}

function buscarInformationsUser() {
  // creating fetch informations
}

function sair() {
  sessionStorage.clear();
  window.location.href = "http://localhost:3333/pages/login/index.html";
}
