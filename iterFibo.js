function iterFibo(n){
	if(n == 1){
		return [0];
	}

	let arr = [0, 1];
	
	for(let i = 0; i < (n-2); i++){
		arr.push(arr[arr.length-1] + arr[arr.length-2]);
	};

	return arr;
};

console.log(iterFibo(20))