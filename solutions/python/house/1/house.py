NURSERY_RHYME = [
    "This is the house that Jack built.",
    "This is the malt that lay in",
    "This is the rat that ate",
    "This is the cat that killed",
    "This is the dog that worried",
    "This is the cow with the crumpled horn that tossed", 
    "This is the maiden all forlorn that milked", 
    "This is the man all tattered and torn that kissed",
    "This is the priest all shaven and shorn that married", 
    "This is the rooster that crowed in the morn that woke",
    "This is the farmer sowing his corn that kept",
    "This is the horse and the hound and the horn that belonged to"
]

def recite(start_verse, end_verse):
    result = []
    for i in range (start_verse, end_verse + 1):
        result.append(get_verse(i - 1, NURSERY_RHYME[i - 1]))
    return result

def get_verse(num_verse, initial):
    if num_verse == 0:
        return initial
    return get_verse(num_verse - 1, initial + NURSERY_RHYME[num_verse - 1][7:])
