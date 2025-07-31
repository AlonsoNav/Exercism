def cipher(plain_text):
    return "".join(
        chr(219 - ord(char)) if char.isalpha() else
        char if char.isdigit() else "" 
        for char in plain_text.lower()
    )


def encode(plain_text):
    result = cipher(plain_text)
    return " ".join(result[i:i + 5] for i in range(0, len(result), 5))       


def decode(ciphered_text):
    return cipher(ciphered_text)
