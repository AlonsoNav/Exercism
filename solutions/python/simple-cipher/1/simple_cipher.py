import random
import string

ORD_0 = ord('a')

class Cipher:
    def __init__(self, key=None):
        self.key = ''.join(random.choice(string.ascii_lowercase) for _ in range(100)) if key is None else key

    def encode(self, text):
        return ''.join(chr((ord(self.key[i%len(self.key)]) - 2*ORD_0 + ord(char)) % 26 + ORD_0) for i, char in enumerate(text))

    def decode(self, text):
        return ''.join(chr((ord(char) - ord(self.key[i%len(self.key)])) % 26 + ORD_0) for i, char in enumerate(text))
