import numpy as np

allergies = np.array([
    "eggs",
    "peanuts",
    "shellfish",
    "strawberries",
    "tomatoes",
    "chocolate",
    "pollen",
    "cats"
])

class Allergies:

    def __init__(self, score):
        bin_arr = np.flip(np.array(list(np.binary_repr(score % 256)), dtype=int))
        self._allergies = allergies[np.where(bin_arr == 1)[0]]

    def allergic_to(self, item):
        return item in self._allergies

    @property
    def lst(self):
        return self._allergies.tolist()
