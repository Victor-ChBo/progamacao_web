function gerarTabuada() {
    const numInput = document.getElementById('numInput');
    const displayResultado = document.getElementById('resultado');
    const numero = Number(numInput.value);

    displayResultado.innerHTML = "";

    if (numInput.value === "") {
        displayResultado.innerHTML = "<p style='color:red'>Por favor, digite um número!</p>";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        let multiplicacao = numero * i;
        
        const linha = document.createElement('div');
        linha.className = 'linha-tabuada';
        linha.innerHTML = `${numero} x ${i} = <strong>${multiplicacao}</strong>`;
        
        displayResultado.appendChild(linha);
    }
}