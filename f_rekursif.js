function tampilkanAngka(n) {
  if (n === 0) return;
  console.log(n);
  return tampilkanAngka(n - 1);
}

tampilkanAngka(10);

function faktorial(a) {
  if (a === 0) return 1;
  return a * faktorial(a - 1);
}

faktorial(5);
