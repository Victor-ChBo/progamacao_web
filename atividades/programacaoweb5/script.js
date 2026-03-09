function calcularSerie() {
    const n = Number(document.getElementById('numTermos').value);
    const areaResultado = document.getElementById('resultado-area');
    const textoSerie = document.getElementById('serie-texto');
    const textoSoma = document.getElementById('soma-total');

    if (n <= 0) {
        alert("Por favor, digite um número positivo.");
        return;
    }

    let termoAtual = 0;
    let somaTotal = 0;
    let termosArray = [];

    for (let i = 1; i <= n; i++) {

        termoAtual = (termoAtual * 10) + 1;
        
        somaTotal += termoAtual;
        termosArray.push(termoAtual);
    }

    areaResultado.classList.remove('hidden');
    
    textoSerie.textContent = termosArray.join(' + ');
    
    const somaFormatada = somaTotal.toLocaleString('pt-BR');
    textoSoma.textContent = `A soma é: ${somaFormatada}`;
}