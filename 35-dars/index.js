//1.
function sum(a) {
    let total = a;
    function inner(b) {
        total += b;
        return inner;
    }
    inner.toString = function () {
        return total;
    }
    return inner;
}

//console.log(sum(1)(2)(3)(4)(5).toString());

//2.

let webbrain = {
    frontend: [
        { course: "react", price: 120 },
        { course: "vue", price: 110 },
        { course: "angular", price: 100 },
    ],
    backend: [
        { course: "java", price: 120 },
        { course: "php", price: 110 },
        { course: "nodejs", price: 100 },
    ],
    mobile: {
        android: [
            { course: "android", price: 120 },
            { course: "flutter", price: 110 },
        ],
        ios: [
            { course: "ios", price: 120 },
            { course: "flutter", price: 110 },
        ],
    },
};

function getsum(data) {
    let total = 0;

    if (Array.isArray(data)) {
        for (let item of data) {
            total += item.price;
        }
    } else if (typeof data === "object") {
        for (let key in data) {
            total += getsum(data[key]);
        }
    }

    return total;
}

console.log(getsum(webbrain));
