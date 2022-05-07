listarCard();

function listarCard() {
  let cat = document.querySelector("#catalago");
  let number = 6;
  let imgs = [
    "./assets/uma-noite-de-crime.jpg",
    "./assets/uma-noite-de-crime-anarquia.jpg",
    "./assets/uma-noite-de-crime-ano-eleicao.jpg",
    "./assets/primeira-noite-de-crime.jpg",
    "./assets/serie-uma-noite-de-crime.jpg",
    "./assets/uma-noite-de-crime-a-fronteira.jpg",
  ];
  let categoria = ["Filme", "Filme", "Filme", "Filme", "Serie", "Filme"];
  let ano = ["2013", "2014", "2016", "2018", "2018-2019", "2021"];

  for (var i = 0; i < number; i++) {
    cat.innerHTML += `
    <div class="cards">
        <h3>${categoria[i]}</h3>
        <div class="card-filmes">
            <img class="img-cards" src='${imgs[i]}'/>
        </div>
        <h3>${ano[i]}</h3>
    </div>`;
  }
}
