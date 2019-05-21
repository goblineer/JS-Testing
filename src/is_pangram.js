Pangram = function(str) {
  this.str = str
}

Pangram.prototype.isPangram = function() {
let letters = this.str.toLowerCase();
const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
return alphabet.every((char) => letters.includes(char));
}

module.exports = Pangram;