function verify(campo) {
  let cumprimentos = document.querySelector(".cumprimentos");
  document.querySelector(".card-information").style = "display: flex";

  switch (campo) {
    case 0: {
      var campo_imagem = document.querySelector("#imagem");

      if (
        campo_imagem.value.endsWith("png") ||
        campo_imagem.value.endsWith("jpg") ||
        campo_imagem.value.endsWith("jpeg")
      ) {
        cumprimentos.innerHTML = `
        <li class='cumprimento_active'>A url da Imagem precisa possuir a extensão entre <br> [.png, .jpg, .jpeg].</li>
        `;
      } else {
        cumprimentos.innerHTML = `
        <li>A url da imagem precisa possuir a extensão entre <br> [.png, .jpg, .jpeg].</li>
        `;
      }

      break;
    }
    case 1: {
      let campo_nickname = document.querySelector("#campo_nickname");

      if (campo_nickname.value.length >= 3) {
        cumprimentos.innerHTML = `
        <li class='cumprimento_active'>O Nickname deve conter no mínimo 3 caractéres.</li>
            `;
      } else {
        cumprimentos.innerHTML = `
        <li>O Nickname deve conter no mínimo 3 caractéres.</li>
            `;
      }
      break;
    }
    case 2: {
      const campo_login = document.querySelector("#campo_login").value;

      if (campo_login.length >= 3) {
        fetch(`http://localhost:3333/users/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: value,
          }),
        }).then((response) => {
          response.json().then((data) => {
            const tamanho = data.response.length;

            if (tamanho == 0) {
              cumprimentos.innerHTML = `
                  <li class='cumprimento_active'>O Login deve conter no mínimo 3 caractéres.</li>
                  <li class='cumprimento_active'>O Login deverá ser único.</li>
                  `;
            } else {
              cumprimentos.innerHTML = `
                <li class='cumprimento_active'>O Login deve conter no mínimo 3 caractéres.</li>
                <li>O Login deverá ser único.</li>
            `;
            }
          });
        });
      } else {
        cumprimentos.innerHTML = `
        <li>O Login deve conter no mínimo 3 caractéres.</li>
        <li>O Login deverá ser único.</li>
        `;
      }
      break;
    }
    case 3: {
      const campo_senha = document.querySelector("#senha").value;
      const interrogacao = campo_senha.indexOf("!");
      const arroba = campo_senha.indexOf("@");
      const dollar = campo_senha.indexOf("$");
      const asteristico = campo_senha.indexOf("*");
      const Ecommercial = campo_senha.indexOf("&");

      if (
        (interrogacao >= 0 ||
          arroba >= 0 ||
          dollar >= 0 ||
          asteristico >= 0 ||
          Ecommercial >= 0) &&
        campo_senha.length > 6
      ) {
        cumprimentos.innerHTML = `
        <li class='cumprimento_active'>A senha possuí caracter especial.</li>
        <li class='cumprimento_active'>A senha deve possuír 6 ou mais caractéres.</li>
        `;
      } else {
        cumprimentos.innerHTML = `
        <li>A senha não possuí caracter especial.</li>
        <li>A senha deve possuír 6 ou mais caractéres.</li>
        `;
      }
      break;
    }
    case 4: {
      const campo_repsenha = document.querySelector("#repsenha").value;
      const senha = document.querySelector("#senha").value;

      if (campo_repsenha == senha) {
        cumprimentos.innerHTML = ` 
        <li class='cumprimento_active'>As senhas deveram ser igualmente.</li>
        `;
      } else {
        cumprimentos.innerHTML = ` 
        <li>As senhas deveram ser igualmente.</li>
        `;
      }
    }
  }
}
