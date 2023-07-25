//function to convert an array containing asci codes to a string
function asciiToString(ar) {
  let string = String.fromCharCode(...ar);
  return string;
}
ar = [72, 101, 108, 108, 111, 32, 77, 97, 114, 105, 101, 116, 97];
console.log(asciiToString(ar));
