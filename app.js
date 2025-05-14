let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let numeroLimite = 10;


function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1','jogo numero secreto');
exibirTextoNaTela('p','digite um numero de 1 a 10');
}
exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou');
        let plavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagenTentativas =  `voce descobriu o numero com ${tentativas} ${plavraTentativa}`;
        exibirTextoNaTela('p',mensagenTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','Numero é Menor');
        }
         else{
            exibirTextoNaTela('p','Numero é Maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
  let numeroGerado = parseInt(Math.random() * numeroLimite +1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }
  if(listaDeNumerosSorteados.includes(numeroGerado)){
    return gerarNumeroAleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroGerado);
    return numeroGerado;
  }
   
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}
