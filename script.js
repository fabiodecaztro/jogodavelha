let parOuImpar = document.querySelector('.btns-escolha');
let btnEnviar = document.querySelector('.btn-enviar')
let table = document.querySelector('#table')
let posicoes = []
let escolhaDeNumeroDaMaquina = ''
let escolhaParidade = ''


table.addEventListener('click', function (event) {
    let posicao = event.target.getAttribute('id');
    aaa(posicao)
})

function aaa(posicao) {

    let botaoJogo = document.getElementById(posicao)

    botaoJogo.disabled = true
    botaoJogo.style.color = '#0dcaf0'
    botaoJogo.innerHTML = 'X'
}

let botoesXouO = document.querySelector('.btns-x-ou-o')
let opcao_de_marcacao = ''
botoesXouO.addEventListener('click', function (event) {
    opcao_de_marcacao = event.target.getAttribute('id')
    ggg(ganhador, opcao_de_marcacao)
    cl(opcao_de_marcacao)
})


parOuImpar.addEventListener('click', function (event) {
    escolhaParidade = event.target.getAttribute('id')
    document.getElementById('btn-par').disabled = true
    document.getElementById('btn-impar').disabled = true

    document.getElementById(escolhaParidade).style.background = 'green'
    escolhaDeNumeroDaMaquina = Math.round(Math.random(1, 9) * 9);
    cl(escolhaDeNumeroDaMaquina)
})
let opcao = ''

function caca(escolhaDeNumeroDaUsuario) {
    let soma = escolhaDeNumeroDaMaquina + escolhaDeNumeroDaUsuario;
    let exibeResultado = document.querySelector('.resultado')

    let resultado = soma % 2;
    cl(escolhaParidade)
    if (escolhaParidade == 'btn-par' && resultado == 0) {
        exibeResultado.innerHTML = 'Você ganhou, pode escolher!'
        exibeResultado.style.color = 'green';

    } else if (escolhaParidade == 'btn-impar' && resultado > 0) {
        exibeResultado.innerHTML = 'Você ganhou, pode escolher!'
        exibeResultado.style.color = 'green';
    } else {
        exibeResultado.innerHTML = 'Você perdeu, a maquina escolhe!'
        ganhador = true
        let escolha = Math.round(Math.random(0, 1) * 1);
        if (escolha == 0) {
            opcao_de_marcacao = 'btn-x'
        } else {
            opcao_de_marcacao = 'btn-o'
        }
        setTimeout(ggg(ganhador, opcao_de_marcacao), 2000)
        exibeResultado.style.color = 'red';

    }
    cl(resultado)

}

let ganhador = false;

function ggg(ganhador, opcao_de_marcacao) {
    cl(opcao_de_marcacao)
    if (opcao_de_marcacao == 'btn-x') {
        opcao = 'X'

    } else {
        opcao = 'O'
    }
    let exibeEscolha = document.querySelector('.exibe-escolha')

    if (ganhador == false) {
        exibeEscolha.innerHTML = 'Você escolheu ' + opcao
    } else {
        exibeEscolha.innerHTML = 'A maquina escolheu ' + opcao
    }
}





btnEnviar.addEventListener('click', function () {

    let escolhaDeNumeroDoUsuario = document.querySelector('.escolha-de-numero-usuario').value
    cl(escolhaDeNumeroDoUsuario)
    if (escolhaDeNumeroDoUsuario == '') {
        escolhaDeNumeroDoUsuario = 0
    }

    caca(parseInt(escolhaDeNumeroDoUsuario))


})

function cl(arg) {
    console.log(arg)
}
// falta concluir a escolha e ajustar o tempo da maquina