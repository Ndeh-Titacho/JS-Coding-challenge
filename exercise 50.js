//function to get an array of random number between 1 and n
function randomArray(n) {
  let ar = [];
  for (let i = 1; i <= n; i++) {
    let i = randomInt(n, 1);
    ar.push(i);
  }
  return ar;
}
function randomInt(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomArray(10));
