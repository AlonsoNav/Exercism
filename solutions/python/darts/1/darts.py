def score(x, y):
    distance = x ** 2 + y ** 2
    if distance > 100:
        return 0
    elif distance > 25:
        return 1
    elif distance > 1:
        return 5
    else:
        return 10
