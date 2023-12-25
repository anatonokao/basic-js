const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode) {
    if (mode === false) this.mode = "reverse";
    else this.mode = "direct";
  }

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    let generatedKey = "";
    let res = [];

    let counter = 0;
    let keyChar = 0;
    while (generatedKey.length < message.length) {
      if (this.alphabet.indexOf(message[counter]) === -1) {
        generatedKey = generatedKey + " ";
      } else {
        generatedKey = generatedKey + key[keyChar % key.length];
        keyChar += 1;
      }
      counter += 1;
    }
    generatedKey = generatedKey.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      const symbol = message[i];
      if (this.alphabet.indexOf(symbol) === -1) {
        res.push(symbol);
        continue;
      }
      const symbolIndex =
        (this.alphabet.indexOf(message[i]) +
          this.alphabet.indexOf(generatedKey[i])) %
        26;
      res.push(this.alphabet[symbolIndex]);
    }

    return this.mode === "direct" ? res.join("") : res.reverse().join("");
  }

  decrypt(enMessage, key) {
    if (!enMessage || !key) throw new Error("Incorrect arguments!");

    enMessage = enMessage.toUpperCase();
    let generatedKey = "";
    let res = [];

    let counter = 0;
    let keyChar = 0;
    while (generatedKey.length < enMessage.length) {
      if (this.alphabet.indexOf(enMessage[counter]) === -1) {
        generatedKey = generatedKey + " ";
      } else {
        generatedKey = generatedKey + key[keyChar % key.length];
        keyChar += 1;
      }
      counter += 1;
    }
    generatedKey = generatedKey.toUpperCase();

    for (let i = 0; i < enMessage.length; i += 1) {
      const symbol = enMessage[i];
      if (this.alphabet.indexOf(symbol) === -1) {
        res.push(symbol);
        continue;
      }

      const symbolIndex =
        (26 +
          this.alphabet.indexOf(enMessage[i]) -
          this.alphabet.indexOf(generatedKey[i])) %
        26;
      res.push(this.alphabet[symbolIndex]);
    }
    return this.mode === "direct" ? res.join("") : res.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
