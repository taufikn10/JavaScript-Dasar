// Alert
// alert("Halo");
// alert("Nama");
// alert("saya");
// alert("Taufik Nurrahman");

// Prompt
// var nama = prompt("Masuskan Nama");
// alert("Welcome to my website " + nama);

// confirm
// var tes = confirm("Kamu yakin");
// ternary
// tes === true ? alert("user menekan OK!") : alert("user menekan CANCEL!");
// if else
// if (tes === true) {
//   alert("user menekan OK!");
// } else {
//   alert("user menekan CANCEL!");
// }

alert("selamat Datang");
var first = true;
while (first === true) {
  var nama = prompt("Masukan Nama:");
  alert("Welcome sayang " + nama);

  first = confirm("Coba Lagi?");
}
alert("Terima Kasih");
