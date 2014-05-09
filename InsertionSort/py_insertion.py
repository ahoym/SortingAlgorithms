def insertion_sort(arr):
  for i in range(len(arr)):
    current_val = arr[i]
    j = i - 1
    
    while j >= 0 and arr[j] > current_val:
      arr[j + 1] = arr[j]
      j -= 1
  
    arr[j + 1] = current_val
  
  return arr
  
print insertion_sort([1,3,5,7,9,8,6,4,2,0])
print insertion_sort([9,8,7,6,5,4,3,2,1,0])
print insertion_sort([1,2,3,4,5,0,4,3,2,1])