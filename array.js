// Memanipulasi Array

// 1. menambah isi array
/*
var arr = [];
arr[0] = "Taufik";
arr[1] = "Diana";
arr[2] = "Yeni";
arr[3] = "Imelda";

console.log(arr);
*/

// 2. Menghapus isi array
/*
var arr = ["Taufik", "Diana", "Yeni", "Imelda"];
arr[1] = undefined;
console.log(arr);
*/

// 3. Menampilkan isi array
/*
var arr = ["Taufik", "Diana", "Yeni", "Imelda", "Devina"];
for (var i = 0; i < arr.length; i++) {
  console.log("Mahasiswa ke-" + (i + 1) + " " + arr[i]);
}
*/

// Method Pada Array
// 1. join merapikan penulisan
/*
var arr = ["Taufik", "Diana", "Yeni", "Imelda"];
console.log(arr.join(" - "));
*/

// 2. push & pop push menambah di akhir dan pop menghapus di akhir
/*
var arr = ["Taufik", "Diana", "Yeni", "Imelda"];
arr.push("Devina", "Ivanka");
arr.pop();
arr.pop();
console.log(arr.join(" - "));
*/

// 3. unshift & sift unshift menambah di awal dan shift menghapus di awal
/*
var arr = ["Taufik", "Diana", "Yeni", "Imelda"];
arr.unshift("Devina");
arr.shift();
console.log(arr.join(" - "));
*/

// 4. splice
// splice(indexAwal, mauhapusBerapa, elemenBaru1, elemenBaru2, ...)
/*
var arr = ["Taufik", "Yuri", "Nora", "Invanka"];
arr.splice(2, 0, "Diana", "Imelda");
arr.splice(1, 2);
console.log(arr.join(" - "));
*/

// 5. Slice
// slic (awal, akhir)
/*
var arr = ["Taufik", "Yuri", "Nora", "Invanka", "Imelda"];
var arr2 = arr.slice(2, 4);
console.log(arr.join());
console.log(arr2.join());
*/

// 6. foreach -> Perulangan
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Taufik", "Yuri", "Nora", "Invanka", "Imelda"];
/*
for (var i = 0; i < angka.length; i++) {
  console.log(angka[i]);
}
*/
/*
angka.forEach(function (e) {
  console.log(e);
});
*/
/*
nama.forEach(function (e, i) {
  console.log("Mahasiswa ke-" + (i + 1) + " " + e);
});
*/

// 7. Map -> perulangan mengembalikan nilai
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
/*
var angka2 = angka.map(function (e) {
  return e * 2;
});
console.log(angka2.join(" - "));
*/

// 8. Short -> mengurutkan
// var angka = [1, 2, 3, 4, 8, 7, 9, 5];
// console.log(angka.join(" - "));
/*
angka.sort();
console.log(angka.join(" - "));
*/
/*
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(" - "));
*/

// 9. filter -> searching banyak nilai
// var angka = [1, 2, 3, 4, 8, 7, 9, 5];
/*
var angka2 = angka.filter(function (x) {
  // return x == 9;
  return x > 5;
});
console.log(angka2.join());
*/

// 10. find -> searching 1 nilai
var angka = [1, 2, 3, 4, 8, 7, 9, 5];
var angka2 = angka.find(function (x) {
  // return x == 9;
  return x > 5;
});
console.log(angka2);
