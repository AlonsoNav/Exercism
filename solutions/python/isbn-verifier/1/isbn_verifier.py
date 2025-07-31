def is_valid(isbn):
    isbn = isbn.replace('-', '')
    len_isbn = len(isbn)
    
    if len_isbn != 10:
        return False
        
    try:
        checksum = 10 if isbn[-1] == "X" else int(isbn[-1])
    except ValueError:
        return False
        
    for index, digit in enumerate(isbn[:-1]):
        try:
            checksum += int(digit) * (len_isbn - index)
        except ValueError:
            return False

    return checksum % 11 == 0