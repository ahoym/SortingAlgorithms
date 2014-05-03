function siftDown(arr, startVal, endVal) {
	var root = startVal;
	
	while (root * 2 + 1 <= endVal) {
		var child = root * 2 + 1;		
		
		if (child + 1 <= endVal && arr[child] < arr[child + 1]) {
			child += 1;
		}

		if (arr[root] < arr[child]) {
			var temp = arr[root];
			arr[root] = arr[child];
			arr[child] = temp;
			root = child;
		} else {
			return;
		}
	}
}

function heapify(arr, count) {
	for (var i = Math.floor((count - 2) / 2); i >= 0; i--) {
		siftDown(arr, i, count - 1);
	}
}

function heapSort(arr, count) {
	heapify(arr, count);
	
	for (var i = count - 1; i > 0; i--) {
		var temp = arr[i];
		arr[i] = arr[0];
		arr[0] = temp;
		siftDown(arr, 0, i - 1);
	}
	
	return arr;
}

console.log(heapSort([1,3,5,7,9,8,6,4,2,0], 10));
console.log(heapSort([9,8,7,6,5,4,3,2,1,0], 10));
console.log(heapSort([1,2,3,4,5,0,4,3,2,1], 10));