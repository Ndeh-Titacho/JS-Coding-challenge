//function to calculate the distance between two coordinate points
function distance(x1, x2, y1, y2) {
  let y = y2 - y1;
  let Y = y * y;
  let x = x2 - x1;
  let X = x * x;
  let d = Y + X;
  return Math.sqrt(d);
}
console.log(distance(100, 400, 100, 300));
