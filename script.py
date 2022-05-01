from os import system

system('cls')

print('JOGO DA VELHA\n')
nomeJogador = 'fabio'  # !str(input('Diga seu nome: '))

while True:
    escolhaJogador = str(input('Escolha sua opção [X ou 0]: ')).upper()
    if escolhaJogador in 'XO0':
        if escolhaJogador == 'X':
            escolhaMaquina = 'O'
        else:
            escolhaJogador = 'O'
            escolhaMaquina = 'X'
        print(
            f'\nJogador {nomeJogador} - {escolhaJogador}\nMaquina - {escolhaMaquina}')
        print('-' * 30)
        break
    else:
        print('\nOpção invalida')
