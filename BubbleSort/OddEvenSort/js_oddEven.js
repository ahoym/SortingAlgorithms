function oddEvenSort(arr) {
	var sorted = false;
	
	while (!sorted) {
		sorted = true;
		
		for (var i = 0; i < arr.length - 1; i += 2) {
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				sorted = false;
			}
		}
		
		for (var i = 1; i < arr.length - 1; i += 2) {
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				sorted = false;
			}
		}
	}
	
	return arr;
};

console.log( oddEvenSort( [1,3,5,7,9,8,6,4,2,0] ) );
console.log( oddEvenSort( [9,8,7,6,5,4,3,2,1,0] ) );
console.log( oddEvenSort( [1,2,3,4,5,0,4,3,2,1] ) );