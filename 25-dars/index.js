//let a = [1, 2, 3, 4, 5];
//let b = [2, 4];

//let result = a.filter(item => !b.includes(item));
//console.log(result);

//===================================================================

//let arr = [5, 8, 6, 3, 4];

//let juft = [];
//let toq = [];
//let count = 0;
//let count2 = 0;
//let newArr = [];
//arr.forEach((value) => {
//    value % 2 ? toq.push(value) : juft.push(value);
//});

//toq = toq.sort((a, b) => a - b);

//arr.forEach((value, index) => {
//    if (value % 2) {
//        newArr.push(toq[count])
//        count++;
//    } else {
//        newArr.push(juft[count2])
//        count2++;
//    }
//})

//console.log(newArr);

//===================================================================

//let arr = [1, 1, 2, 3, 4, 4, 5, 6, 6];
//let newArr = arr.filter((value, index) => {
//    if (arr.indexOf(value) === arr.lastIndexOf(value)) return value;
//});

//console.log(newArr);

//===================================================================

//let a = ["a", "b", "d", "e", "f"];
//let b = ["a", "b", "c", "d", "e", "f"]

//let arr = [];

//if (a.length < b.length) {
//    for (let value of b) {
//        if (!a.includes(value)) arr.push(value);
//    }
//}else{
//    for (let value of a) {
//        if (!b.includes(value)) arr.push(value);
//    }
//}

//console.log(arr);

//===================================================================

let str = "Tez jigarrang tulki dangasa it ustidan sakrab o'tadi"

let arr = str.split(" ");
let newArr = [];
arr.forEach((value) => {
    for (let letter of value) {
        if (value.indexOf(letter) === value.lastIndexOf(letter)) newStr += letter;
        else {
            newStr = "";
            break;
        }
    }
    if (newStr.lenght) newArr.push(newStr);
})