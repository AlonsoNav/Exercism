def find_anagrams(word, candidates):
    word = word.lower()
    result = []
    find_all_combinations("", result, word)
    anagrams = []
    for candidate in candidates:
        if candidate.lower() != word and candidate.lower() in result:
            anagrams.append(candidate)
    return anagrams

def find_all_combinations(prefix, result, word):
    if len(word) == 0:
        result.append(prefix)
        return

    for char in word:
        find_all_combinations(prefix + char, result, word.replace(char, '', 1))
