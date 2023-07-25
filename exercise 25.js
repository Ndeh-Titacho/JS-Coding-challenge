//function to exclusively merge two arrays
function exclusiveMerge(a1, a2) {
  let ar = [];
  for (let el of a1) {
    if (!a2.includes(el)) {
      ar.push(el);
    }
    return ar;
  }
  for (let el of a2) {
    if (!a1.includes(el)) {
      ar.push(el);
    }
  }
  return ar;
}
let a1 = [1, 2, 5, 8, 2];
let a2 = [3, 4, 5, 6, 7, 8];
let ans = exclusiveMerge(a1, a2);
console.log(ans);
