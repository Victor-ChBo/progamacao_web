const valorContador = document.getElementById('valorContador');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnDecrementar = document.getElementById('btnDecrementar');

const campoTexto = document.getElementById('campoTexto');
const numCaracteres = document.getElementById('numCaracteres');
const containerParagrafos = document.getElementById('containerParagrafos');

const tipoLista = document.getElementById('tipoLista');
const btnAdicionarLista = document.getElementById('btnAdicionarLista');
const containerListas = document.getElementById('containerListas');

const btnReset = document.getElementById('btnReset');

let contador = 0;

btnIncrementar.addEventListener('click', () => {
    contador++;
    valorContador.textContent = contador;
});

btnDecrementar.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        valorContador.textContent = contador;
    } else {
        alert("O contador já está em zero");
    }
});

campoTexto.addEventListener('input', () => {
    const textoSemEspaco = campoTexto.value.replace(/\s+/g, '');
    numCaracteres.textContent = textoSemEspaco.length;
});

campoTexto.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && campoTexto.value.trim() !== '') {
        const novoP = document.createElement('p');
        novoP.textContent = campoTexto.value;
        containerParagrafos.appendChild(novoP);
        campoTexto.value = '';
        numCaracteres.textContent = '0';
    }
});

btnAdicionarLista.addEventListener('click', () => {
    const tag = tipoLista.value;
    const novaLista = document.createElement(tag);

    for (let i = 1; i <= 3; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        novaLista.appendChild(li);
    }
    
    containerListas.appendChild(novaLista);
});

btnReset.addEventListener('click', () => {

    contador = 0;
    valorContador.textContent = '0';
    campoTexto.value = '';
    numCaracteres.textContent = '0';
    containerParagrafos.innerHTML = '';
    containerListas.innerHTML = '';
});