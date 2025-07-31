def resistor_label(colors):
    len_colors = len(colors)
    if len_colors == 1:
        return str(COLORS[colors[0]]) + " ohms"
    elif len_colors == 4:
        ohms = (COLORS[colors[0]] * 10 + COLORS[colors[1]]) * (10 ** COLORS[colors[2]])
    elif len_colors == 5:
        ohms = (COLORS[colors[0]] * 100 + COLORS[colors[1]] * 10 + COLORS[colors[2]]) * (10 ** COLORS[colors[3]])
        
    prefix = ""
    if ohms != 0:
        if ohms >= (10 ** 9):
            prefix = "giga"
            ohms /= (10 ** 9)
        elif ohms >= (10 ** 6):
            prefix = "mega"
            ohms /= (10 ** 6)
        elif ohms >= (10 ** 3):
            prefix = "kilo"
            ohms /= (10 ** 3)
    return f"{ohms:g} {prefix}ohms ±{TOLERANCE[colors[-1]]}"

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

TOLERANCE = {
    "grey": "0.05%",
    "violet": "0.1%",
    "blue": "0.25%",
    "green": "0.5%",
    "brown": "1%",
    "red": "2%",
    "gold": "5%",
    "silver": "10%"
}
