let jumlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
}
