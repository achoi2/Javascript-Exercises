// var caseConvert = function(str, type) {
//   var str = str.toLowerCase();
//   var letters = str.split("");
//   console.log(letters)
//   var newArray = letters.map(function(letter, i) {
//     if (letters[i - 1] === " ") {
//       return letter.toUpperCase();
//     } else if (letter === " ") {
//     } else {
//       return letter;
//     }
//   });
//   return newArray.join("");
// };

// console.log(caseConvert("Hello World"));

// var caseConvert = function (str, conversionType) {
//     if (conversionType === 'camelcase') {
//         var str = str.toLowerCase();
//         var letters = str.split('');

//         var newArray = letters.map(function(letter, i) {
//         if (letters[i - 1] === ' ') {
//             return letter.toUpperCase();
//         }
//         else if (letter === ' ') {
//         }
//         else {
//             return letter;
//         }
//         });

//         return newArray.join('');
//     }
//     else if (conversionType === 'snakecase') {
//         var str = str.toLowerCase();
//         str = str.replace(/ /, '-');
//     }
//     return str;
// };

// var str = 'Hello world';

// // ---------- Test cases:----------

// var conversionType = 'camelcase';

// var conversionType = 'snakecase';

// caseConvert(str, conversionType);

var creditCard = function(nums) {
    
};

console.log(creditCard(1111111111111111));
