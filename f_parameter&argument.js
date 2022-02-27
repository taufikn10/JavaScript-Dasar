function tambah(a, b) {
  return a + b;
}
var hasil = tambah(9, 2);
console.log(hasil);

function kali(a, b) {
  return a * b;
}
var a = parseInt(prompt("masukan nilai A :"));
var b = parseInt(prompt("masukkan nilai B :"));
var hasilKali = kali(a, b);
console.log(hasilKali);

function test() {
  var hasilTest = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasilTest += arguments[i];
  }
  return hasilTest;
}

var hasilTest = test(3, 4, 5, 6);
console.log(hasilTest);
