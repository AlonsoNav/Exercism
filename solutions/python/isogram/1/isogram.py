def is_isogram(string):
    ALPHABET = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"}
    seen = set()
    string = string.lower()
    for letter in string:
        if letter in ALPHABET:
            if letter in seen:
                return False
            seen.add(letter)
    return True
