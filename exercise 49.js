//function to shuffle an array of strings
function shuffle(ar) {
  for (let i = ar.length; i > 0; i--) {
    let j = randomInt(0, i - 1);
    let t = ar[i];
    ar[i] = ar[j];
    ar[j] = t;
  }
  return ar;
}

function randomInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ar = ["Mah", "Jacy", "Junior", "Awazi"];
console.log(shuffle(ar));
