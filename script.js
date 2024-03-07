const button = document.querySelector("#botao");

button.addEventListener("click", function () {
  alert("Formulário enviado com sucesso, obrigado pelo contato!");

  document.querySelector("#name").value= "";
  document.querySelector("#email").value = "";
  document.querySelector("#mensagemInput").value = "";
});


