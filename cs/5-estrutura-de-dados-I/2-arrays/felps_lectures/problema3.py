# spots = [8, 1, 5, 2, 6] #R: 11
spots = [4, 1, 5, 2, 6] #R: 9

def max_score(array):
    asnwer = -1
    previous = -1
    
    for j in range(1, len(array)):
        i = j - 1
        previous = max(previous, array[i] + i)
        asnwer = max(asnwer, previous + array[j] - j)
    return asnwer


print(max_score(spots))