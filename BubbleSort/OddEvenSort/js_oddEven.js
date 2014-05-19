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