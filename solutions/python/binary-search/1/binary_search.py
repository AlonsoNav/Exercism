def find(search_list, value):
    list_len = len(search_list)
    if list_len == 0:
        raise ValueError("value not in array")
        
    mid_index = list_len // 2
    mid_value = search_list[mid_index]
    if mid_value == value:
        return mid_index
    elif mid_value > value:
        return find(search_list[:mid_index], value)
    else:
        return mid_index + 1 + find(search_list[mid_index + 1:], value)
