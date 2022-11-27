# entradas = [1, 2, 3]
# saídas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.

# def exercicio4(entrada, saida, instante):
#     resultado = 0
#     for i in range(len(entrada)):
#         if entrada[i] <= instante <= saida[i]:
#             resultado += 1
#     return resultado
  
# http://devfuria.com.br/python/built-in-zip/
def exercicio4(entrada, saida, instante):
    return sum(
      entrada <= instante <= saida
      for entrada, saida in zip(entrada, saida)
    )
  
print(exercicio4([1, 2, 3], [3, 2, 7], 3))