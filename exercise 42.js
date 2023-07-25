//function to determine if two circles intersect
function circlesIntersection(x1, y1, r1, x2, y2, r2) {
  var d = distance(x1, y1, x2, y2);
  return d <= r1 + r2;
}
function distance(x1, y1, x2, y2) {
  let l1 = y2 - y1;
  let l2 = x2 - x1;

  return Math.sqrt(l1 * l1 + l2 * l2);
}

console.log(circlesIntersection(100, 100, 50, 400, 300, 25));
