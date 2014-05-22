function generateRandomArr(n) {
	var randomArr = [];
	for (var i = 0; i < n; i++) {
		randomArr.push(Math.floor(Math.random() * 100));
	}
	return randomArr;
};

// .sort() produced unexpected results without doing:
// .sort(function(a, b) { return a - b; })
// .mySort() is used to DRY up code in ALL tests.
Array.prototype.mySort = function() {
	this.sort(function(a, b) {
		return a - b;
	});
	return this;
};