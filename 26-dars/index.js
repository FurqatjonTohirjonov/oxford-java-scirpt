//function fib(n) {
//    if (n === 0) return 0;
//    if (n === 1) return 1;
//    return fib(n - 1) + fib(n - 2);
//}
//console.log(fib(5));

//function sumDigits(n) {
//    if (n === 0) return 0;
//    return (n % 10) + sumDigits(Math.floor(n / 10));
//}
//console.log(sumDigits(1234));

//function generateParentheses(n) {
//    const result = [];
//
//    function backtrack(current, open, close) {
//       if (current.length === n * 2) {
//            result.push(current);
//            return;
//       }
//        if (open < n) backtrack(current + "(", open + 1, close);
//        if (close < open) backtrack(current + ")", open, close + 1);
//    }
//
//    backtrack("", 0, 0);
//    return result;
//}
//console.log(generateParentheses(3));

//function flattenObject(obj, parentKey = '', result = {}) {
//    for (const key in obj) {
//        const newKey = parentKey ? `${parentKey}.${key}` : key;
//        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
//            flattenObject(obj[key], newKey, result);
//        } else {
//            result[newKey] = obj[key];
//        }
//    }
//    return result;
//}

//const testObj = { a: 1, b: { c: 2, d: { e: 3 } } };
//console.log(flattenObject(testObj));

//const company = {
//    id: 1,
//    name: "CEO",
//    salary: 5000,
//    subordinates: [
//        {
//            id: 2,
//            name: "CTO",
//            salary: 4000,
//            subordinates: [
//                { id: 4, name: "Dev1", salary: 2000, subordinates: [] },
//                { id: 5, name: "Dev2", salary: 2500, subordinates: [] }
//            ]
//        },
//        {
//            id: 3,
//            name: "CFO",
//            salary: 4500,
//            subordinates: [
//                { id: 6, name: "Accountant", salary: 1800, subordinates: [] }
//            ]
//        }
//    ]
//};

//function Salary(employee) {
//    let total = employee.salary;
//    for (const sub of employee.subordinates) {
//        total += Salary(sub);
//    }
//    return total;
///}

//console.log(Salary(company));