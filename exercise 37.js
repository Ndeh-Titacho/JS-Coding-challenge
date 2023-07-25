//function to return the ASCII values of a string
function ascii(s) {
  let ar = [];
  for (let i = 0; i <= s.length; i++) {
    let code = s.charCodeAt(i);
    ar.push(code);
  }
  return ar;
}
const s = "Hello Marieta";
console.log(ascii(s));
