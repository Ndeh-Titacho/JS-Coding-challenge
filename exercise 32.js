//function to capitalize the first letter of each word in a text
function capitalize(text) {
  let text2 = "";
  for (let i = 0; i <= text.length; i++) {
    let currchar = text[i];
    let prevchar = i > 0 ? text[i - 1] : " ";
    if (!isSeparator(currchar) && isSeparator(prevchar)) {
      currchar = currchar.toUpperCase();
    }
    text2 += currchar;
  }
  return text2;
}

function isSeparator(c) {
  let separator = [".", "!", "?", "\t", "\r", "\n", ",", ";", " "];
  if (separator.includes(c)) {
    return true;
  }
  return false;
}

console.log(capitalize("javascript"));
console.log(capitalize("javascript is fun"));
