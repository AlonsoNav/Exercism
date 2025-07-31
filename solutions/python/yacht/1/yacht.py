from collections import Counter

# Score categories.
# Change the values as you see fit.
YACHT = 0
ONES = 1
TWOS = 2
THREES = 3
FOURS = 4
FIVES = 5
SIXES = 6
FULL_HOUSE = 7
FOUR_OF_A_KIND = 8
LITTLE_STRAIGHT = 9
BIG_STRAIGHT = 10
CHOICE = 11


def score(dice, category):
    counts = Counter(dice)
    values = sorted(counts.values())
    if category == 0:
        return 50 if all(x == dice[0] for x in dice) else 0
    if category == 7:
        return sum(dice) if values == [2, 3] else 0
    if category == 8:
        return 4 * [k for k, v in counts.items() if v > 3][0] if values == [1, 4] or len(values) == 1 else 0
    if category == 9:
        return 30 if sorted(dice) == [1, 2, 3, 4, 5] else 0
    if category == 10:
        return 30 if sorted(dice) == [2, 3, 4, 5, 6] else 0
    if category == 11:
        return sum(dice)
    else:
        return sum(x for x in dice if x == category)
        
        
