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