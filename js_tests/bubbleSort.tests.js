"use strict";

describe("bubbleSort Derivates", function () {
	describe("#bubbleSort", function() {	
		it('should sort an unsorted array', function() {
			var random_arr = generateRandomArr(10);
			var cloned_random_arr = random_arr.slice(0);
			expect(bubbleSort(cloned_random_arr)).toEqual(random_arr.mySort());
			
			expect(bubbleSort([1,3,5,7,9,8,6,4,2,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);		
			expect(bubbleSort([9,8,7,6,5,4,3,2,1,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);
			expect(bubbleSort([1,2,3,4,5,0,4,3,2,1])).toEqual([0,1,1,2,2,3,3,4,4,5]);
		});
	
		it('should return an empty array, when given one', function() {
			expect(bubbleSort([])).toEqual([]);
		});
	
		it('should handle single element arrays', function() {
			expect(bubbleSort([1])).toEqual([1]);
		});
	
		it('should handle small and simple unsorted arrays', function() {
			expect(bubbleSort([2,1])).toEqual([1,2]);
			expect(bubbleSort([3,2,1])).toEqual([1,2,3]);
		});
	
		it('should handle large unsorted arrays', function() {
			var huge_random_arr = generateRandomArr(10000);
			var cloned_huge_random_arr = huge_random_arr.slice(0);
			expect(bubbleSort(cloned_huge_random_arr)).toEqual(huge_random_arr.mySort());
		});
	
		it('should not alter an already sorted array', function() {
			expect(bubbleSort([0,1,2,3,4,5,6,7,8,9])).toEqual([0,1,2,3,4,5,6,7,8,9]);	
			expect(bubbleSort([1,2,3])).toEqual([1,2,3]);
		});
	});
	
	describe("#cocktailSort", function() {
		it('should sort an unsorted array', function() {
			var random_arr = generateRandomArr(10);
			var cloned_random_arr = random_arr.slice(0);
			expect(cocktailSort(cloned_random_arr)).toEqual(random_arr.mySort());
			
			expect(cocktailSort([1,3,5,7,9,8,6,4,2,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);
			expect(cocktailSort([9,8,7,6,5,4,3,2,1,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);
			expect(cocktailSort([1,2,3,4,5,0,4,3,2,1])).toEqual([0,1,1,2,2,3,3,4,4,5]);
		});
		
		it('should return an empty array, when given one', function() {
			expect(cocktailSort([])).toEqual([]);
		});
		
		it('should handle single element arrays', function() {
			expect(cocktailSort([4])).toEqual([4]);
		});
		
		it('should handle small and simple unsorted arrays', function() {
			expect(cocktailSort([2,1])).toEqual([1,2]);
			expect(cocktailSort([3,2,1])).toEqual([1,2,3]);
		});
		
		it('should handle large unsorted arrays', function() {
			var huge_random_arr = generateRandomArr(10000);
			var cloned_huge_random_arr = huge_random_arr.slice(0);
			expect(cocktailSort(cloned_huge_random_arr)).toEqual(huge_random_arr.mySort());
		});
		
		it('should not alter an already sorted array', function() {
			expect(cocktailSort([0,1,2,3,4,5,6,7,8,9])).toEqual([0,1,2,3,4,5,6,7,8,9]);
			expect(cocktailSort([1,2,3])).toEqual([1,2,3]);
		});
	});
	
	describe('#oddEvenSort', function() {
		it('should sort an unsorted array', function() {
			var random_arr = generateRandomArr(10);
			var cloned_random_arr = random_arr.slice(0);
			expect(oddEvenSort(cloned_random_arr)).toEqual(random_arr.mySort());
			
			expect(oddEvenSort([1,3,5,7,9,8,6,4,2,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);
			expect(oddEvenSort([9,8,7,6,5,4,3,2,1,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);
			expect(oddEvenSort([1,2,3,4,5,0,4,3,2,1])).toEqual([0,1,1,2,2,3,3,4,4,5]);
		});
		
		it('should return an empty array when given one', function() {
			expect(oddEvenSort([])).toEqual([]);
		});
		
		it('should handle single element arrays', function() {
			expect(oddEvenSort([4])).toEqual([4]);
		});
		
		it('should handle small and simple unsorted arrays', function() {
			expect(oddEvenSort([2,1])).toEqual([1,2]);
			expect(oddEvenSort([3,2,1])).toEqual([1,2,3]);
		});
		
		it('should not later an already sorted array', function() {
			expect(oddEvenSort([0,1,2,3,4,5,6,7,8,9])).toEqual([0,1,2,3,4,5,6,7,8,9]);
			expect(oddEvenSort([1,2,3])).toEqual([1,2,3]);
		});
	});
});