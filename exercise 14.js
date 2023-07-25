//print the first 10 fibonacci numbers without recursion
var F0=0;
var F1=1;
console.log(F0);
console.log(F1);
for(var i=2;i<10;i++){
    Fi=F0+F1;
    console.log(Fi);
    F0=F1;
    F1=Fi;
}