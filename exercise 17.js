//claculate the sum of digits of a positive interger number
function sumDigits(n){
    var s = n.toString();//returns a string as a string
    var sum=0;
    for(var char of s){
        var digit = parseInt(char);// displays the first integer in a string
        sum += digit;
    }
    return sum;
}
var sum = sumDigits(1235231);
console.log(sum);