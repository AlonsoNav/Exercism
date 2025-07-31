def saddle_points(matrix):
    if any(len(row) != len(matrix[0]) for row in matrix):
        raise ValueError("irregular matrix")
    result = []
    if matrix:
        min_values = [min(row[i] for row in matrix) for i in range(0, len(matrix[0]))]
    for i, row in enumerate(matrix):
        max_val = max(row)
        for j, val in enumerate(row):
            if val == max_val and val == min_values[j]:
                result.append({"row": i + 1, "column": j + 1})
    return result
                
