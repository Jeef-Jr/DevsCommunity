const id = sessionStorage.getItem("iduser");

window.onload = validy_login();

function validy_login() {
  const userNavBar = document.querySelector("#user_login");
  const btn1 = document.querySelector("#btn-1");
  const btn2 = document.querySelector("#btn-2");
  if (id > 0) {
    buscarInformationsUser();
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
    const nome_user = document.querySelector("#nome_user");
    fetch(`/users/informations/${id}`)
    .then((response) => {
      response.json().then((data) => {
        const nickname = data.response[0].nickname;
        nome_user.innerHTML = `Olá, ${nickname}`;
      })
    })
}

function sair() {
  sessionStorage.clear();
  window.location.href = "http://localhost:3333/pages/login/index.html";
}
