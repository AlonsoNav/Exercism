def sum_of_multiples(limit, multiples):
    unique_multiples = set()
    for number in multiples:
        i = number
        while i < limit and i != 0:
            unique_multiples.add(i)
            i += number
    return sum(unique_multiples)
        