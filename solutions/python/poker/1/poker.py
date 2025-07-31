card_to_num = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14
}

def best_hands(hands):
    best = []
    best_rank = (10, [-1, -1, -1, -1, -1])
    for hand in hands:
        cards = hand.split()
        num = sorted([card_to_num[card[:-1]] for card in cards])
        suit = [card[-1] for card in cards]
        rank = get_hand_rank(num, suit)
        if rank[0] < best_rank[0]:
            best = [hand]
            best_rank = rank
        elif rank[0] == best_rank[0]:
            flag = True
            for i in range(4, -1, -1):
                if best_rank[1][i] < rank[1][i]:
                    best = [hand]
                    best_rank = rank
                    flag = False
                    break
                elif best_rank[1][i] > rank[1][i]:
                    flag = False
                    break
            if flag:
                best.append(hand)
    return best


def get_hand_rank(num, suit):
    if is_royal_flush(num, suit):
        return (0, num)
    if is_straight_flush(num, suit):
        if num[-1] == 14 and num[0] == 2:
            num[-1] = 5
        return (1, num)
    if is_four_of_a_kind(num):
        values = count_values(num)
        res = []
        for n, value in values.items():
            if value == 4:
                res = res + [n, n, n, n]
            else:
                res = [n] + res
        return (2, res)
    if is_full_house(num):
        values = count_values(num)
        res = []
        for n, value in values.items():
            if value == 3:
                res = res + [n, n, n]
            else:
                res = [n, n] + res
        return (3, res)
    if is_flush(suit):
        return (4, num)
    if is_straight(num):
        if num[-1] == 14 and num[0] == 2:
            num[-1] = 5
        return (5, num)
    if is_three_of_a_kind(num):
        return (6, num)
    if is_two_pair(num):
        return (7, num)
    if is_one_pair(num):
        return (8, num)
    return (9, num)


def count_values(num):
    counts = {}
    for n in num:
        if n not in counts:
            counts[n] = 0
        counts[n] += 1
    return counts


def is_royal_flush(num, suit):
    return num == [10, 11, 12, 13, 14] and is_flush(suit)


def is_straight_flush(num, suit):
    return is_straight(num) and is_flush(suit)


def is_four_of_a_kind(num):
    counts = count_values(num)
    for value in counts.values():
        if value == 4:
            return True
    return False


def is_full_house(num):
    return len(set(num)) == 2


def is_flush(suit):
    return all(card == suit[0] for card in suit)


def is_straight(num):
    return all(card == num[i] + 1 for i, card in enumerate(num[1:])) or (num[-1] == 14 and num[0] == 2 and is_straight(num[:-1]))


def is_three_of_a_kind(num):
    counts = count_values(num)
    for value in counts.values():
        if value == 3:
            return True
    return False


def is_two_pair(num):
    return len(set(num)) == 3


def is_one_pair(num):
    return len(set(num)) == 4
