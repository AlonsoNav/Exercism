def response(hey_bob):
    hey_bob = hey_bob.strip()
    isupper = hey_bob.isupper()
    isquestion = hey_bob.endswith("?")
    if isquestion and isupper:
        return "Calm down, I know what I'm doing!"
    elif isquestion:
        return "Sure."
    elif isupper:
        return "Whoa, chill out!"
    elif hey_bob == "":
        return "Fine. Be that way!"
    else:
        return "Whatever."
