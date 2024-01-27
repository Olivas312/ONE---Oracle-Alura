var btnCripto = document.querySelector('#cripto');
var btnDescripto = document.querySelector('#descripto');
var textArea = document.querySelector('#decodificador');
var resposta = document.querySelector('#resposta');

// função para encriptar o texto
function encripta(){

   var textoOriginal = textArea.value;
   var textoCriptografado = 
    textoOriginal.replace('e','enter')
    .replace('i','imes')
    .replace('a','ai')
    .replace('o','ober')
    .replace('u','ufat');        
        // escreve no HTML
    resposta.textContent = textoCriptografado;
    
    var botaoCopiar = document.createElement('button');
    botaoCopiar.id = 'copiar';
    botaoCopiar.type = 'button';
    botaoCopiar.textContent = 'Copiar';
    botaoCopiar.addEventListener('click', copiarTexto);
    resposta.appendChild(botaoCopiar);
};
// função para reverter a criptografia
function desencriptar(){
    
    var textoOriginal = textArea.value;
    var textoCriptografado = 
    textoOriginal.replace('enter','e')
    .replace('imes','i')
    .replace('ai'  ,'a')
    .replace('ober','o')
    .replace('ufat','u');
        // escreve no HTML
    resposta.textContent = textoCriptografado;
    
    var botaoCopiar = document.createElement('button');
    botaoCopiar.id = 'copiar';
    botaoCopiar.type = 'button';
    botaoCopiar.textContent = 'Copiar';
    botaoCopiar.addEventListener('click', copiarTexto);
    resposta.appendChild(botaoCopiar);

}
//  Função para esconder a imagem de texto não encontrado e revelar a resposta
function esconde(){
    var blockTxt404 = document.querySelector('#txt404');
    var msg = document.querySelector('#msg');
    if(textArea.value.length > 0){
        if(msg.classList.contains('esconde')){
        blockTxt404.classList.add('esconde');
        msg.classList.remove('esconde')
        }else{
        blockTxt404.classList.remove('esconde');
        msg.classList.add('esconde')
        }
    }else{
        alert("Insira sua mensagem !")
    };
};

btnDescripto.addEventListener('click', function(){
    esconde();
    desencriptar();
});
btnCripto.addEventListener('click', function(){
    esconde();
    encripta();
});

