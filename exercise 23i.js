function reverseString(s) {
  let splitspring = s.split("");
  let reverseS = splitspring.reverse();
  let joinstring = reverseS.join("");
  return joinstring;
}
let ans = reverseString("Juventus");
console.log(ans);
