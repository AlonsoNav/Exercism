COLORS = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
}

def label(colors):
    ohms = (COLORS[colors[0]] * 10 + COLORS[colors[1]]) * (10 ** COLORS[colors[2]])
    if ohms != 0:
        if ohms % (10 ** 9) == 0:
            return str(ohms // (10 ** 9)) + " gigaohms"
        elif ohms % (10 ** 6) == 0:
            return str(ohms // (10 ** 6)) + " megaohms"
        elif ohms % (10 ** 3) == 0:
            return str(ohms // (10 ** 3)) + " kiloohms"
    return str(ohms) + " ohms"
