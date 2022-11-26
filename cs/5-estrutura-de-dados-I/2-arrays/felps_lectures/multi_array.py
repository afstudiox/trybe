from array_example import Array


class Matrix(Array):
  
  def get(self, row, column):
    return self.data[row][column]
  
  def set(self, row, column, value):
    try:
      self.data[row].insert(column, value)
    except IndexError:
      self.data.insert(row, [value])
  
  def remove(self, row, column):
    return self.data[row].pop(column)
  
array = Matrix()
array.set(0,0,'Andre')
array.set(0,1,'Felipe')
array.set(0,2,'Santos')
array.set(1,0,'Adriana')
array.set(1,1,'Coelho')
array.set(1,2,'Reis')
  
rindex = 0
cindex = 0
while cindex <= len(array):
  while rindex <= len(array):
    print("Index:", rindex, ", Nome:", array.get(cindex, rindex))
    rindex += 1
cindex += 1
  
  
  