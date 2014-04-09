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

console.log( mergeSort([1,3,5,7,9,8,6,4,2]) );
console.log( mergeSort([1,2,3,4,5,4,3,2,1]) );
console.log( mergeSort([0,9,5,1,0,4,2,6,4]) );