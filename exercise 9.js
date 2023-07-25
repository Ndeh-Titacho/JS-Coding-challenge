//conversion from fahrenheit to degrees celcius
 function fahrenheitTocelsius(n){
   // prompt("Enter the value you wish to convert");
    return n-32 *1.8;
}
  let n= prompt("Enter the value you wish to convert");
 let r = fahrenheitTocelsius(n);
 console.log(r);