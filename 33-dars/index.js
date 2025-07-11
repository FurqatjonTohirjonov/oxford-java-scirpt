//1.
//class Soat {
//    time() {
//        let now = new Date();
//        let h = String(now.getHours()).padStart(2, "0");
//        let m = String(now.getMinutes()).padStart(2, "0");
//        let s = String(now.getSeconds()).padStart(2, "0");
//        console.log(`${h}:${m}:${s}`);
//    };
//    start(){
//        this.time();
//        setInterval(() => this.time(), 1000);
//    }
//}

//let soat = new Soat();
//soat.start();

//2.

//class Car {
//    constructor(nomi) {
//        this.nomi = nomi;
//        this.tezlik = 0;
//    }
//    gazBos() {
//       this.tezlik += 10;
//   }
//    holat() {
//        console.log(`${this.nomi} hozir ${this.tezlik} km/h tezlikda`);
//  }
//}

//class Tesla extends Car {
//    constructor(nomi) {
//        super(nomi);
//        this.batareya = 100;
//    }
//    quvvatla() {
//        this.batareya = 100;
//    }
//    gazBos() {
//        if (this.batareya > 0) {
//            this.tezlik += 10;
//            this.batareya -= 1;
//        } else {
//            console.log("Batareya tugagan!");
//       }
//   }
//    holat() {
//        console.log(`${this.nomi} hozir ${this.tezlik} km/h tezlikda. Batareya: ${this.batareya}%`);
//    }
//}

//const malibu = new Car("Malibu");
//malibu.gazBos();
//malibu.gazBos();
//malibu.holat();

//const tesla = new Tesla("Tesla");
//tesla.gazBos();
//tesla.gazBos();
//tesla.gazBos();
//tesla.holat();

//tesla.quvvatla();
//tesla.holat();