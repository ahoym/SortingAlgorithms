function merge(left, right) {
	var sortedArr = [];
	
	while (left.length > 0 && right.length > 0) {
		sortedArr.push( left[0] > right[0] ? right.shift() : left.shift() );
	}
	
	return sortedArr.concat(left).concat(right);
};

function mergeSort(arr) {
	if (arr.length < 2) return arr;
	
	var mid = Math.floor(arr.length / 2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid);
	
	return merge( mergeSort(left), mergeSort(right) );
};
