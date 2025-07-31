def rows(letter):
    letter_ord = ord(letter)
    length = (letter_ord << 1) - 129
    result = ["A".center(length, " ")]
    
    for i in range(66, letter_ord + 1):
        char = chr(i)
        result.append(f"{char}{' ' * ((i << 1) - 131)}{char}".center(length, " "))

    return result + result[:-1][::-1]
