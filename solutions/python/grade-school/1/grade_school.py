class School:
    def __init__(self):
        self.students = []
        self._added = []

    def add_student(self, name, grade):
        if name in [x[0] for x in self.students]:
            self._added.append(False)
        else:
            self.students.append((name, grade))
            self._added.append(True)

    def roster(self):
        return [name for name, _ in sorted(self.students, key=lambda x: (x[1], x[0]))]

    def grade(self, grade_number):
        return [name for name, _ in sorted([data for data in self.students if data[1] == grade_number], key=lambda x: (x[1], x[0]))]

    def added(self):
        return self._added
