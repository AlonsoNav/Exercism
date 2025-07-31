def distance(strand_a, strand_b):
    strands_len = len(strand_a)
    if strands_len != len(strand_b):
        raise ValueError("Strands must be of equal length.")
    hamming_distance = 0
    for i in range(0, strands_len):
        if strand_a[i] != strand_b[i]:
            hamming_distance += 1
    return hamming_distance
