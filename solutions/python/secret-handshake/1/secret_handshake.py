ACTIONS = [
    "wink",
    "double blink",
    "close your eyes",
    "jump"
]

def commands(binary_str):
    response = []
    i = len(binary_str) - 1
    while i > 0:
        if binary_str[i] == "1":
            response.append(ACTIONS[4 - i])
        i -= 1
    if binary_str[0] == "1":
        response = response[::-1]
    return response 
