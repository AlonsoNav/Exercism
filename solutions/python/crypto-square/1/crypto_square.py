def cipher_text(plain_text):
    plain_text = normalize(plain_text)
    length = len(plain_text)
    # Calculate the number of columns and rows
    if length == 0:
        return ""
    c = 1
    r = 1
    while c * r < length:
        if c == r:
            c += 1
        else:
            r += 1
    res = [plain_text[i:i+c] for i in range(0, length, c)]
    res[-1] = res[-1] + (' ' * (c * r - length))  # Fill the last row with spaces
    return ' '.join(''.join(row[i] for row in res) for i in range(0, c))


def normalize(plain_text):
    return ''.join(char.lower() for char in plain_text if char.isalnum())