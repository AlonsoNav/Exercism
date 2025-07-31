def transform(legacy_data):
    result = {}
    for key_point in legacy_data:
        for letter in legacy_data[key_point]:
            result[letter.lower()] = key_point
    return result
