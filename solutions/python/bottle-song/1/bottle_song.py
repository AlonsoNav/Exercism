def recite(start, take=1):
    numbers = ['no', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
    res = []
    for i in range(start, start-take, -1):
        bottle2 = 'bottles' if i-1 != 1 else 'bottle'
        bottle1 = 'bottles' if i != 1 else 'bottle'
        res += [
            numbers[i]+ " green " + bottle1 + " hanging on the wall,",
            numbers[i]+ " green " + bottle1 + " hanging on the wall,",
            "And if one green bottle should accidentally fall,",
            "There'll be " + numbers[i-1].lower() + " green " + bottle2 + " hanging on the wall.", ""]
    return res[:-1]
