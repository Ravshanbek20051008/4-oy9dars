// forEach metodiga oid masalalar
// 1-masala
// let son = [12, 2, 1, 3, 4, 5, 6, 78, 87654, 0];
// son.forEach(function (value) {
//   console.log(value * 2);
// });
// 2-masala
// let davlatlar = ["rassiya", "xitoy", "urugvay"];
// let result;
// davlatlar.forEach(function (value) {
//   console.log(value.toUpperCase());
// });
// 3-masala
// let son = [12, 2, 1, 3, 4, 5, 6, 78, 87654, 0];
// son.forEach(function (value) {
//   console.log(value + 5);
// });
// 4-masala
// let students = ["Ali: 85", "Vali :92 ", "Hasan: 78 "];
// students.forEach(function (value) {
//   console.log(value);
// });

// Map metodiga oid masalalar
// 1-masala
// let numbers = [1, 2, 3, 4];
// let result = numbers.map(function (value) {
//   return value * 2;
// });
// console.log(result);
// 2-masala
// let words = ["apple", "banana", "cherry"];

// function kattalashtirish(words) {
//   let result = [];
//   words.map(function (value) {
//     result.push(value.toUpperCase());
//   });
//   return result;
// }
// console.log(kattalashtirish(words));
// 3-masala
// let sonlar = [12, 1, 14, 1, 55, 6, 57];
// function sonqoshish(sonlar) {
//   let result = [];
//   sonlar.map(function (value) {
//     result.push(value + 5);
//   });
//   return result;
// }
// console.log(sonqoshish(sonlar));
// 4-masala
// let students = ["Ali: 85", "Vali :92 ", "Hasan: 78 "];
// function talaba(students) {
//   let result = [];
//   students.map(function (value) {
//     result.push(value);
//   });
//   return result;
// }
// console.log(talaba(students));

// filter metodiga oid masalalar
// 1-masala

// let numbers = [1, 2, 3, 4, 5, 6];
// function juftlari(numbers) {
//   let result = [];
//   numbers.filter(function (value) {
//     if (value % 2 == 0) {
//       result.push(value);
//     }
//   });
//   return result;
// }
// console.log(juftlari(numbers));
// 2-masalal
// let words = ["apple", "banana", "cherry", "date"];
// function enguzunlari(words) {
//   let result = [];
//   words.filter(function (value) {
//     if (value.length > 5) {
//       result.push(value);
//     }
//   });
//   return result;
// }
// console.log(enguzunlari(words));
// 3 - masala
// let ages = [12, 17, 18, 19, 21];
// function kattalarti(ages) {
//   let result = [];
//   ages.filter(function (value) {
//     if (value > 18) {
//       result.push(value);
//     }
//   });
//   return result;
// }
// console.log(kattalarti(ages));
// 4-masalal
// const students = [
//   "name: 'Ali', grade: 85",
//   " {name: 'Vali', grade: 72",
//   "name: 'Hasan', grade: 90",
//   "  name: 'Olim', grade: 77",
// ];
// function yuqoriballilar(students) {
//   let result = [];
//   students.filter(function (value, raqam) {
//     if (value && raqam > 1) {
//       result.push(value);
//     }
//   });
//   return result;
// }
// console.log(yuqoriballilar(students));

// find metodiga oid masalalar
// 1-masala
// const numbers = [4, 9, 11, 2, 18];
// function raqam(numbers) {
//   let result = numbers.find(function (element) {
//     return element > 10;
//   });
//   return result;
// }
// console.log(raqam(numbers));
// 2-masalal
// const students = [
//   "name: Ali, grade: 80",
//   " name: Vali, grade: 90",
//   " name: Hasan, grade: 78",
//   " name: Olim, grade: 85",
// ];
// function raqam(students) {
//   let result = students.find(function (value, a) {
//     return value && a > 5;
//   });
//   return result;
// }
// console.log(raqam(students));

// some/every metodiga oid masalalar
// 1-masala
// const numbers = [-1, -2, 3, -4];
// function musbat(number) {
//   let result = [];
//   number.some(function (value) {
//     if (value > 0) {
//       result.push(value);
//     }
//   });
//   return result;
// }
// console.log(musbat(numbers));
// 2-masalal
// const words = ["cat", "dog", "elephant"];
// function hayvonlare(words) {
//   let result = [];
//   words.some(function (v) {
//     if (v.length > 5) {
//       result.push(v);
//     }
//   });
//   return result;
// }
// console.log(hayvonlare(words));
// 2-ususl
// const words = ["cat", "dog", "elephant"];
// function hayvonlare(words) {
//   let result = [];
//   words.some(function (v) {
//     result.push(v.length > 5);
//   });
//   return result;
// }
// console.log(hayvonlare(words));

