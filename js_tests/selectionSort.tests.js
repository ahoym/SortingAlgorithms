describe("selectionSort", function() {
	it("should sort an unsorted array", function() {
		var random_arr = [];
		for (var i = 0; i < 10; i++) {
			random_arr.push(Math.ceil(Math.random() * 100));
		}
		var cloned_random_arr = random_arr.slice(0);
		expect(selectionSort(cloned_random_arr)).toEqual(random_arr.sort(function(a,b) {return a-b}));

		expect(selectionSort([1,3,5,7,9,8,6,4,2,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);		
		expect(selectionSort([9,8,7,6,5,4,3,2,1,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);
		expect(selectionSort([1,2,3,4,5,0,4,3,2,1])).toEqual([0,1,1,2,2,3,3,4,4,5]);
	});
	
	it("should return an empty array, when given one", function() {
		expect(selectionSort([])).toEqual([]);
	});
	
	it("should handle single element arrays", function() {
		expect(selectionSort([3])).toEqual([3]);
	});
	
	it('should handle small and simple unsorted arrays', function() {
		expect(selectionSort([2,1])).toEqual([1,2]);
		expect(selectionSort([3,2,1])).toEqual([1,2,3]);
	});
	
	it('should handle large unsorted arrays', function() {
		var random_arr = [];
		for (var i = 0; i < 10000; i++) {
			random_arr.push(Math.ceil(Math.random() * 100));
		}
		var cloned_random_arr = random_arr.slice(0);
		expect(selectionSort(cloned_random_arr)).toEqual(random_arr.sort(function(a,b) {return a-b}));
	});
	
	it('should not alter an already sorted array', function() {
		expect(selectionSort([0,1,2,3,4,5,6,7,8,9])).toEqual([0,1,2,3,4,5,6,7,8,9]);	
		expect(selectionSort([1,2,3])).toEqual([1,2,3]);
	});
});