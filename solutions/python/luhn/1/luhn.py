class Luhn:
    def __init__(self, card_num):
        self.card_num = card_num.replace(" ", "")

    def valid(self):
        l = len(self.card_num)
        if l < 2:
            return False
        result = 0
        for i in range(0, l):
            char = self.card_num[-1 - i]
            if char.isnumeric():
                number = int(char)
                if i % 2 != 0:
                    number <<= 1
                    number = number - 9 if number > 9 else number
                result += number
            else:
                return False
        return result % 10 == 0
