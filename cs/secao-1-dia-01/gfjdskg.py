lista = [1, 2, 3, 4, 5, 6]
lista_invertida = lista[-2::-1]
lista_completa = lista + lista_invertida
for item in lista_completa:
    print(f'{item}', end=' ', flush=True)
