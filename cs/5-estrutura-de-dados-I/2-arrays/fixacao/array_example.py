import sys

class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        # recupera o elemento no índice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.data.insert(index, value)
        
    def update(self, index, value):
        # atualiza um elemento no índice informado
        self.data[index] = value
        
    def remove(self, index):
        # remove um elemento no índice informado
        self.data.pop(index)


# vamos inicializar e preencher uma estrutura de dados array
array = ListaArray()
array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1

# quando começamos as inserções o valor muda
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 56

# vamos atualizar um elemento
print("Indice 0 antes de alterar" , array.get(0))  # saída: Felipe
array.update(0, "Andre")
print("Indice 0 depois de alterar" , array.get(0))  # saída: Andre


# vamos remover um elemento e imprimir a lista e seu tamanho
array.remove(0)
index =0
while index < len(array):
    print("Index:", index, ", Nome:", array.get(index))
    index += 1
print(array_memory_size)


