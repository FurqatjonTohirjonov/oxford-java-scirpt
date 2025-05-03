let num = [2, 4, 8, 16];
let n = num.length;

let y = 0;
let i = 2;
while (i < n) {
    y += num[i];
    i++;
}
let ortaArifmetik = y / n;
console.log(ortaArifmetik);

//============================================

//let k = 1;
//i = 3;
//while (i < n) {
//    k *= num[i];
//    i++;
//}
//let ortaGeometrik = Math.pow(k, 1 / n);
//console.log(ortaGeometrik);