def square_root(number):
    subtract = 1
    counter = 0
    while number > 0:
        number -= subtract
        subtract += 2
        counter += 1
    return counter
