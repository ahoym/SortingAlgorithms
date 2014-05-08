Types of Sorting Algorithms
===========================
A compilation of sorting algorithms programmed in: 

+ Javascript
+ Ruby
+ Python

Sorts implemented:

+ Bubble Sort
+ Cocktail Sort
+ Heap Sort
+ Insertion Sort
+ Merge Sort
+ Odd-Even Sort
+ Selection Sort
+ Quick Sort

Bubble Sort
===========
Statistics:

+ Worst Case performance **O(n^2)**
+ Best Case performance **O(n)**
+ Average Case performance **O(n^2)**
+ Worst Case Space Complexity **O(1) additional memory**

When to Use: 

+ For Teaching Sorts

Repeatedly steps through pairs of elements in the array, and switches them accordingly. Makes passes through the array until no swaps are needed, which signifies it is sorted. Because of this, requires at least two passes through the data.

Cocktail Sort
=============
Statistics:

+ Worst Case performance **O(n^2)**
+ Best Case performance **O(n)**
+ Average Case performance **O(n^2)**
+ Worst Case Space Complexity **O(1) additional memory**

When to Use: 

+ For Teaching Sorts

Variant of bubble sort. For every pass, elements are first sorted increasingly, followed by being sorted decreasingly in a reverse iteration. Similar to and marginally better than Bubble Sort, but sorts in both directions per pass. Because of the bi-directionality, it takes cares of "turtles" better. Turtles are when smaller elements are at the end of the array in bubble sort, which significantly slows performance.

Heap Sort
=========
Statistics:

+ Worst Case performance **O(*n* log *n*)**
+ Best Case performance **O(*n* log *n*)**
+ Average Case performance **O(*n* log *n*)**
+ Worst Case Space Complexity **O(1) additional memory**

When to Use: 

+ Embedded systems
+ One of the most efficient. Competes with quicksort and mergesort.
+ Has a better worst-case running time (**O(*n* log *n*)**) than quicksort (**O(*n*^2)**), but a little slower otherwise.
+ Requires a constant amount of auxiliary space as opposed to mergesort (O(*n*)).


In the first step, a heap is built. A heap is a type of data structure similar to a binary tree. The largest values are at the top(root) of the heap, with up to two smaller value children. In the second step, the current largest value from the heap is inserted into the sorted tail, updating every iteration, until the heap is empty and the array is sorted.


Insertion Sort
==============
Statistics:

+ Worst Case performance **O(*n*^2)**
+ Best Case performance **O(*n*)**
+ Average Case performance **O(*n*^2)**
+ Worst Case Space Complexity **O(1) additional memory**

When to Use: 

+ Very small arrays (< 20 elements)
+ When array is near or already sorted

Element of the current iteration is taken out of the array and compared to previous elements. If the previous element is larger, that element is moved into the next position. If smaller, the taken element is inserted after the smaller element. Because of this, a *k* iteration, has a tail of *k* + 1 sorted entries.

Merge Sort
==========
Statistics:

+ Worst Case performance **O(*n* log *n*)**
+ Best Case performance **O(*n* log *n*)**
+ Average Case performance **O(*n* log *n*)**
+ Worst Case Space Complexity **O(*n*) additional memory**

When to Use: 

+ One of the most efficient. Especially so at handling slow-to-access sequential media
+ When a stable sort is desired
+ Sorting a linked list

Array is split up into *n* sublists, and merged into the correct order accordingly. This merge is done recursively until there is only one sublist remaining, which is the sorted list. Is a type of divide-and-conquer algorithm.

Odd-Even Sort
===========
Statistics:

+ Worst Case performance **O(n^2)**
+ Best Case performance **O(n)**
+ Average Case performance **O(n^2)**
+ Worst Case Space Complexity **O(1) additional memory**

When to Use: 

+ Efficient when used on parallel processors.
+ For Teaching Sorts

Variant of bubble sort. Repeatedly steps through pairs of elements in the array, starting from the odd indices, and switches them accordingly. This is the Odd-Even comparison. After, this is repeated for Even-Odd passes. The combination of these constitutes one iteration. Iterates through the array until no swaps are needed, which signifies it is sorted. Note, the algorithm in this repo is the single-processor algorithm, which is just as (in)efficient as bubble sort.

Selection Sort
==============
Statistics:

+ Worst Case performance **O(*n*^2)**
+ Best Case performance **O(*n*^2)**
+ Average Case performance **O(*n*^2)**
+ Worst Case Space Complexity **O(1) additional memory**

When to Use: 

+ Very small arrays (< 20 elements)
+ When auxiliary memory is limited

Contains two parts, a sorted tail and an unsorted list. Each iteration finds the minimum of the unsorted list and swaps that element with the place of the left-most element in the unsorted list. This effectively grows the sorted list.

Quick Sort
==========
Statistics:

+ Worst Case performance **O(*n*^2)**
+ Best Case performance **O(*n* log *n*)**
+ Average Case performance **O(*n* log *n*)**
+ Worst Case Space Complexity **O(*n*) additional memory**

When to Use: 

+ One of the most efficient
+ When you don't need a stable sort


Chooses a pivot element (usually random, or the median of the left-most, right-most, and middle elements), and sorts the other elements into sides that are either lower or greater than the pivot. This is recursively repeated for the respective subarrays until the arrays are single element. Quick sort is slower with smaller arrays, and an optimization for this is to do insertion sort when the subarrays are broken down to that level.
