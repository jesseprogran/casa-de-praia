
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul.menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

function abrirReserva() {
  window.open(
    "https://www.airbnb.com.br/rooms/1291920922588039558?viralityEntryPoint=1&s=76",
    "_blank"
  );

  document.getElementById("contact-form").reset();
}
