const btnCripto = document.querySelector('#cripto');
const btnDescripto = document.querySelector('#descripto');
const textArea = document.querySelector('#decodificador');
const resposta = document.querySelector('#resposta');

// Função para criptografar o Texto
function criptografarTexto(texto) {
    return texto.replace('e', 'enter')
                .replace('i', 'imes')
                .replace('a', 'ai')
                .replace('o', 'ober')
                .replace('u', 'ufat');
};
//  Função para descriptografar o Texto
function descriptografarTexto(texto) {
    return texto.replace('enter', 'e')
                .replace('imes', 'i')
                .replace('ai', 'a')
                .replace('ober', 'o')
                .replace('ufat', 'u');
};
//  Função que cria o Texto resposta no HTML e um Botão Copiar
function criarTexto(textoCriptografado) {
    resposta.textContent = textoCriptografado;

    const botaoCopiar = document.createElement('button');
    botaoCopiar.id = 'copiar';
    botaoCopiar.type = 'button';
    botaoCopiar.textContent = 'Copiar';
    botaoCopiar.addEventListener('click', copiarTexto);
    resposta.appendChild(botaoCopiar);
};
//  Função que esconde e exibe a mensagem de Texto
function esconderOuExibir404() {
    const blockTxt404 = document.querySelector('#txt404');
    const msg = document.querySelector('#msg');

    if (textArea.value.length > 0) {
        if (msg.classList.contains('esconde')) {
            blockTxt404.classList.add('esconde');
            msg.classList.remove('esconde');
        } else {
            blockTxt404.classList.remove('esconde');
            msg.classList.add('esconde');
        }
    } else {
        alert("Insira sua mensagem!");
    }
};
//  Função que adiciona a capacidade de copiar o Texto no botão
function copiarTexto() {
        const textoParaCopiar = resposta.textContent;
    
        if (navigator.clipboard) {
            navigator.clipboard.writeText(textoParaCopiar)
                .then(() => {
                    alert("Texto copiado com sucesso!");
                })
                .catch((error) => {
                    console.error('Erro ao copiar texto: ', error);
                });
        } else {
            alert("Seu navegador não suporta a API de Área de Transferência.");
        }
};

//  Chamada dos eventos ao clickar os Botões
btnDescripto.addEventListener('click', function () {
    esconderOuExibir404();
    const textoDescriptografado = descriptografarTexto(textArea.value);
    criarTexto(textoDescriptografado);
});

btnCripto.addEventListener('click', function () {
    esconderOuExibir404();
    const textoCriptografado = criptografarTexto(textArea.value);
    criarTexto(textoCriptografado);
});
