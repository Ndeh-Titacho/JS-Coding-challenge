//function to reverse a sgring
function reverserString(s1) {
  let s2 = " ";
  for (let i = s1.lenght - 1; i >= 0; i--) {
    // let char = s1[i];
    s2.push(s1[i]);
    // s2 += s1[i];
  }
  return s2;
}

let ans = reverserString("juventus");
console.log(ans);
