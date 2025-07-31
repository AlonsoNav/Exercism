def slices(series, length):
    if length == 0:
        raise ValueError("slice length cannot be zero")
    if length < 0:
        raise ValueError("slice length cannot be negative")
    s_len = len(series)
    if s_len == 0:
        raise ValueError("series cannot be empty")
    if length > s_len:
        raise ValueError("slice length cannot be greater than series length")
    return [series[i:i + length] for i in range(0, s_len - length + 1)]
