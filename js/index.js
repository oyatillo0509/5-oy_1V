// 1-masala

// function str_m(words) {
//   const new_a = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length >= 5) {
//       new_a.push(words[i]);
//     }
//   }

//   const res = new_a.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

//   return res;
// }

// console.log(str_m(["apple", "banana", "cherry", "nok", "olma"]));

// 2-masala

// function student_t(students) {
//   let std = null;
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].age > 20) {
//       std = students[i];
//       break;
//     }
//   }

//   if (std) {
//     return std.name.toUpperCase();
//   }

//   return std;
// }

// console.log(
//   student_t([
//     { name: "Ali", age: 19 },
//     { name: "Bobo", age: 21 },
//     { name: "laji", age: 22 },
//     { name: "Dovlat", age: 18 },
//   ])
// );

// 3-masala

// function sena(prices) {
//   let new_a = [];
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] > 100) {
//       new_a.push(prices[i]);
//     }
//   }

//   let res = 0;
//   for (let i = 0; i < new_a.length; i++) {
//     res += new_a[i];
//   }

//   return res;
// }

// console.log(sena([50, 150, 200, 80, 120]));

// 4-masala

// function tekshir(arr) {
//   let musbat = true;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//       musbat = false;
//       break;
//     }
//   }

//   if (musbat) {
//     console.log("Barchasi musbat");
//   } else {
//     console.log("Musbat bo'lmagan sonlar bor");
//   }
// }
// console.log(tekshir([1, -2, 3, 4, 5]));

// 5-masala

// function kv_m(arr) {
//   let new_a = [];
//   arr.forEach(function (element) {
//     new_a.push(element * element);
//   });

//   return new_a;
// }

// console.log(kv_m([1, 2, 3, 4, 5]));

// 6-masala

// map`, `filter`, va `reduce` metodlarini birgalikda ishlatish
// Berilgan xodimlarning maoshlarini o'z ichiga olgan massivdan faqat 2000 dan kam bo'lmagan maoshlarni tanlab, ularni 10% ko'paytirib, barcha xodimlarning yangi umumiy maoshini hisoblaydigan funksiyani yozing.

// ishlay olmadim qiyin ekan

// 7-masala

// chiqara olmadim

// Yozuvlarga oid.

// 1-masala

// function str_m(str) {
//   return str.toUpperCase();
// }

// console.log(str_m("Oyatillo Abdulhafizov Abduhalil o'g'li"));

// 2-masala

// function str_m(str, substring) {
//   return str.includes(substring);
// }
// console.log(str_m("Oyatillo Abdulhafizov Abduhal o'g'li"));

// 3-masala

// function str_m(str) {
//   let res = str.split("JavaScript").join("JS");
//   return res;
// }
// console.log(
//   str_m(
//     "biz hozirgi kunda JavaScriptni o'rganyabmiz, JavaScript websiteda ishlatiladi"
//   )
// );

// 4-masala

// function str_m(str) {
//   let new_a = str.split(" ");

//   let tes = new_a.reverse();

//   let res = tes.join(" ");

//   return res;
// }
// console.log(
//   str_m(
//     "biz hozirgi kunda JavaScriptni o'rganyabmiz, JavaScript websiteda ishlatiladi"
//   )
// );

// 5-masala

// function str_m(str) {
//   return str.trim();
// }
// console.log(str_m("     Oyatillo     "));
 
