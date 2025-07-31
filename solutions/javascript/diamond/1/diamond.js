//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  if (letter === 'A')
    return ['A'];

  const charCode = letter.charCodeAt(0), len = (charCode - 64) * 2 - 1;
  let lastLen = 1, pad = (len - 1) / 2;
  const res = [' '.repeat(pad) + 'A' + ' '.repeat(pad)];

  for (let i = 66; i <= charCode; i++) {
    const char = String.fromCharCode(i);
    const parc = char + ' '.repeat(lastLen) + char;
    lastLen = parc.length;
    pad = (len - lastLen) / 2;
    res.push(' '.repeat(pad) + parc + ' '.repeat(pad));
  }

  return res.concat(res.slice(0, -1).reverse());
};
