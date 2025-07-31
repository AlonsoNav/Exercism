def say(number):
    if number < 0 or number > 999_999_999_999:
        raise ValueError("input out of range")
    if number == 0:
        return "zero"
    chunks = {
        1_000_000_000: "billion",
        1_000_000: "million",
        1_000: "thousand"
    }
    result = ""
    for key, value in chunks.items():
        if number >= key:
            result += f"{get_chunk(number // key)} {value} "
            number %= key
    return result + get_chunk(number) if number > 0 else result[:-1]    
    
    
def get_chunk(number):
    basics = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six", 
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }
    tenths = {
        90: "ninety",
        80: "eighty",
        70: "seventy",
        60: "sixty",
        50: "fifty",
        40: "forty",
        30: "thirty",
        20: "twenty"    
    }
    result = ""
    if number >= 100:
        result += f"{basics[number // 100]} hundred"
        number %= 100
        result += ' ' if number > 0 else ''
    for key, value in tenths.items():
        if number >= key:
            number -= key
            result += f"{value}{'-' if number > 0 else ''}"
            break
    result += basics[number] if number > 0 else ''
    return result