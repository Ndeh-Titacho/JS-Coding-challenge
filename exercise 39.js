//implementation of the ceaser cypher
function decrypt(msg, key) {
  return encrypt(msg, key * -1);
}

function encrypt(msg, key) {
  let encMsg = "";
  for (let i = 0; i <= msg.length; i++) {
    let code = msg.charCodeAt(i);
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    }
    encMsg += String.fromCharCode(code);
  }
  return encMsg;
}

function mod(n, p) {
  if (n < 0) n = p - (Math.abs(n) % p);
  return n % p;
}
let text = "I LOVE JaVASCRIPT";
let textdec = decrypt(text, 13);
let textenc = encrypt(text, 13);
console.log(text);
console.log(textdec);
console.log(textenc);
