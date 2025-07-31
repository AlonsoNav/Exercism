import re

def answer(question):
    replacements = {
        "plus": "+",
        "minus": "-",
        "multiplied by": "*",
        "divided by": "/"
    }
    question = question[8:-1]
    question = re.compile(r'\b(?:plus|minus|multiplied by|divided by)\b').sub(lambda m: replacements[m.group()], question)
    question = question.split()

    operations = {
        "+": sum,
        "-": subtract,
        "*": multiply,
        "/": divide
    }

    try:
        res = int(question[0])
    except:
        raise ValueError("syntax error")
    
    for i in range(1, len(question), 2):        
        op = question[i]
        if op not in operations and not op.isdigit():
            raise ValueError("unknown operation")

        try:
            num = int(question[i + 1])
        except: 
            raise ValueError("syntax error")
        
        res = operations[question[i]](res, num)
    
    return res

def sum(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b