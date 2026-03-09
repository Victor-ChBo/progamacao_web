function desenharTriangulo() {
    const input = document.getElementById('qtdLinhas');
    const display = document.getElementById('displayTriangulo');
    const n = Number(input.value);
    
    display.textContent = "";
    console.clear();

    if (n <= 0) {
        display.textContent = "Digite um número maior que 0!";
        return;
    }

    let desenhoCompleto = "";


    for (let i = 1; i <= n; i++) {
        let linha = "";
        
     
        for (let j = 1; j <= i; j++) {
            linha += "*";
        }
        
        desenhoCompleto += linha + "\n";
        
        console.log(linha);
    }

    display.textContent = desenhoCompleto;
}