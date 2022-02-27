var tanya = true;

while (tanya) {
  // Menangkap pilihan player
  var player = prompt("Game SUIT JAWA \nPilih: gajah, semut, orang");

  // Menangkap pilihan Komputer
  // Membangkitkan bilangan komputer
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  console.log(comp);

  var hasil = "";
  // Menentukan rules gamenya
  if (player == comp) {
    hasil = "SERI";
  } else if (player == "gajah") {
    // if (comp == "orang") {
    //   hasil = "MENANG";
    // } else {
    //   hasil = "KALAH";
    // }
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (player == "orang") {
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (player == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "player salah input";
  }

  // Menampilkan hasil
  alert(
    "Kamu memilih : " +
      player +
      " dan komputer memilih : " +
      comp +
      "\nHasilnya adalah : Kamu " +
      hasil
  );
  tanya = confirm("lagi?");
}

alert("Terimakasih Sudah Bermain");
