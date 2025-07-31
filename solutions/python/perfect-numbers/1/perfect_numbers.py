def classify(number):
    if number <= 0:
        raise ValueError("Classification is only possible for positive integers.")
    if number == 1:
        return "deficient"
    aliquot_sum = 1
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            aliquot_sum += i 
            next_factor = number / i
            if next_factor != i:
                aliquot_sum += next_factor
    if aliquot_sum == number:
        return "perfect"
    elif aliquot_sum < number:
        return "deficient"
    else:
        return "abundant"
