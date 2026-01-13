document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("agendaForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const data = document.getElementById("data").value;
      const msg = document.getElementById("mensagem").value;

      const texto = `Olá, meu nome é ${nome}.
Gostaria de agendar uma consulta para o dia ${data}.
Mensagem: ${msg}`;

      window.open(
        "https://wa.me/244922025301?text=" + encodeURIComponent(texto),
        "_blank"
      );
    });
  }
});
