// function to print all the prime numbers from 0 to n
function printPrimeNumbers(n) {
  for (var i = 0; i <= n; i++) {
    console.log(i);
  }
  for (var i = 0; i <= 0; i++) {
    console.log(i);
    var A = i + "is" + "not" + "a" + "Prime" + "Number";
    return A;
  }

  for (var i = 1; i <= 1; i++) {
    var A = i + "is" + "not" + "a" + "Prime" + "number";
    return A;
  }

  for (var i = 2; i <= 2; i++) {
    var A = i + "is" + "a" + "Prime" + "number";
    return A;
  }
  for (var j = 3; j <= n; j++) {
    for (i = 2; i <= n; i++) {
      var d = j % i;
      if (d == 0) {
        var A = i + "is" + "not" + "a" + "Prime" + "number";
        return A;
      } else {
        var A = i + "is" + "a" + "Prime" + "Number";
        return A;
      }
    }
  }
}
var ans = printPrimeNumbers(10);
console.log(ans);
