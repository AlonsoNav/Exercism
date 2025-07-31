def append(list1, list2):
    return list1 + list2


def concat(lists):
    print(lists)
    result = []
    for ele in lists:
        if isinstance(ele, list):
            result += ele
        else:
            result.append(ele)
    return result


def filter(function, list):
    result = []
    for ele in list:
        if function(ele):
            result.append(ele)
    return result


def length(list):
    return len(list)


def map(function, list):
    result = []
    for ele in list:
        result.append(function(ele))
    return result


def foldl(function, list, initial):
    for ele in list:
        initial = function(initial, ele)
    return initial


def foldr(function, list, initial):
    for ele in list[::-1]:
        initial = function(initial, ele)
    return initial

def reverse(list):
    return list[::-1]
