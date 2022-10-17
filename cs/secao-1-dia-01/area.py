PI = 3.14


def square(side):
    '''Calculate area of square'''
    return side * side


def rectangle(lenth, width):
    '''Calculate area of rectangle'''
    return lenth * width


def circle(radius):
    ''''Calculate area of circle'''
    return PI * radius * radius


if __name__ == 'main':
    print('Área do quadrado:', square(10))
    print('Área do retângulo:', rectangle(2, 2))
    print('Área do circulo:', circle(3))
