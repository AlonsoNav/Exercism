def primes(limit):
    return [i for i in range(2, limit + 1) if is_prime(i)]
        
        
def is_prime(n):
    if n < 2:
        return False
    if n in (2, 3):
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    for i in range(5, int(n ** 0.5) + 1, 2):
        if n % i == 0:
            return False
    return True