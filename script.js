document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("agendaForm");
  const dataInput = document.getElementById("data");

  // Bloquear domingos
  dataInput.addEventListener("change", function () {
    const dataSelecionada = new Date(this.value);
    const diaSemana = dataSelecionada.getDay(); // 0 = Domingo

    if (diaSemana === 0) {
      alert("Não atendemos aos domingos. Por favor, escolha outro dia.");
      this.value = "";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const dataSelecionada = new Date(dataInput.value);
    const diaSemana = dataSelecionada.getDay();

    // Segunda a sexta (1–5) → 08h às 18h
    // Sábado (6) → 08h às 12h
    let horarioValido = true;

    if (diaSemana >= 1 && diaSemana <= 5) {
      // segunda a sexta → OK
      horarioValido = true;
    } else if (diaSemana === 6) {
      // sábado → OK
      horarioValido = true;
    } else {
      // domingo
      horarioValido = false;
    }

    if (!horarioValido) {
      alert("Este dia não está disponível para atendimento.");
      return;
    }

    alert(
      "Agendamento enviado com sucesso! Entraremos em contacto pelo WhatsApp."
    );

    form.reset();
  });
});const calendario = document.getElementById("calendarioVisual");

if (calendario) {
  calendario.addEventListener("change", function () {
    const dataSelecionada = new Date(this.value);
    const diaSemana = dataSelecionada.getDay();

    if (diaSemana === 0) {
      alert("Domingos não estão disponíveis para atendimento.");
      this.value = "";
    }
  });
}
