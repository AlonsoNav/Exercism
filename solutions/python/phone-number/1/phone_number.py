class PhoneNumber:
    def __init__(self, number):
        this_number = ""
        for char in number:
            if char.isdigit():
                this_number += char
            elif char.isalpha():
                raise ValueError("letters not permitted")
            elif not(char in "()-. +"):
                raise ValueError("punctuations not permitted")
        l = len(this_number)
        if l < 10:
            raise ValueError("must not be fewer than 10 digits")
        if l > 11:
            raise ValueError("must not be greater than 11 digits")
        if l == 11:
            if this_number[0] != "1":
                raise ValueError("11 digits must start with 1")
            this_number = this_number[1:]
        if this_number[3] == "1":
            raise ValueError("exchange code cannot start with one")
        if this_number[3] == "0":
            raise ValueError("exchange code cannot start with zero")
        if this_number[0] == "1":
            raise ValueError("area code cannot start with one")
        if this_number[0] == "0":
            raise ValueError("area code cannot start with zero")
        self.number = this_number
        self.area_code = this_number[:3]

    def pretty(self):
        return f"({self.area_code})-{self.number[3:6]}-{self.number[6:]}"


