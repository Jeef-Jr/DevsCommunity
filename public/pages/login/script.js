function logar() {
  const login = document.querySelector("#login").value;
  const senha = document.querySelector("#senha").value;

  fetch("/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      senha,
    }),
  }).then((response) => {
    response.json().then((data) => {
      const mensagem = data.mensagem;

      if (mensagem == "success") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Logado com sucesso!",
        });
        const idUser = data.dados[0].id;
        sessionStorage.setItem("iduser", idUser);
        setTimeout(() => {
          window.location.href = "http://localhost:3333";
        }, 2000);
      } else {
      }
    });
  });
}
