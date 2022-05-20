function verify(campo) {
  let cumprimentos = document.querySelector(".cumprimentos");
  document.querySelector(".card-information").style = "display: flex";

  switch (campo) {
    case 1: {
      let campo_nickname = document.querySelector("#campo_nickname");

      const tres_caracter_c =
        "<li class='cumprimento_active'>O Nickname deve conter no mínimo 3 caractéres.</li>";
      const tres_caracter =
        "<li>O Nickname deve conter no mínimo 3 caractéres.</li>";

      if (campo_nickname.value.length >= 3) {
        cumprimentos.innerHTML = `
                ${tres_caracter_c}
            `;
      } else {
        cumprimentos.innerHTML = `
                ${tres_caracter}
            `;
      }
      break;
    }
    case 2: {
      let campo_login = document.querySelector("#campo_login");

      const tres_caracter_c =
        "<li class='cumprimento_active'>O Login deve conter no mínimo 3 caractéres.</li>";
      const tres_caracter =
        "<li>O Login deve conter no mínimo 3 caractéres.</li>";
      const login_uni_c =
        "<li class='cumprimento_active'>O Login deverá ser único.</li>";
      const login_uni = "<li>O Login deverá ser único.</li>";

      if (campo_login.value.length >= 3) {
        cumprimentos.innerHTML = `
                ${tres_caracter_c}
                ${login_uni}
            `;
      } else {
        cumprimentos.innerHTML = `
                ${tres_caracter}
                ${login_uni}
            `;
      }
      break;
    }
  }
}
