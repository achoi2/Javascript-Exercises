// var steamrollArray = function(arr) {
//     var newArr  = [];
//     recurse(arr, newArr);
//     return newArr
// }
// var recurse = function(arr, newArr) {
//     arr.forEach(function (element) {
//         if (Array.isArray(element) === true) {
//             recurse(element, newArr);
//         } else {
//             newArr.push(element)
//         }
//     });
// }

// console.log(steamrollArray([1, [2], [3, [[4]]]]));

// var findElement = function(arr, funct) {
//     for (var element of arr) {
//         var values = [funct(element)];
//         console.log(values)
//         for (var value of values) {
//             if (value === true) {
//                 return element
//             } else {
//                 return false;
//             }
//         }
//     }
// };

// var findElement = function(arr, funct) {
//     for (var element of arr) {
//         var values = [funct(element)];
//         for (var value of values) {
//             if (value === true) {
//                 return element;
//             } else {
//                 return value;
//             }
//         }
//     },
// };

// console.log(
//     findElement(['Jim', 'Indian', 'Marsh', 'Glitch'], function(str) {
//         return str.indexOf('itch') !== -1;
//     })
// );
