function getpositive(arr){
    var arr2=[];
    for(var temp of arr){
        if(temp>=0){
            arr2.push(temp);
        }
    }
    return arr2;
}
var arr = [-5,10,-3,12,-9,5,90,0,1];
var arr2 = getpositive(arr);
console.log(arr2);