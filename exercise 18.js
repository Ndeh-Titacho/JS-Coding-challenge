function prime(){
for(var n=1;n<=99;n++){
    if(n==2){
       // return n;
        console.log(n);
    }
    else if(n>2){
        var div = n%2;
        if(div==0){
            n++;
        }
        if(div=!0){
           // return n;
            console.log(n);
        }
    }
}

}
prime();