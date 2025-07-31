def transpose(text):
    text = text.replace(" ", "~")
    i = 0
    rows = text.split("\n")
    sentences = []
    while True:
        sentence = ""
        flag = True
        for row in rows:
            if i < len(row):
                sentence += row[i]
                is_end = flag = False
            else:
                sentence += " "
        if flag:
            break
        sentences.append(sentence.rstrip())
        i += 1
    return "\n".join(sentences).replace("~", " ")
