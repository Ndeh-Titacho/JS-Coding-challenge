//function to return the number of words in a text
function countWords(text) {
  let words = 0;
  let wasSeparator = true;
  for (let c of text) {
    if (isSeparator(c)) {
      wasSeparator = true;
      continue;
    } else if (wasSeparator) {
      words++;
      wasSeparator = false;
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

console.log(countWords("java script"));
console.log(countWords(" I love JS"));
