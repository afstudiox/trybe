# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]

def shuffle(items):
    answer = []
    div_cards = len(items) // 2
    for offset in range(div_cards):
        answer.extend(items[offset::div_cards])
    return answer

print(shuffle([2, 6, 4, 5]))