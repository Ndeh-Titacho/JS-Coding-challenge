function findMax(ar) {
  let max = -Infinity;
  let arrays = [];
  arrays.push(arElements);

  while (arrays.length > 0) {
    ar = arrays.pop();
    for (let i = 0; i < ar.length; i++) {
      let el = ar[i];
      el = findMax(el);
      if (Array.isArray(el)) {
        arrays.push(el);
        continue;
      }
      if (max < el) {
        max = el;
      }
    }
  }
  return max;
}

let ar = [1, 2, 4, [5, 5], [[3, 2], 35, 4], 7];
console.log(findMax(ar));
