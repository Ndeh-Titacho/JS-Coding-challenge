//print the sum of numbers in an array
function sumArr(arr){
    var sum=0;
    for(var i=0;i<=arr.lenght;i++){
        sum+=arr[i];
        
    }
    return sum;
}
    var arr = [1,3,7,8,3,8,42];
    var sum = sumArr(arr);
    console.log(sum);
