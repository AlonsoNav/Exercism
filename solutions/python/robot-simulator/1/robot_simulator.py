# Globals for the directions
# Change the values as you see fit
EAST = 1
NORTH = 0
WEST = 3
SOUTH = 2

movements = [
    (0, 1),
    (1, 0),
    (0, -1),
    (-1, 0)
]


class Robot:
    def __init__(self, direction=NORTH, x_pos=0, y_pos=0):
        self.direction = direction
        self.coordinates = (x_pos, y_pos)

    def move(self, actions):
        for action in actions:
            if action == "R":
                self.direction = (self.direction + 1) % 4
            elif action == "L":
                self.direction = (self.direction + 3) % 4
            else:
                self.coordinates = tuple(a + b for a, b in zip(self.coordinates, movements[self.direction]))
