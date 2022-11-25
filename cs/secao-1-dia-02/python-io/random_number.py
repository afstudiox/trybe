import random

random_number = random.randint(1, 10)  # gera um número aleatório entre 1 e 10
guess = ''
guess_int = 0

while guess_int != random_number:  # enquanto não adivinhar o número
    # print(random_number)
    guess = input("Qual o seu palpite? ")  # pede um palpite
    guess_int = int(guess)  # converte o palpite para inteiro

print("O número sorteado era: ", guess)
