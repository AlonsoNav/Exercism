def triplets_with_sum(number):
    res = []
    limit = int((number/2)**0.5)
    
    for m in range(2, limit + 1):
        if (number / 2) % m == 0:
            k = m + 1 if m % 2 == 0 else m + 2
            
            while k < 2 * m and k <= number / (2 * m):
                if (number/(2*m)) % k == 0 and gcd(k, m) == 1:
                    d = number//(2*m*k)
                    n = k-m
                    a = d*(m*m - n*n)
                    b = d*(2*m*n)
                    c = d*(m*m + n*n)
                    if a + b + c == number:
                        triplet = sorted([a, b, c])
                        if triplet not in res:
                            res.append(triplet)
                k += 2
    
    return sorted(res)

def gcd(a, b):
    while b:
        a, b = b, a % b
    return a
