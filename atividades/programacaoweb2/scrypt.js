let pontosUsuario = 0;
let pontosComputador = 0;

const msgResultado = document.getElementById('mensagem-resultado');
const detalheEscolha = document.getElementById('detalhe-escolha');
const placarUsuario = document.getElementById('ponto-usuario');
const placarComputador = document.getElementById('ponto-computador');

const opcoes = ["pedra", "papel", "tesoura"];

function jogar(escolhaDoUsuario) {

    const escolhaDoComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (escolhaDoUsuario === escolhaDoComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaDoUsuario === "pedra" && escolhaDoComputador === "tesoura") ||
        (escolhaDoUsuario === "papel" && escolhaDoComputador === "pedra") ||
        (escolhaDoUsuario === "tesoura" && escolhaDoComputador === "papel")
    ) {
        resultado = "Você Venceu!";
        pontosUsuario++;
    } else {
        resultado = "Você Perdeu!";
        pontosComputador++;
    }

    msgResultado.textContent = resultado;
    detalheEscolha.textContent = `Você escolheu ${escolhaDoUsuario} e o robô escolheu ${escolhaDoComputador}.`;
    placarUsuario.textContent = pontosUsuario;
    placarComputador.textContent = pontosComputador;
}

document.getElementById('pedra').addEventListener('click', () => jogar('pedra'));
document.getElementById('papel').addEventListener('click', () => jogar('papel'));
document.getElementById('tesoura').addEventListener('click', () => jogar('tesoura'));