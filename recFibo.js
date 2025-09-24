function recFibo(n, arr = []){
    n--;
    if(n > 0){
        recFibo(n, arr);
    };

    if(n < 2){
        arr.push(n);
        return arr;
    };

    if(arr.length >= 2){
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
    };

    return arr
}

console.log(recFibo(20))