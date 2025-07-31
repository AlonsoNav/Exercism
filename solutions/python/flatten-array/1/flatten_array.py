def flatten(iterable):
    result = []
    for element in iterable:
        if isinstance(element, list):
            result += flatten(element)
        elif element != None:
            result.append(element)
    return result