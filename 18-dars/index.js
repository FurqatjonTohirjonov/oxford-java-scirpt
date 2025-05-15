function getYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366;
    } else {
        return 365;
    }
}

let year = 2024;
console.log(year + " yili " + getYear(year) + " kundan iborat.");

let year2 = parseInt(prompt("Yilni kiriting"));
alert(year2 + " yili " + getYear(year2) + " kundan iborat.");