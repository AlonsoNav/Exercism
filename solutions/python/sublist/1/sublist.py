"""
This exercise stub and the test suite contain several enumerated constants.

Enumerated constants can be done with a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""

# Possible sublist categories.
# Change the values as you see fit.
SUBLIST = 0
SUPERLIST = 1
EQUAL = 2
UNEQUAL = 3


def sublist(list_one, list_two):
    if list_one == list_two:
        return 2
    m, n = len(list_one), len(list_two)
    if m < n and any(list_one == list_two[i:i+m] for i in range(n - m + 1)):
        return 0
    if n < m and any(list_two == list_one[i:i+n] for i in range(m - n + 1)):
        return 1
    return 3
