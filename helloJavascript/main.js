var cipher = function(str, offset) {
  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  var empty = "";

  for (char of str) {
    for (letter of letters) {
      if (char === letter) {
        var i = letters.indexOf(char);

        var ceasar = letters[(i += offset)];
        if (i < 26) {
          empty += ceasar;
        } else {
          26 - i
          empty += ceasar;
        }
      }
    }
  }
  return empty;
};

console.log(cipher("yyyy", 13));
