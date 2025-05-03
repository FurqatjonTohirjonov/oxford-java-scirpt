//let user = {
//    id: 1,
//    firstName: "Eshmat",
//    surName: "Toshmatov",
//    age: 30,
//    getFullName: () => {
//        return `${this.firstName} ${this.surName}`;
//    },
//};
//console.log(user.getFullName());
//(=>) da this o‘zgarmaydi, yani user obyektini emas, tashqi (global) kontekstni ko‘rsatadi. Log da undefined chiqadi.

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    },
};
ladder.up().up().down().showStep();
//1 chiqdi.
//Bu yerda har bir metod o'zini qaytaradi, shuning uchun biz ularni zanjir qilib chiqadi.