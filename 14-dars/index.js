//                                                1-vazifa

//function check(str1, str2) {
//    for (let i = 0; i < str2.length; i++) {
//        let found = false;
//        for (let j = 0; j < str1.length; j++) {
//            if (str2[i] === str1[j]) {
//                found = true;
//                break;
//            }
//        }
//        if (!found) {
//            return false;
//        }
//    }
//    return true;
//}

//console.log(check("webbrain academy", "acsa"));

//function getCount(str) {
//    let result = {};
//   for (let i = 0; i < str.length; i++) {
//        let char = str[i];
//        if (result[char]) {
//            result[char]++;
//        } else {
//            result[char] = 1;
//        }
//    }
//    return result;
//}

//console.log(getCount("webbrain"));

//function truncate(str, n) {
//    let result = "";
//    for (let i = 0; i < n && i < str.length; i++) {
//        result += str[i];
//    }
//    return result;
//}

//console.log(truncate("webbrain academy", 5))

//function getCurrency(str) {
//   let number = "";
//    for (let i = 0; i < str.length; i++) {
//        if (str[i] >= "0" && str[i] <= "9") {
//            number += str[i];
//        }
//    }
//    return Number(number);
//}

//console.log(getCurrency("$1200"));

//function analyzeString(str) {
//    let result = { letter: 0, numbers: 0, char: 0 };
//    for (let i = 0; i < str.length; i++) {
//        let ch = str[i];
//        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
//           result.letter++;
//        } else if (ch >= '0' && ch <= '9') {
//            result.numbers++;
//        } else {
//            result.char++;
//        }
//    }
//    return result;
//}

//console.log(analyzeString("webbr@!n_2022"));

//function capitalize(str) {
//    let words = str.split(" ");
//    let result = "";

//    for (let i = 0; i < words.length; i++) {
//        let word = words[i];
//        if (word.length > 0) {
//            result += word[0].toUpperCase() + word.slice(1);
//        }
//        if (i < words.length - 1) {
//            result += " ";
//        }
//    }

//    return result;
//}

//console.log(capitalize("webbrain academy")); 

//function t(a, b) {
//    if (a.length !== b.length) return false;
//    for (let c of a) b = b.replace(c, '');
//    return b.length === 0;
//}

//console.log(t("ABC", "BCA"));
//console.log(t("ABC", "BCD"));