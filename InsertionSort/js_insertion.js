function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var currentVal = arr[i];
		var j = i - 1;
		
		while (j >= 0 && arr[j] > currentVal) {
			arr[j + 1] = arr[j]
			j--;
		}
		
		arr[j + 1] = currentVal;
	}
	
	return arr;
};

console.log( insertionSort([1,3,5,7,9,8,6,4,2]) );
console.log( insertionSort([1,2,3,4,5,4,3,2,1]) );