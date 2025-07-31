def proverb(*words, qualifier=None):
    if len(words) == 0:
        return []
    result = [f"For want of a {words[i - 1]} the {words[i]} was lost." for i in range(1, len(words))]
    return result + [f"And all for the want of a {qualifier + ' ' if qualifier else ''}{words[0]}."]
