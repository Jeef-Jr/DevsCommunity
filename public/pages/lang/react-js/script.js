var labels = ["January", "February", "March", "April", "May", "June"];

var data = {
  labels: labels,
  datasets: [
    {
      label: "Acessos",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "Likes",
      backgroundColor: "#00b4d8",
      borderColor: "#00b4d8",
      data: [0, 20, 55, 20, 36, 60, 80],
    },
  ],
};

var config = {
  type: "line",
  data: data,
  options: {},
};

var myChart = new Chart(document.getElementById("myChart"), config);

let status_btn = true;

function mostrarComunidade(n){
  const area_tick = document.querySelector("#area_ticket");
  const btn_information = document.querySelector("#btn-informations");
  const btn_comunidade = document.querySelector("#btn-comunidade");
  
  
  if(!status_btn && n == 1){
    area_tick.style = "display: none"
    btn_information.classList.add("button-active");
    btn_comunidade.classList.remove("button-active");
    status_btn = !status_btn;
  }else if(status_btn && n == 2) {
    status_btn = !status_btn;
    area_tick.style = "display: block"
    btn_information.classList.remove("button-active");
    btn_comunidade.classList.add("button-active");
  }
}


function mostrarBtpTicket(k){
  const chatLang = document.querySelector("#chatLang");
  const tickets = document.querySelector("#tickets");

  const NewTicket = document.querySelector("#NewTicket");
  const ButtonBtp = document.querySelector("#BatePapo");

  switch(k){
    case 1: {
      chatLang.style.display = "none";
      tickets.style.display = "flex";
      ButtonBtp.classList.remove("button-active");
      NewTicket.classList.add("button-active");
      break;
    }
    case 2: {
      break;
    }
    case 3: {
      chatLang.style.display = "flex";
      tickets.style.display = "none";
      NewTicket.classList.remove("button-active");
      ButtonBtp.classList.add("button-active");
      break;
    }
  }



}