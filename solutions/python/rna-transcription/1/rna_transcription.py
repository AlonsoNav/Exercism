def to_rna(dna_strand):
    translator = {"A": "U", "C": "G", "G": "C", "T": "A"}
    result = ""
    for nucleotide in dna_strand:
        result += translator[nucleotide]
    return result
