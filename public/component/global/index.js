const id = sessionStorage.getItem("iduser");

window.onload = validy_login();



function acessosView(idLang) {
  fetch(`/view/listar/acessos/${idLang}`)
  .then((response) => {
    response.json().then((data) => {
      const dados = data.response;
      likesLang(idLang, dados);
    })
  })
}

function likesLang(idLang, dadosAcessos){
  fetch(`/like/likes/lang/${idLang}`)
  .then((response) => {
    response.json().then((data) => {
      const dados = data.response;
      plotarGrafico(dados, dadosAcessos);
    })
  })
}

function plotarGrafico(dadosLike, dadosAcessos) {
  const myChart = document.getElementById("myChart");

  var dados = {
    labels: ["Dados Relevantes"],
    datasets: [
        {
            yAxisID: 'y-temperatura',
            label: 'Likes',
            borderColor: '#0096c7',
            backgroundColor: '#0096c7',
            fill: false,
            data: [dadosLike[0].qtd_like]
        },
        {
            yAxisID: 'y-temperatura',
            label: 'Acessos',
            borderColor: '#65b891',
            backgroundColor: '#65b891',
            fill: false,
            data: [dadosAcessos[0].qtd_view]
        },
    ]
};

var ctx = myChart.getContext('2d');
window.grafico_bar = Chart.Bar(ctx, {
    data: dados,
    options: {
        responsive: true,
        animation: { duration: 500 },
        hoverMode: 'index',
        stacked: false,
        title: {
            display: false,
            text: 'Dados capturados'
        },
        scales: {
            yAxes: [{
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-temperatura',
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    min: 0
                }
            }, {
                type: 'linear',
                display: false,
                position: 'right',
                id: 'y-umidade',
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    min: 0
                }
            },
           ],
        }
    }
});
}

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
  fetch(`/users/informations/${id}`).then((response) => {
    response.json().then((data) => {
      const nickname = data.response[0].nickname;
      nome_user.innerHTML = `Olá, ${nickname}`;
    });
  });
}

function sair() {
  sessionStorage.clear();
  window.location.href = "http://localhost:3333/pages/login/index.html";
}

function darLike(idLang) {
  if (id > 0) {
    fetch("/like/active", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUser: id,
        idLang,
      }),
    }).then((response) => {
      response.json().then((data) => {
        const mensagem = data.mensagem;

        if (mensagem == "success") {
          listarLike(idLang);
          buscarLikesLang(idLang);

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          switch (idLang) {
            case 1: {
              console.log("entrou");
              Toast.fire({
                icon: "success",
                title: "Você curtiu ReactJs 🎉",
              });
              break;
            }
            case 2: {
              Toast.fire({
                icon: "success",
                title: "Você curtiu NodeJs 🎉",
              });
              break;
            }
            case 3: {
              Toast.fire({
                icon: "success",
                title: "Você curtiu PHP 7 🎉",
              });
              break;
            }
            case 4: {
              Toast.fire({
                icon: "success",
                title: "Você curtiu Java 🎉",
              });
              break;
            }
            case 5: {
              Toast.fire({
                icon: "success",
                title: "Você curtiu Python 🎉",
              });
              break;
            }
            case 6: {
              Toast.fire({
                icon: "success",
                title: "Você curtiu Flutter 🎉",
              });
              break;
            }
            case 7: {
              Toast.fire({
                icon: "success",
                title: "Você curtiu Dart 🎉",
              });
              break;
            }
          }
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "error",
            title: "Você não pode descurti! Sinto muito... 😵‍💫",
          });
        }
      });
    });
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "error",
      title: "Você precisa estar logado. 🤪",
    });
  }
}

function listarLike(idLang) {
  const iconHeart = document.getElementById("heart");

  fetch("/like/listar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idUser: id,
      idLang,
    }),
  }).then((response) => {
    response.json().then((data) => {
      const mensagem = data.mensagem;

      if (mensagem == "success") {
        iconHeart.style.color = "red";
      }
    });
  });
}

function buscarLikesLang(idLang) {
  const qtd_likes = document.getElementById("qtd_likes");

  fetch(`/like/lang/${idLang}`).then((response) => {
    response.json().then((data) => {
      const qtd = data.response[0].qtd_like;

      qtd_likes.innerHTML = qtd;
    });
  });
}

function insertView(idLang) {
  fetch("/view/insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idLang,
    }),
  }).then();
}

function listarQtdView(idLang) {
  const div_views = document.getElementById("qtd_views");

  fetch(`/view/listar/lang/${idLang}`).then((response) => {
    response.json().then((data) => {
      const qtd_views = data.response[0].qtd_views;
      div_views.innerHTML = qtd_views;
    });
  });

  setTimeout(() => {
    listarQtdView(idLang)
  }, 2000);
}
