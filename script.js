// Selecionando o botão de menu e a lista de navegação
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

// Adicionando um evento de clique no botão de menu
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active"); // Alterna a classe 'active' para mostrar/ocultar o menu
});

function abrirReserva() {
  window.open(
    "https://www.airbnb.com.br/rooms/1291920922588039558?viralityEntryPoint=1&s=76",
    "_blank"
  );

  document.getElementById("contact-form").reset();
}
