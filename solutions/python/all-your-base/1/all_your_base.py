def rebase(input_base, digits, output_base):
    if input_base < 2:
        raise ValueError("input base must be >= 2")
    if output_base < 2:
        raise ValueError("output base must be >= 2")
    res = []
    l = len(digits) - 1
    for d in digits:
        if d < 0 or d >= input_base:
            raise ValueError("all digits must satisfy 0 <= d < input base")
        res.append(d * (input_base ** l))
        l -= 1
    num = sum(res)
    if num == 0:
        return [0]
    res = []
    while num > 0:
        res.append(num % output_base)
        num //= output_base
    return res[::-1]  # Reverse the result to get the correct order
