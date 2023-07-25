function countWords(text) {
  let words = 0;
  if (text.length > 0 && isSeparator(text[0]) == false) {
    words++;
  }
  for (let i = 1; i <= text.length; i++) {
    let currchar = text[i];
    let prevchar = text[i - 1];
    if (!isSeparator(currchar) && isSeparator(prevchar)) {
      words++;
    }
  }
  return words;
}

function isSeparator(c) {
  let separator = [".", "!", "?", "\t", "\r", "\n", ",", ";", " "];
  if (separator.includes(c)) {
    return true;
  } else return false;
}

console.log(countWords("javascript is the best"));
console.log(countWords(""));