//  every

// 1-masalla
// const numbers = [1, 2, 3, 4];
// function musbatlari(number) {
//   let result = [];
//   number.every(function (va) {
//     result.push(va > 0);
//   });
//   return result;
// }
// console.log(musbatlari(numbers));
// 2-masala

// const students = [
//   "  { name: Ali, grade: 60 }",
//   " { name: Vali, grade: 70 }",
//   "{ name: Hasan, grade: 80 }",
// ];

// function talabalar(students) {
//   let result = [];
//   students.every(function (value) {
//     result.push(value.length > 5);
//   });
//   return result;
// }
// console.log(talabalar(students));

// String metodlariga oid masalalar
// 1-masala

// const text = "Hello";
// console.log(text.charAt(3));
// 2-masala
// let text = "salom";
// console.log(text.charCodeAt(2));
// 3-masala
// let nom1 = "hello";
// let nom2 = "haiir";
// let result = nom1.concat(nom2);
// console.log(result);
// 4-masala
// const text = "Hello, world!";
// function textt(text) {
//   let result = text.includes("world");
//   return result;
// }
// console.log(textt(text));
// 5-masala
// let str = "assalom";
// function tugash(str) {
//   let result = str.endsWith("m");
//   return result;
// }
// console.log(tugash(str));
// 6-masala
// let str = "assalom";
// function tugash(str) {
//   let result = str.indexOf("a");
//   return result;
// }
// console.log(tugash(str));
// 7-masala
// let str = "assalom";
// function tugash(str) {
//   let result = str.lastIndexOf("a");
//   return result;
// }
// console.log(tugash(str));

// 8-masala
// let arr = "saloma12 qalesan32 433324";
// function raqam(arr) {
//   let result = arr.match(number);
//   return result;
// }
// console.log(raqam(arr));
// ishlolmadim

// 9-masala
// let arr = "salom";
// function takoroash(arr) {
//   let result = arr.repeat(3);
//   return result;
// }
// console.log(takoroash(arr));
// 10-masala
// const text = "Hello, world!";
// function soz(text) {
//   let result = text.replace("Hello", "hii");
//   return result;
// }
// console.log(soz(text));
// 11-masala
// const text = "Hello, world!";
// function sozaxtarish(text) {
//   let result = text.search("world");
//   return result;
// }
// console.log(sozaxtarish(text));
// 12-masala
// const text = "Hello, world!";
// function kesibolish(text) {
//   let result = text.slice(7, 12);
//   return result;
// }
// console.log(kesibolish(text));
// 13-masala
// const text = "Hello, world!";
// function boshliqboyicha(text) {
//   let result = text.split(",");
//   return result;
// }
// console.log(boshliqboyicha(text));
// 14-masla
// const salom = "assalomu aleykum";
// function boshlanish(salom) {
//   let result = salom.startsWith("assalom");
//   return result;
// }
// console.log(boshlanish(salom));
// 15-masala
// const salom = "assalomu aleykum";
// function ajratibolish(salom) {
//   let result = salom.substr(8, 7);
//   return result;
// }
// console.log(ajratibolish(salom));
// 16-masala
// const salom = "assalomu aleykum";
// function ajratibolish(salom) {
//   let result = salom.substring(0, 7);
//   return result;
// }
// console.log(ajratibolish(salom));
// 17-masala
// const text = "ASSALOMU ALEYKUM";
// function ajratibolish(text) {
//   let result = text.toLowerCase();
//   return result;
// }
// console.log(ajratibolish(text));
// 18-masala
// const salom = "assalomu aleykum";
// function ajratibolish(salom) {
//   let result = salom.toUpperCase();
//   return result;
// }
// console.log(ajratibolish(salom));
// 19-masala
// const salom = "  assalomu aleykum! ";
// function ajratibolish(salom) {
//   let result = salom.trim();
//   return result;
// }
// console.log(ajratibolish(salom));
// 20-masala
// const salom = "  assalomu aleykum";
// function ajratibolish(salom) {
//   let result = salom.trimStart();
//   return result;
// }
// console.log(ajratibolish(salom));
// 21-masala
const salom = "assalomu aleykum  ";
function ajratibolish(salom) {
  let result = salom.trimEnd();
  return result;
}
console.log(ajratibolish(salom));
