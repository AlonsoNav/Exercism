def convert(input_grid):
    numbers = [
        [" _ ", "| |", "|_|", "   "],
        ["   ", "  |", "  |", "   "],
        [" _ ", " _|", "|_ ", "   "],
        [" _ ", " _|", " _|", "   "],
        ["   ", "|_|", "  |", "   "],
        [" _ ", "|_ ", " _|", "   "],
        [" _ ", "|_ ", "|_|", "   "],
        [" _ ", "  |", "  |", "   "],
        [" _ ", "|_|", "|_|", "   "],
        [" _ ", "|_|", " _|", "   "]
    ]
    if len(input_grid) % 4 != 0:
        raise ValueError("Number of input lines is not a multiple of four")
    if any(len(input_column) % 3 != 0 for input_column in input_grid):
        raise ValueError("Number of input columns is not a multiple of three")
    result = []
    for i in range(0, len(input_grid), 4):
        current = ""
        for j in range(0, len(input_grid[0]), 3):
            element = [input_grid[k][j:j+3] for k in range(i, i+4)]
            current += str(numbers.index(element)) if element in numbers else "?"
        result.append(current)
    return ",".join(result)

