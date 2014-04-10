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

console.log( selectionSort([1,3,5,7,9,8,6,4,2]) );
console.log( selectionSort([1,2,3,4,5,4,3,2,1]) );