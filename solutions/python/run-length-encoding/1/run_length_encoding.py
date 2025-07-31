import re


def decode(string):
    return ''.join((int(num) if num else 1) * char for num, char in re.findall(r'(\d*)([A-Za-z\s])', string))


def encode(string):
    return ''.join(f"{len(match.group()) if len(match.group()) > 1 else ''}{match.group(1)}" for match in re.finditer(r'(.)\1*', string))
