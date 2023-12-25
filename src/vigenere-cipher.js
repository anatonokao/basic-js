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
  // constructor(mode) {
  //   // if (mode === false) this.mode = "reverse";
  //   // else this.mode = "direct";
  //   throw new NotImplementedError("Not implemented");
  //   // remove line with error and write your code here
  // }

  encrypt(message, key) {
    // if (!message || !key) throw new Error("Incorrect arguments!");
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
  decrypt(enMessage, key) {
    // if (!enMessage || !key) throw new Error("Incorrect arguments!");
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine,
};
