let parOuImpar = document.querySelector('.btns-escolha');
let btnEnviar = document.querySelector('.btn-enviar')
let table = document.querySelector('#table')
let posicoes = []
let escolhaDeNumeroDaMaquina = ''
let escolhaParidade = ''


table.addEventListener('click', function(event){
    let posicao = event.target.getAttribute('id');
    aaa(posicao)
})

function aaa(posicao){

    let botaoJogo = document.getElementById(posicao)

    botaoJogo.disabled = true
    botaoJogo.style.color = '#0dcaf0'
    botaoJogo.innerHTML = 'X'
}


parOuImpar.addEventListener('click', function(event){
    escolhaParidade = event.target.getAttribute('id')
    document.getElementById('btn-par').disabled = true    
    document.getElementById('btn-impar').disabled = true    

    document.getElementById(escolhaParidade).style.background = 'green'
    escolhaDeNumeroDaMaquina = Math.round(Math.random(1, 9)*9);
    cl(escolhaDeNumeroDaMaquina)
})

function caca(escolhaDeNumeroDaUsuario){
    let soma = escolhaDeNumeroDaMaquina + escolhaDeNumeroDaUsuario;
    let exibeResultado = document.querySelector('.resultado')
    
    let resultado = soma%2;
    cl(escolhaParidade)
    if(escolhaParidade == 'btn-par' && resultado == 0){
        exibeResultado.innerHTML = 'Você ganhou, pode escolher!'
        exibeResultado.style.color = 'green';
    }else if(escolhaParidade == 'btn-impar' && resultado > 0){
        exibeResultado.innerHTML = 'Você ganhou, pode escolher!'
        exibeResultado.style.color = 'green';
    }else{
        exibeResultado.innerHTML = 'Você perdeu, a maquina escolhe!'
        exibeResultado.style.color = 'red';
    }
    cl(resultado)

}





btnEnviar.addEventListener('click', function(){

    let escolhaDeNumeroDoUsuario = document.querySelector('.escolha-de-numero-usuario').value
    cl(escolhaDeNumeroDoUsuario)
    if(escolhaDeNumeroDoUsuario == ''){
        escolhaDeNumeroDoUsuario = 0
    }

    caca(parseInt(escolhaDeNumeroDoUsuario))
    
    
})

function cl(arg){
    console.log(arg)
}

