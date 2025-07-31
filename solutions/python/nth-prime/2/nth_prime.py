def prime(number):
    if number == 0:
        raise ValueError('there is no zeroth prime')
    primes = [2]
    i = 3
    while len(primes) < number:
        if all(i % p > 0 for p in primes):
            primes.append(i)
        i += 1
    return primes[-1]