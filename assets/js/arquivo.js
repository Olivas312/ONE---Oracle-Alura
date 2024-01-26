var btnCripto = document.querySelector('#cripto');
var btnDescripto = document.querySelector('#descripto');
function escondeEncripta(){
    var textArea = document.querySelector('#decodificador');
    var blockTxt404 = document.querySelector('#txt404');
    var msg = document.querySelector('#msg');
    var resposta = document.querySelector('#resposta');

    textoOriginal = textArea.value;
    textoCriptografado = [
    textoOriginal.replace('e','enter')
    .replace('i','imes')
    .replace('a','ai')
    .replace('o','ober')
    .replace('u','ufat')];

    resposta.textContent = textoCriptografado;

    // Adiciona um botão de cópia
    resposta.innerHTML += '<button id="copiar" type="button" onclick="copiarTexto()">Copiar</button>';


    if(msg.classList.contains('esconde')){
        blockTxt404.classList.add('esconde');
        msg.classList.remove('esconde')
    }else{
        blockTxt404.classList.remove('esconde');
        msg.classList.add('esconde')
    }

};

btnDescripto.addEventListener('click', escondeEncripta);
btnCripto.addEventListener('click', escondeEncripta);

