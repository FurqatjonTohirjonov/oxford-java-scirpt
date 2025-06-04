//                                         1
//let a = [1, 2, 3, 4, 5];

//let b = a.filter(a => a % 2 !== 0);

//console.log(b);

//                                         2

//function sortOddKeepEven(arr) {
//    let odds = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b);
//    return arr.map(n => (n % 2 !== 0 ? odds.shift() : n));
//}

//console.log(sortOddKeepEven([5, 8, 6, 3, 4]));

//                                         4

//function findUnique(arr) {
//    return arr.filter((num, _, self) => self.indexOf(num) === self.lastIndexOf(num));
//}

//console.log(findUnique([1, 1, 2, 3, 4, 4, 5, 6, 6]));

//                                         5

//function topish(arr) {
//    let startCode = arr[0].charCodeAt(0);
//    let full = [];
//    for (let i = 0; i < arr.length + 1; i++) {
//        full.push(String.fromCharCode(startCode + i));
//   }
//    return full;
//}

//console.log(topish(["a", "b", "d", "e", "f"]));
