//let obj = {
//    id: 1,
//    name: "WebBrain"
//};

//let first = true;

//for (let key in obj) {
//  if (!first) {
//        document.write(",");
//    }
//    document.write(key);
//    first = false;
//}

//let obj = {
//    id: 1,
//    name: "WebBrain"
//};

//for (let key in obj) {
//    if (typeof obj[key] === "number") {
//        console.log(key);
//    }
//}

//let obj = {
//    id: 1,
//    name: "WebBrain",
//    offline: true,
//    online: true,
//    individual: false
//};

//let result = {};

//for (let key in obj) {
//    if (typeof obj[key] === "boolean") {
//        result[key] = obj[key];
//    }
//}

//console.log(result);

//let obj = {
//    id: 1,
//    name: "WebBrain",
//    offline: true,
//    online: true,
//    individual: false
//};

//function Search(obj, str) {
//    for (let key in obj) {
//        if (obj[key] === str) {
//            console.log(key + ":" + obj[key]);
//        }
//    }
//}

//Search(obj, "WebBrain");

//let obj = {
//    id: 1,
//    name: "atirgul",
//    color: "qizil",
//    count: 10,
//    price: "10$"
//};

//function searchValue(obj, str) {
//    let first = true;
//    for (let key in obj) {
//        if (typeof obj[key] === "string" && obj[key].indexOf(str) !== -1) {
//            if (!first) {
//                document.write(",");
//            }
//            document.write(obj[key]);
//            first = false;
//        }
//    }
//}

//searchValue(obj, "i");

//let person = {
//    id: 1,
//    name: "Odil",
//    age: 78,
//    child: {
//        id: 1,
//        name: "Ali",
//        age: 48,
//        child: {
//            id: 1,
//            name: "Umar",
//            age: 20
//        }
//    }
//};

//function sumAge(obj) {
//    let total = 0;
//    while (obj) {
//        if (obj.age) {
//            total += obj.age;
//        }
//        obj = obj.child;
//    }
//    return total;
//}

//console.log(sumAge(person));

//let obj = {
//    id: 1,
//    name: 'Usmon',
//    job: 'developer'
//};

//let clone = {};

//for (let key in obj) {
//    clone[key] = obj[key];
//}

//obj.name = "Ali";

//console.log(obj);
//console.log(clone);

//let obj = {
//    id: 1,
//    name: 'Usmon',
//    age: 34,
//    year: 1990
//};

//let currentYear = new Date().getFullYear();

//if (currentYear - obj.year !== obj.age) {
//    console.log("xato malumot kiritdingiz");
//} else {
//    console.log("Malumot to'g'ri");
//}

//let obj = {
//    id: 1,
//    title: 'the best',
//    address: { street: "Farobiy", number: '34' }
//};

//function checkInnerObject(obj) {
//    for (let key in obj) {
//        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
//            return true;
//        }
//    }
//    return false;
//}

//console.log(checkInnerObject(obj));

//function Calculator() {
//    this.read = function () {
//        this.a = +prompt("son kiriting:");
//        this.b = +prompt("yana son kiriting:");
//    };

//    this.sum = function () {
//       return this.a + this.b;
//    };
//
//    this.mul = function () {
//        return this.a * this.b;
//    };
//}

//let calculator = new Calculator();
//calculator.read();

//alert("Sonlar qo'shilganda: " + calculator.sum());
//alert("Sonlar ko'paytganda: " + calculator.mul());