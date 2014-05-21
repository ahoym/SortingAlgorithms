function quickSortI(arr) {
	if (arr.length <= 1) return arr;
	
	var left = [];
	var eq = [];
	var right = [];
	pivot = arr[Math.floor(Math.random() * arr.length)]

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else if (arr[i] === pivot) {
			eq.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	
	return quickSortI(left).concat(eq).concat(quickSortI(right));
}

// =================== Pointer Based =======================
function partition(arr, left, right, pivotIndex) {
	var storeIndex = left;
	var pivotVal = arr[pivotIndex];
	
	arr[pivotIndex] = arr[right];
	arr[right] = pivotVal;
	
	for (var i = left; i < right; i++) {
		if (arr[i] <= pivotVal) {
			var temp = arr[i];
			arr[i] = arr[storeIndex];
			arr[storeIndex] = temp;
			
			storeIndex += 1
		}
	}
	
	var temp = arr[storeIndex];
	arr[storeIndex] = arr[right];
	arr[right] = temp;
	
	return storeIndex;
};

function quickSortII(arr, left, right) {
	if (arr.length < 2) return arr;
	
	if (left < right) {
		var pivotIndex = Math.floor((left + right + (arr.length / 2)) / 3);
		var newPivot = partition(arr, left, right, pivotIndex);
		
		quickSort(arr, left, newPivot - 1);
		quickSort(arr, newPivot + 1, right);
	}
	
	return arr;
};

console.log( quickSortI([1,3,5,7,9,8,6,4,2,0]));
console.log( quickSortI([9,8,7,6,5,4,3,2,1,0]));
console.log( quickSortI([1,2,3,4,5,0,4,3,2,1]));