function displayprime(){
    for(var i=2;i<=100;i++){
        for(var j=2;j<i;j++){
            if(i==2){
                return i;
            }
            if(i%j==0){
                break;
            }
        }
        if(i%j!=0){
            console.log(i);
        }
    }
}
displayprime();
