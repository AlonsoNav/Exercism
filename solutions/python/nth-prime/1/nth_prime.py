def prime(number):
    if number == 0:
        raise ValueError('there is no zeroth prime')
    counter = []
    i = 2
    while len(counter) < number:
        if is_prime(i):
            counter.append(i)
        i += 1
    return counter[-1]

    
def is_prime(n):
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True