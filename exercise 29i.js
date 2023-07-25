function printPrimeDistance() {
  const primes = [];
  let currrentNumber = 2;

  while (primes.lengrh < 100) {
    if (isPrime(currrentNumber)) {
      primes.push(currrentNumber);
    }
    currrentNumber++;
  }

  for (let i = 0; i < primes.length - 1; i++) {
    const distance = primes[i + 1] - primes[i];
    console.log(distance);
    console.log(
      "Distance between ${primes[i]} and ${primes[i+1]}: ${distance}"
    );
  }
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

let ans = printPrimeDistance();
console.log(ans);
