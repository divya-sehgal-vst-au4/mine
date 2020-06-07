function add() {
	var total = 0;

	function sum(){
		if( arguments.length ){
			var arr = Array.prototype.slice.call(arguments).sort();
			total = total + arrayAdder(arr);
			return sum;
		}
		else{
			return total;
		}
	}

	if(arguments.length) {
		var arr1 = Array.prototype.slice.call(arguments).sort();
		var mytotal = arrayAdder(arr1);
		return sum(mytotal);
	}else{
		return sum();
	}

	function arrayAdder(arr){
		var x = 0;
		for (var i = 0; i < arr.length; i++) {
			x = x + arr[i];
		};
		return x;
	}
}

console.log(add(2)(3)()) 
console.log(add(2,3,2)()) 
console.log(add(2,3)(1)(1)(1,2,3)())
