let numeroSecreto = Math.floor(Math.random() * 20) + 1;
const inputPalpite = document.getElementById('palpite');
const btnVerificar = document.getElementById('btnVerificar');
const mensagem = document.getElementById('mensagem');
const btnReiniciar = document.getElementById('btnReiniciar');

function verificarPalpite() {
    const palpite = Number(inputPalpite.value);

    if (!palpite || palpite < 1 || palpite > 20) {
        mensagem.textContent = "Por favor, digite um número entre 1 e 20.";
        mensagem.className = "errou";
        return;
    }

    if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou! O número era ${numeroSecreto}.`;
        mensagem.className = "acertou";
        finalizarJogo();
    } else if (palpite > numeroSecreto) {
        mensagem.textContent = "O número secreto é MENOR. Tente novamente!";
        mensagem.className = "errou";
    } else {
        mensagem.textContent = "O número secreto é MAIOR. Tente novamente!";
        mensagem.className = "errou";
    }

    inputPalpite.value = '';
    inputPalpite.focus();
}

function finalizarJogo() {
    btnVerificar.disabled = true;
    inputPalpite.disabled = true;
    btnReiniciar.style.display = 'inline-block';
}

btnVerificar.addEventListener('click', verificarPalpite);

inputPalpite.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verificarPalpite();
});

btnReiniciar.addEventListener('click', () => {
    location.reload();
});