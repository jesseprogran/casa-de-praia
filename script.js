document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector("ul.menu").classList.toggle("show");
});

function abrirReserva() {
 
  window.open(
    "https://www.airbnb.com.br/rooms/1291920922588039558?viralityEntryPoint=1&s=76",
    "_blank"
  );

  document.getElementById("contact-form").reset();
}
