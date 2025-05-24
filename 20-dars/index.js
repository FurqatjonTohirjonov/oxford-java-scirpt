//let people = [
//    { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
//    { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
//    { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
//    { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
//    { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//    { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
//    { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
//    { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
//    { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
//    { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
//];
//======================================================================================================
//let uppeople = (id, arr) => {
//    people = arr.map((obj) => {
//        if (obj?.id === id) {
//            obj.firstName = "Ali", obj.lastName = "Valiyev", obj.age = 25, obj.status = "Dasturchi";
//            return obj;
//        }else return obj;
//    });
//};

//uppeople(5, people);

//console.log(people);
//======================================================================================================
//function readAction(value,arr) {
//    people = people.filter((obj) => {
//        if(obj.lastName.includes(value)) return obj;
//    })
//}
//readAction("va", people);
//console.log(people);
//======================================================================================================
//let delAction = (id) => {
//    people = people.filter((obj) => {
//        if (obj.id !== id) return obj;
//    });
//}

//delAction(4)

//console.log(people);
//======================================================================================================
//let uppeople = (id, arr) => {
//    people = arr.map((obj) => {
//        if (obj?.id === id) {
//            obj.firstName = "Gulbashakar";
//            return obj;
//        }else return obj;
//    });
//}

//uppeople(7, people);

//console.log(people);
//======================================================================================================
//let sortPeople = people.slice().sort((a, b) => {
//    return a.lastName.localeCompare(b.lastName);
//});

//console.log(sortPeople);