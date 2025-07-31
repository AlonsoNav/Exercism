class Matrix:
    def __init__(self, matrix_string):
        self.matrix_rows = [[int(number) for number in row.split()] for row in matrix_string.split('\n')]
        self.matrix_columns = [[row[i] for row in self.matrix_rows] for i in range(0, len(self.matrix_rows[0]))]

    def row(self, index):
        return self.matrix_rows[index-1]

    def column(self, index):
        return self.matrix_columns[index-1]
