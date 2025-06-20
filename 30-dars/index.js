let obj = {
    name: "Algoritm",
    age: 20,
    child: {
        name: "Oxford",
        age: 10
    }
}

let newObj = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

Object.defineProperty(newObj.child, "name", {
    writable: false,
    configurable: false,
});

newObj.child.name = "Vali";
delete newObj.child.name;
console.log(newObj)