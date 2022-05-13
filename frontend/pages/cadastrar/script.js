function verify(campo) {
  let cumprimentos = document.querySelector(".cumprimentos");
  document.querySelector(".card-information").style = "display: flex";

  switch (campo) {
    case 1: {
      let campo_nome = document.querySelector("#campo_nome");
      const unic_c = "<li>O Nickname deve ser único.</li>";
      const unic =
        "<li class='cumprimento_active'> O Nickname deve ser único.</li>";
      const tres_caracter_c =
        "<li class='cumprimento_active'>O Nickname deve conter no mínimo 3 caractéres.</li>";
      const tres_caracter =
        "<li>O Nickname deve conter no mínimo 3 caractéres.</li>";
      const caract_especial =
        "<li>O Nickname deve conter um caractér especial.</li>";
      const caract_especial_c =
        "<li class='cumprimento_active'>O Nickname deve conter um caractér especial.</li>";

      if (campo_nome.value.length >= 3) {
        cumprimentos.innerHTML = `
                ${unic_c}
                ${tres_caracter_c}
                ${caract_especial}
            `;
      } else {
        cumprimentos.innerHTML = `
                ${unic_c}
                ${tres_caracter}
                ${caract_especial}
            `;
      }
      break;
    }
    case 2: {
      break;
    }
  }
}
