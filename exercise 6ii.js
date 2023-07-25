//factorial of a numbe n
var prdt=1;
//Scannner keyboard = new keyboard(System.in);
//prompt("Please enter the number whose factorial you wish to find\n");
if(n==0||n==1){
    var factorial=1;
    console.log(+"factorial"+"="+ factorial);
}
else if(n>1){
    for(var i=n;i<=n;i--){
     prdt *= i;}
    console.log(+"Factorial"+"="+ prdt);
}
