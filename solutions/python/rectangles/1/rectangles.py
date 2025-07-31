def rectangles(strings):
    counter = 0
    for i, line in enumerate(strings):
        for j in range(len(line)):
            if line[j] == '+':
                for k in range(j + 1, len(line)):
                    chark = line[k]
                    if chark == '+':
                        for l in range(i + 1, len(strings)):
                            charlj = strings[l][j]
                            charlk = strings[l][k]
                            if charlj == '+' and charlk == '+' and ' ' not in strings[l][j + 1:k]:
                                counter += 1
                            elif not(charlj in "+|" and charlk in '+|'):
                                break
                    elif chark != '-':
                        break
    return counter
