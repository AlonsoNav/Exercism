import re
def abbreviate(text):
    return ("".join([word[0] for word in re.findall(r"[a-zA-Z']+", text)])).upper()
        
