import random
import string

class Robot:
    names = set()

    def __init__(self):
        self.name = self.generate_name()

    def generate_name(self):
        name = ''.join(random.choices(string.ascii_uppercase, k=2)) + ''.join(random.choices(string.digits, k=3))
        while name in Robot.names:
            name = ''.join(random.choices(string.ascii_uppercase, k=2)) + ''.join(random.choices(string.digits, k=3))
        Robot.names.add(name) 
        return name

    def reset(self):
        self.name = self.generate_name()  
