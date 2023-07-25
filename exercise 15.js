//function that will find the nth fibonacci number using recursion
function getFibonacci(n){
    if(n==0){
        console.log(" Fibonacci = 0");
    }
    else if(n==1){
        console.log(" Fibonacci = 1");
    }
    else if(n>=2){
        var f= (n-1)+(n-2);
        return +"Fibonacci of"+ n + "=" + f;
        //console.log(F);
    }
}
var ans=getFibonacci(2);
console.log(ans);
