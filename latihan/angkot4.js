let jumlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot = 1; noAngkot <= jumlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No." + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot === 8) {
    console.log("Angkot No " + noAngkot + " sedang Lembur.");
  } else {
    console.log("Angkot No." + noAngkot + " sedang tidak beroperasi.");
  }
}
