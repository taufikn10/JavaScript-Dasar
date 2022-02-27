// this -> == window
/*
var a = 10;
console.log(window.a);
*/

// Membuat object

// cara 1 -> function declaration
/*
function halo() {
  console.log(this);
  console.log("halo");
}
this.halo();
*/
// this mengembalikan object global

// cara 2 -> object literal
/*
let obj = { a: 10, nama: "Taufik Nurrahman" };
obj.halo = function () {
  console.log(this);
  console.log("Halo");
};
obj.halo();
*/
// this mengembalikan object yang bersangkutan

// cara 3 - constructor
/**/
function Halo() {
  console.log(this);
  console.log("Haloo");
}
let obj1 = new Halo();
let obj2 = new Halo();
// this mengembalikan object yang baru dibuat
