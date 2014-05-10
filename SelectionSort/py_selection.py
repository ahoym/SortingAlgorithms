def selection_sort(arr):
  for i in range(len(arr)):
    current_min = i
    
    for j in range(i, len(arr)):
      if arr[j] < arr[current_min]:
        current_min = j
    
    arr[i], arr[current_min] = arr[current_min], arr[i]
    
  return arr;
  
print selection_sort([1,3,5,7,9,8,6,4,2,0])
print selection_sort([9,8,7,6,5,4,3,2,1,0])
print selection_sort([1,2,3,4,5,0,4,3,2,1])