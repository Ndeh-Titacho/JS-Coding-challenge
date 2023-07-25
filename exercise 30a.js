//function to add two indefinte sized numbers
function addIndefinitenumbers(num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;

  if (len1 < len2) {
    [num1, num2] = [num2, num1];
  }

  num2 = num2.padStart(len1, "0");
  let carry = 0;
  let result = [];
  for (let i = len1 - 1; i >= 0; i--) {
    const digitSum = Number(num1[i]) + Number(num2[i]) + carry;
    carry = Math.floor(digitSum / 10);
    result.unshift(digitSum % 10);
  }

  if (carry) {
    result.unshift(carry);
  }

  return result.join("");
}

const num1 = "123455";
const num2 = "987654";
const sum = addIndefinitenumbers(num1, num2);
console.log(sum);
