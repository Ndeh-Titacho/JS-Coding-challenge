function getpositive(arr){
    var arr2=[];
    var n=arr.lenght;
    for(var i=0;i<n;i++){
        var temp=arr[i];
        if(temp>=0){
            arr2[i].push(temp);
        }
        return arr2;
    }
}
var arr=[1,2,3,-5,-7,0];
var arr2 = getpositive(arr);
console.log(arr2);