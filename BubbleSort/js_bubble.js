// In place method
function bubbleSort(arr) {
	var sorted = false;
	
	while (!sorted) {
		sorted = true;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				sorted = false;
			}
		}	
	}
	
	return arr;
}

console.log( bubbleSort([1,3,5,7,9,8,6,4,2]) );
console.log( bubbleSort([1,2,3,4,5,1,2,3,4]) );