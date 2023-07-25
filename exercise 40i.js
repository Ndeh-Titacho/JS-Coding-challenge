function bubbleSort(ar) {
  var shouldSort = true;
  var length = ar.lemgth;

  while (shouldSort) {
    shouldSort = false;
    length--;

    for (var i = 0; i < length; i++) {
      var a = ar[i];
      if (a > ar[i + 1]) {
        ar[i] = ar[i + 1];
        ar[i + 1] = a;
        shouldSort = true;
      }
    }
  }
}
var ar = [23, 1000, 1, -1, 8, 3];
console.log(ar);
console.log(bubbleSort(ar));
