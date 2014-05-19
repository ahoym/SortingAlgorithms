function cocktailSort(arr) {
	for (var i = 0; i < arr.length / 2; i++) {
		
		for (var j = i; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		
		for (var k = arr.length - i; k > (i); k--) {
			if (arr[k] < arr[k - 1]) {
				var temp = arr[k];
				arr[k] = arr[k - 1];
				arr[k - 1] = temp;
			}
		}
	}
	
	return arr
};