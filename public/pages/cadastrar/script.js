let regra1 = false;
let regra2 = false;
let regra3 = false;
let regra4 = false;
let regra5 = false;

function verifyCampos(campo) {
  const campo_nickname = document.querySelector("#campo_nickname").value;
  const campo_login = document.querySelector("#campo_login").value;
  const senha = document.querySelector("#senha").value;
  const confir_senha = document.querySelector("#repsenha").value;

  // c's
  const c1 = document.querySelector("#c-1");
  const c2 = document.querySelector("#c-2");
  const c3 = document.querySelector("#c-3");
  const c4 = document.querySelector("#c-4");
  const c5 = document.querySelector("#c-5");

  switch (campo) {
    case 1: {
      if (campo_nickname.length >= 3) {
        fetch(`http://localhost:3333/users/verifyNickname`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nickname: campo_nickname,
          }),
        }).then((response) => {
          response.json().then((data) => {
            const tamanho = data.response.length;

            if (tamanho > 0) {
              c2.classList.remove("cumprimento_active");
              regra1 = false;
            } else {
              c2.classList.add("cumprimento_active");
              regra1 = true;
            }
          });
        });
      } else {
        c2.classList.remove("cumprimento_active");
        regra1 = false;
      }
      break;
    }
    case 2: {
      if (campo_login.length >= 3) {
        fetch(`http://localhost:3333/users/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: campo_login,
          }),
        }).then((response) => {
          response.json().then((data) => {
            const tamanho = data.response.length;

            if (tamanho > 0) {
              c3.classList.remove("cumprimento_active");
              regra2 = false;
            } else {
              c3.classList.add("cumprimento_active");
              regra2 = true;
            }
          });
        });
      } else {
        c3.classList.remove("cumprimento_active");
        regra2 = false;
      }
      break;
    }
    case 3: {
      const interrogacao = senha.indexOf("!");
      const arroba = senha.indexOf("@");
      const dollar = senha.indexOf("$");
      const asteristico = senha.indexOf("*");
      const Ecommercial = senha.indexOf("&");

      if (
        (interrogacao >= 0 ||
          arroba >= 0 ||
          dollar >= 0 ||
          asteristico >= 0 ||
          Ecommercial >= 0) &&
        senha.length >= 3
      ) {
        c4.classList.add("cumprimento_active");
        regra3 = true;
      } else {
        c4.classList.remove("cumprimento_active");
        regra3 = false;
      }
      break;
    }
    case 4: {
      if (confir_senha.length >= 3) {
        if (campo_nickname.length >= 3 && campo_login.length >= 3) {
          c1.classList.add("cumprimento_active");
          if (senha == confir_senha) {
            c5.classList.add("cumprimento_active");
            regra4 = true;
          } else {
            c5.classList.remove("cumprimento_active");
            regra4 = false;
          }
        } else {
          c1.classList.remove("cumprimento_active");
          regra4 = false;
        }
      } else {
        c1.classList.remove("cumprimento_active");
        regra4 = false;
      }
    }
  }
}

function verifyBoolean() {
  if (regra1 && regra2 && regra3 && regra4) {
    logar();
  } else {
    Swal.fire(
      "Algo incorreto!",
      "Verifique os campos e as regras necessárias",
      "error"
    );
  }
}

function logar() {
  const campo_nickname = document.querySelector("#campo_nickname").value;
  const campo_login = document.querySelector("#campo_login").value;
  const senha = document.querySelector("#senha").value;

  fetch("/users/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nickname: campo_nickname,
      login: campo_login,
      senha,
    }),
  }).then((response) => {
    response.json().then((data) => {
      const mensagem = data.mensagem;

      if (mensagem == "success") {
        Swal.fire({
          title: "Cadastrado com sucesso!",
          text: "Vamos te redirecionar para o login.",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Okay",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "../login/index.html";
          }
        });
      }
    });
  });
}
