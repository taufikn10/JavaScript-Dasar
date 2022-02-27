/*
var star = "";

for (var i = 0; i < 7; i++) {
  for (var j = 0; j < 10; j++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);
*/
var star = "";

for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);
