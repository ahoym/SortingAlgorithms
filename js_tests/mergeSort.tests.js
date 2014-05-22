"use strict";

describe('mergeSort', function() {
	it('should sort an unsorted array', function() {
		var randomArr = generateRandomArr(10);
		var clonedArr = randomArr.slice(0);
		expect(mergeSort(clonedArr)).toEqual(randomArr.mySort());
		
		expect(mergeSort([1,3,5,7,9,8,6,4,2,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);
		expect(mergeSort([9,8,7,6,5,4,3,2,1,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);
		expect(mergeSort([1,2,3,4,5,0,4,3,2,1])).toEqual([0,1,1,2,2,3,3,4,4,5]);
		
		expect(mergeSort([1,3,5,7,9,8,6,4,2])).toEqual([1,2,3,4,5,6,7,8,9]);		
	});
	
	it('should return an empty array, when given one', function() {
		expect(mergeSort([])).toEqual([]);
	});
	
	it('should handle single element arrays', function() {
		expect(mergeSort([5])).toEqual([5]);
	});
	
	it('should handle small and simple arrays', function() {
		expect(mergeSort([6,5])).toEqual([5,6]);
		expect(mergeSort([7,6,5])).toEqual([5,6,7]);
	});
	
	it('should handle large unsorted arrays', function() {
		var hugeRandomArr = generateRandomArr(10000);
		var clonedArr = hugeRandomArr.slice(0);
		expect(mergeSort(clonedArr)).toEqual(hugeRandomArr.mySort());
	});
	
	it('should not alter an already sorted array', function() {
		expect(mergeSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
		expect(mergeSort([6,7,8,9,10,11])).toEqual([6,7,8,9,10,11]);
	});
});