//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if (n < 0 || n > 999_999_999_999)
    throw new Error('Number must be between 0 and 999,999,999,999.');
  if (n === 0)
    return 'zero';
  
  const thousands = [
    [1_000_000_000, 'billion'],
    [1_000_000, 'million'],
    [1_000, 'thousand']
  ];

  let res = '';

  for (const [limit, label] of thousands) {
    if (n >= limit) {
      const chunk = Math.floor(n / limit);
      n -= chunk * limit;
      res += `${getChunk(chunk)} ${label} `;
    }
  }

  return n> 0 ? res + getChunk(n) : res.trim();
  };

const getChunk = (n) => {
  const ones = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  let res = '';
  
  if (n > 99) {
    const hund = Math.floor(n / 100);
    n -= hund * 100;
    res = `${ones[hund]} hundred`;
  }

  if (n === 0)
    return res;
  else
    res = res ? res + ' ' : res;

  if (n > 19) {
    const mod = n % 10;
    return res + tens[Math.floor(n / 10)] + (mod !== 0 ? `-${ones[mod]}` : '');
  } else 
    return res + ones[n];
}
