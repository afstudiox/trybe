soma = 0
values = input(
    'Digite os valores a serem somados, separando-os por vigula(,): ')
for item in values.split(','):
    if not item.isdigit():
        print(f'Erro ao somar valores, {item} não é um número')
    else:
        soma += int(item)
print(f'A soma dos valores válidos é: {soma}')
