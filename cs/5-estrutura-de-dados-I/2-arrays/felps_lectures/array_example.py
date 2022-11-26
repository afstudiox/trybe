class Array:
  def __init__(self):
    self.data = []
  
  def __len__(self):
    return len(self.data)
  
  def __str__(self):
    return str(self.data)
  
  def get(self, index):
    return self.data[index]
  
  def set(self, index, value):
    self.data.insert(index, value)
    
array = Array()
array.set(0, "Andre")
array.set(1, "Felipe")
array.set(2, "Santos")

index = 0
while index < len(array):
  print("Index:", index, ", Nome:", array.get(index))
  index += 1

print("Tamanho do array usando custom method: " , len(array))
print("Imprimindo o array custom method: " , str(array))

