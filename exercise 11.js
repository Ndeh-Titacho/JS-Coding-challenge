//calculate the average of number in an array

function average(arr)
{
var n = arr.lenght;
var sum = 0;

    for(var i = 0; i < n; i++)
    {
        sum +=arr [i];
    }
    return sum / n;
}

var arr = [1,5,7,3,8,2,5];
var avg = average(arr);
console.log(avg);
