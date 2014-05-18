function selectionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		var currentMin = i;
		
		for (var j = i; j < arr.length; j++) {
			if (arr[j] < arr[currentMin]) currentMin = j;
		}
		
		var temp = arr[i];
		arr[i] = arr[currentMin];
		arr[currentMin] = temp;
	}
	
	return arr;
};