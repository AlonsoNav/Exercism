//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const generateKey = () => {
  let key = "";

  for(let i = 0; i < 100; i++)
     key += String.fromCharCode(97 + Math.floor(Math.random() * 26));

  return key;
}

export class Cipher {
  constructor(key = null) {
    if(key) 
      this._key = key;
    else
      this._key = generateKey();
  }

  encode(sentence) {
    let result = "";
    const keyLength = this._key.length;

    for(let i = 0; i < sentence.length; i++){
      const currentKey = this._key.charCodeAt(i % keyLength) - 97;
      result += String.fromCharCode(((sentence.charCodeAt(i) + currentKey - 97) % 26) + 97);
    }

    return result;
  }

  decode(sentence) {
    let result = "";
    const keyLength = this._key.length;

    for(let i = 0; i < sentence.length; i++){
      const currentKey = this._key.charCodeAt(i % keyLength) - 97;
      result += String.fromCharCode(((sentence.charCodeAt(i) + 26 - currentKey - 97) % 26) + 97);
    }

    return result;
  }

  get key() {
    return this._key;
  }
}
