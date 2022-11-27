# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.

def count_pairs(items):
    answer = 0
    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            if items[i] == items[j]:
                answer += 1
    return answer
  
print(count_pairs([1, 1, 2, 3]))