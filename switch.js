// var angka = prompt("masukan angka :");
// var angka = parseInt(prompt("masukan angka :"));

/* 
switch (angka) {
  case "1":
    alert("anda memasukkan angka 1");
    break;
  case "2":
    alert("anda memasukkan angka 2");
    break;
  case "3":
    alert("anda memasukkan angka 3");
    break;
  default:
    alert("angka yang dimasukkan salah");
    break;
}
*/

var item = prompt(
  "masukkan nama makanan / minuman : \n (cth: daging, nasi, susu, hamburger, softdrink)"
);

switch (item) {
  case "daging":
  case "nasi":
  case "susu":
    alert("anda memasukan makanan/minuman yang SEHAT");
    break;
  case "hamburger":
  case "softdrink":
    alert("anda memasukan makanan/minuman yang TIDAK SEHAT");
    break;

  default:
    alert("anda memasukkan makanan/minuman yang tidak ada di menu");
    break;
}
