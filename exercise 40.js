//function to implement bubble sort
function bubbleSort(ar) {
  let len = ar.lengtht;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      //   let temp = ar[j];
      if (ar[j] > ar[j + 1]) {
        let temp = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = temp;
      }
    }
  }
  return ar;
}
let ar = [23, 1000, 1, -1, 8, 3];
console.log(bubbleSort(ar));
