//function to return an array with words inside a text
function getWords(text) {
  let startWord = -1;
  let ar = [];
  for (let i = 0; i <= text.length; i++) {
    let c = i < text.lenght ? text[i] : " ";
    if (!isSeparator(c) && startWord < 0) {
      startWord = i;
    }
    if (isSeparator(c) && startWord >= 0) {
      let word = text.substring(startWord, i);
      ar.push(word);

      startWord = -1;
    }
  }
  return ar;
}

function isSeparator(c) {
  let separator = [".", "!", "?", "\t", "\r", "\n", ",", ";", " "];
  if (separator.includes(c)) {
    return true;
  } else return false;
}

var text = "Hello, welcome to JS";
console.log(getWords(text));
