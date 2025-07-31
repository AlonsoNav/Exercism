//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static generate({maxFactor, minFactor}) {
    if(maxFactor < minFactor)
      throw new Error('min must be <= max');
    const result = {smallest: {value: null, factors: []}, largest: {value: null, factors: []}};
    for(let i = minFactor; i <= maxFactor; i++) {
      for(let j = i; j <= maxFactor; j++){
        const num = i * j;
        if(this.isPalindrome(num)){
          if(!result.smallest.value || num < result.smallest.value)
            result.smallest = { value: num, factors: [[i, j]] };
          else if (num === result.smallest.value)
            result.smallest.factors.push([i, j]);

          if (!result.largest.value || num > result.largest.value)
            result.largest = { value: num, factors: [[i, j]] };
          else if (num === result.largest.value)
            result.largest.factors.push([i, j]);
        }
      }
    }
    return result;
  }

  static isPalindrome(num) {
    const str = num.toString(), len = str.length;
    for (let i = 0; i < len / 2; i++)
      if (str[i] !== str[len - 1 - i])
        return false;
    return true;
  }
}
