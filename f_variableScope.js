/*
var i = 2;

if (i % 2 == 0) {
  var genap = true;
}

if (genap) {
  console.log("genap");
}
*/

// global scope / window scope
var a = 1;

function test() {
  // jika name sama a disebut name conflict
  var b = 2;
  console.log(b);
}

test();
