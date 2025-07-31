def translate(text):
    translation = []
    for word in text.split(" "):
        if word.startswith(("a", "e", "i", "o", "u", "xr", "yt")):
            translation.append(word + "ay")
        else:
            end = ""
            for index, char in enumerate(word):
                if char == "u" and end.endswith("q"):
                    index += 1
                    end += char
                    break
                elif char in "aeiou":
                    break
                elif char == "y" and index != 0:
                    break
                end += char
            translation.append(word[index:] + end + "ay")
    return " ".join(translation)
            
        
