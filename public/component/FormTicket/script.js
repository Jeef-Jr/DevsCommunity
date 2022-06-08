const idUser = sessionStorage.getItem("iduser");

function enviarTicket(idLang) {
  const dificuldade = document.getElementById("dificuldade").value;
  const descricao = document.getElementById("descricao").value;

  fetch("/ticket/insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idUser,
      dificuldade,
      descricao,
      idLang,
    }),
  }).then((response) => {
    response.json().then((data) => {
      const mensagem = data.mensagem;

      if (mensagem == "success") {
        Swal.fire("Ticket cadastrado com sucesso!", "", "success");
        listarTickets(idLang);
      }
    });
  });
}

function listarTickets(idLang) {
  let div_tickets = document.querySelector(".tickets");

  fetch(`/ticket/listar/${idLang}`).then((response) => {
    response.json().then((data) => {
      const dados = data.response;

      console.log(dados);
      for (let i = 0; i < dados.length; i++) {
        let dif = dados[i].dificuldade;
        let nick = dados[i].nickname;
        let desc = dados[i].descricao;
        let n_dif = "";

        if (dif == 1) {
          n_dif = "Fácil";
        } else if (dif == 2) {
          n_dif = "Médio";
        } else {
          n_dif = "Difícil";
        }

        div_tickets.innerHTML += `
              <div class="ticket">
                <div class="campos-ticket row_ticket">
                  <div>
                    <span>DF: ${n_dif}</span>
                  </div>
                  <div>${nick}</div>
                </div>
                <div class="mengs_ticket">
                  ${desc}
                </div>
              </div>
        `;
      }
    });
  });
}
