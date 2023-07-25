//function to clone an array
function copyArray(ar) {
  let ar1 = [];
  for (let i = 0; i < ar.length; i++) {
    let el = ar[i];
    if (Array.isArray(el)) {
      el = copyArray(el);
    }
    ar1.push(el);
  }
  return ar1;
}
let ar = [1, 2, 4, [5, 5], [[3, 2], 35, 4], 7];
console.log(copyArray(ar));
