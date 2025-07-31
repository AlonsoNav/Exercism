def is_armstrong_number(number):
    digit_sum = 0
    number_string = str(number)
    number_len = len(number_string)
    for digit in number_string:
        digit_sum += int(digit) ** number_len
    return number == digit_sum
