//                                   2.setTimeout va setInterval

//setTimeout(() => {
//    console.log("salom");
//}, 1000);

//==============================================================

//setTimeout(() => {
//    console.log("Tohirjonov");
//}, 1000)

//setTimeout(() => {
//    console.log("Furqatjon");
//}, 2000);

//==============================================================

//setTimeout(() => {
//    let num = prompt(`Tug'ulgan yilingizni kiriting:`);

//    if (!num || isNaN(num)) {
//        alert(`Iltimos, to'g'ri yil kiriting!`);
//        return;
//    }

//   let age = 2025 - parseInt(num);

//    if (age >= 15) {
//        alert("Sizga mumkin");
//    } else {
//        alert("Sizga mumkin emas");
//    }
//}, 1000);

//==============================================================

//let i = 1;
//let timer = setInterval(() => {
//  console.log(i);
//  if (i === 10) clearInterval(timer);
//  i++;
//}, 1000);

//==============================================================

//let i = 10;
//let timer = setInterval(() => {
//  console.log(i);
//  if (i === 1) clearInterval(timer);
//  i--;
//}, 1000);

//==============================================================

//setInterval(() => {
//    let now = new Date();
//    console.log(now.toLocaleTimeString());
//}, 3000);

//==============================================================