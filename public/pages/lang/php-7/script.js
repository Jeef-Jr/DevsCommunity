let status_btn = true;

function mostrarComunidade(n) {
  const area_tick = document.querySelector("#area_ticket");
  const area_information = document.querySelector("#area_information");
  const btn_information = document.querySelector("#btn-informations");
  const btn_comunidade = document.querySelector("#btn-comunidade");

  if (!status_btn && n == 1) {
    area_tick.style = "display: none";
    area_information.style = "display: block";
    btn_information.classList.add("button-active");
    btn_comunidade.classList.remove("button-active");
    status_btn = !status_btn;
  } else if (status_btn && n == 2) {
    status_btn = !status_btn;
    area_tick.style = "display: block";
    area_information.style = "display: none";
    btn_information.classList.remove("button-active");
    btn_comunidade.classList.add("button-active");
  }
}

function mostrarBtpTicket(key) {
  const chatLang = document.querySelector("#chatLang");
  const tickets = document.querySelector("#tickets");

  const NewTicket = document.querySelector("#NewTicket");
  const ButtonBtp = document.querySelector("#BatePapo");

  switch (key) {
    case 1: {
      chatLang.style.display = "none";
      tickets.style.display = "flex";
      ButtonBtp.classList.remove("button-active");
      NewTicket.classList.add("button-active");
      break;
    }
    case 2: {
      chatLang.style.display = "flex";
      tickets.style.display = "none";
      NewTicket.classList.remove("button-active");
      ButtonBtp.classList.add("button-active");
      break;
    }
  }
}
