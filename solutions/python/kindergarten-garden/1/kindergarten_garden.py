plants = {
    'G': 'Grass',
    'C': 'Clover',
    'R': 'Radishes',
    'V': 'Violets'
}

class Garden:
    def __init__(self, diagram, students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry']):
        self.diagram = [''.join(row[i:i+2] for row in diagram.split('\n')) for i in range(0, (len(diagram) - 2) // 2, 2)]
        self.students = sorted(students)

    def plants(self, student):
        return [plants[char] for char in self.diagram[self.students.index(student)]]
