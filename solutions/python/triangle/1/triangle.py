def isTriangle(sides):
    return not any(x <= 0 for x in sides) and sides[0] + sides[1] >= sides[2] and sides[0] + sides[2] >= sides[1] and sides[1] + sides[2] >= sides[0]
    

def equilateral(sides):
    return isTriangle(sides) and sides[0] == sides[1] == sides[2]


def isosceles(sides):
    return isTriangle(sides) and (sides[0] == sides[1] or sides[0] == sides[2] or sides[1] == sides[2])


def scalene(sides):
    return isTriangle(sides) and (sides[0] != sides[1] and sides[0] != sides[2] and sides[1] != sides[2])
