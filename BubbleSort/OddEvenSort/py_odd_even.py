def odd_even_sort(arr):
  sorted = False
  
  while not sorted:
    sorted = True
    
    for i in range(0, len(arr) - 1, 2):
      if arr[i] > arr[i + 1]:
        arr[i], arr[i + 1] = arr[i + 1], arr[i]
        sorted = False
        
    for j in range(1, len(arr) - 1, 2):
      if arr[j] > arr[j + 1]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
        sorted = False
  
  return arr;
  
print odd_even_sort([1,3,5,7,9,8,6,4,2,0])
print odd_even_sort([9,8,7,6,5,4,3,2,1,0])
print odd_even_sort([1,2,3,4,5,0,4,3,2,1])