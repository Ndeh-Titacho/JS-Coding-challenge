//function to return all the numbers that are in the first array but not in the second
let a1 = [1, 2, 3, 4, 5];
let a2 = [1, 3, 6, 7, 8];
console.log(exclusiveMerge(a1, a2));

function exclusiveMerge(a1, a2) {
  let ar = [];
  for (let el of a1) {
    if (!a2.includes(el)) {
      ar.push(el);
    }
    return ar;
  }
}
// let a1 = [1, 2, 3, 4, 5];
// let a2 = [1, 3, 6, 7, 8];
// console.log(exclusiveMerge(a1, a2));
