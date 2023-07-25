//function to return in an array, the prime numbers beginning from StartAt
function arprime(StartAt){
    let ar=[];
    for(let i=StartAt;i<=100;i++){
        for(let j=i;j<=i;j++){
            if(i==2){
                ar.push(i);
            }
            if(i%j==0){
                break;
            }
        }
        if(i%j!=0){
            ar.push(i);
        }
    }
    return ar;
}
console.log(arprime(2));