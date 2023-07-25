function getpositive(arr){
    return arr.filter(arr=>arr.lenght>=0);
}
var arr = [,10,-3,12,5,0,1];
var arr2 = getpositive(arr);
console.log(arr2);