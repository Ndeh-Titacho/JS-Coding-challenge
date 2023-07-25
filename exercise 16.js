//function to specify is a number is a prime number or not
function primeNumber(n){
    if(n==0){
        return false;
    }
    if(n==1){
        return true;
    }
    if(n==2){
        return true;
    }
    if(n>2){
        var p = n/2;
        for(var i=2;i<=p;i++){
            var d= n%i;
            if(d==0){
                return false;
            }
            else{
                return true;
            }
        }
    }
}
var ans = primeNumber(11);
console.log(ans);