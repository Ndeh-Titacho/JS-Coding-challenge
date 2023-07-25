//function to find the maximum number in an array
function findMax(arr){
    var max=arr[0];
    for(var i=0;i<=arr.lenght;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
var arr=[1,2,3,4,5,8,6,10];
var max=findMax(arr);
console.log(max);