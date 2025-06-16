let obj = {
    name: "Ali",
    age: 20,
    city: "Toshkent"
}
function getObj() {
    console.log(this.name, this.age + 2);
}
getObj.call(obj);

getObj.apply(obj);

let boundGetObj = getObj.bind(obj);
boundGetObj();



let arr = [1, 2, 3, 4, 5];
function getArr() {
    console.log(this[3] + this[1]);
}
getArr.call(arr);

getArr.apply(arr);

let boundGetArr = getArr.bind(arr);
boundGetArr();



let user = {
    name: "Aziz",
    age: 35,
    child: {
        name: "Axmad",
        age: 10
    }
}
function getUser() {
    console.log(this.age - this.child.age);
}
getUser.call(user);

getUser.apply(user);

let boundGetUser = getUser.bind(user);
boundGetUser();



let arr2 = [11, 30, 50, 10, 30, 23];
function getArr2() {
    console.log(this[2] + this[4] * this[0] / this[3]);
}
getArr2.call(arr2);

getArr2.apply(arr2);

let boundGetArr2 = getArr2.bind(arr2);
boundGetArr2();