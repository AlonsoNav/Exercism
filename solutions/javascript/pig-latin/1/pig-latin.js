//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (sentence) => {
  const res = [];
  for(const word of sentence.split(' ')) {
    if(['a', 'e', 'o', 'i', 'u', 'xr', 'yt'].some(e => word.startsWith(e))) {
      res.push(word + 'ay');
      continue;
    }
    let i = 1;
    for(; i < word.length; i++) {
      if(word[i] === 'u' && word[i-1] === 'q')
        break;
      if(['a', 'e', 'o', 'i', 'u', 'y'].includes(word[i])) {
        i--;
        break;
      }
    }
    res.push(word.slice(i + 1) + word.slice(0, i + 1) + 'ay');
  }
  return res.join(' ');
};
