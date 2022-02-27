let jumlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot = 1; noAngkot <= jumlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log("Angkot No." + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot No " + noAngkot + " sedang Lembur.");
  } else {
    console.log("Angkot No." + noAngkot + " sedang tidak beroperasi.");
  }
}
