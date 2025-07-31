def steps(number):
    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    else:
        return stepsAux(number)
        
def stepsAux(number):
    if number == 1:
        return 0
    else:
        if number % 2 == 0:
            return 1 + stepsAux(number / 2)
        else:
            return 1 + stepsAux(3 * number + 1)