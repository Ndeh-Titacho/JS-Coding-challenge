//function that will extract all the elements of a specified coloumn in a 2D array and add into an array
function extractCol(ar, col) {
  var ar1 = [];
  for (let i = 0; i < ar.length; i++) {
    if (ar[i].length > col) {
      // to check if that specific position in ar  has a value
      ar1.push(ar[i][col]);
    }
  }
  return ar1;
}
let ar = [
  ["Mah", 120],
  ["Junior", 127],
  ["Jacy", 130],
];
let col = 0;
console.log(extractCol(ar, col));
console.log(extractCol(ar, 1));
