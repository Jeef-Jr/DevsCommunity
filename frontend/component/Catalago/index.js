listarCard();

function listarCard() {
  let cat = document.querySelector("#catalago");
  let number = 7;
  let imgs = [
    "./assets/reactjs.jpg",
    "./assets/nodejs.png",
    "./assets/php7.png",
    "./assets/java.png",
    "./assets/pyton.jpg",
    "./assets/flutter.png",
    "./assets/dart.png",
  ];
  let categoria = [
    "React JS",
    "Node JS",
    "PHP 7",
    "Java",
    "Pyton",
    "Flutter",
    "Dart",
  ];

  for (var i = 0; i < number; i++) {
    cat.innerHTML += `
    <div class="cards">
        <h3>${categoria[i]}</h3>
        <div class="card-framework">
            <img class="img-cards" src='${imgs[i]}'/>
        </div>
    </div>`;
  }
}
