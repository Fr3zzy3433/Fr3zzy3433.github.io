function atualizarContador() {
  const inicio = new Date('2024-09-13T00:00:00');
  const agora = new Date();

  const diffMs = agora - inicio;
  const diffMin = Math.floor(diffMs / (1000 * 60));

  const dias = Math.floor(diffMin / (60 * 24));
  const horas = Math.floor((diffMin % (60 * 24)) / 60);
  const minutos = diffMin % 60;

  const diasFormatado = dias.toString().padStart(3, '0');
  const horasFormatado = horas.toString().padStart(2, '0');
  const minutosFormatado = minutos.toString().padStart(2, '0');

  const mensagem = `
    Estamos juntos há <strong>${diasFormatado}</strong> dias, 
    <strong>${horasFormatado}</strong> horas e 
    <strong>${minutosFormatado}</strong> minutos.<br><br>
    E desde então, eu nunca mais tirei os olhos de você, minha obra de arte. ❤️
  `;

  document.getElementById("tempo").innerHTML = mensagem;
}

function encherAmor() {
  const barra = document.getElementById("barraDeAmor");
  const texto = document.getElementById("textoBarra");
  const botao = document.querySelector(".botao-wrapper button");

  texto.innerText = "Calculando amor...";
  botao.disabled = true;

  barra.classList.add("enchendo");

  setTimeout(() => {
    texto.innerText = "⚠️ ERRO: Amor excede os limites do universo!";
    explodirCoracoes();
  }, 4000);
}

function explodirCoracoes() {
  const container = document.getElementById("explosao-de-amor");

  for (let i = 0; i < 150; i++) {
    const coracao = document.createElement("div");
    coracao.className = "coracao";
    coracao.innerText = "💖";

    coracao.style.top = `${Math.random() * 400}px`;
    coracao.style.left = `${Math.random() * 400}px`;

    container.appendChild(coracao);

    setTimeout(() => coracao.remove(), 2000);
  }
}

atualizarContador();
setInterval(atualizarContador, 60000);
