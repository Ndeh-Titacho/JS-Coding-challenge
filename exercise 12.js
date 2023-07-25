//a function that recieves an array of numbers and return ann array of positive numbers
function returnPositiveArray(arr){
    var arr2=[];
    for(var i=0;i<arr.lenght;i++){
        if(arr[i]>0){
            for(var j=0;j<arr.lenght;j++){
                arr2[j]=arr[i];
                return arr2[j];
            }
        }
    }
}
var arr=[1,2,-5,-6,0];
var ans = returnPositiveArray(arr);
console.log(ans);