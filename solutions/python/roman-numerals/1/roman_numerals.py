def roman(number):
    romans = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }
    keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    i = 0
    result = ""
    while number > 0 and i < len(keys):
        current_i = keys[i]
        if number >= current_i:
            result += romans[current_i]
            number -= current_i
        else:
            i += 1
    return result
