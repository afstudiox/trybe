# 1 - OK
# 0 - Instabilidades

# values1 = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# values2 = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4

def software_resiliency(values):
    
    resiliency_time = 0
    max_time = 0
    
    for value in values:
        if value == 1 :
            resiliency_time += 1
        else: 
            if resiliency_time > max_time:
                max_time = resiliency_time
                resiliency_time = 0
    return max_time
  

print(software_resiliency([0, 1, 1, 1, 0, 0, 1, 1]))
