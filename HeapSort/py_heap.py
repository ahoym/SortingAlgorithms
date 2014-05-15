def heapify(arr, count):
  for i in range((count - 2) / 2, -1, -1):
    sift_down(arr, i, count - 1)

  
def sift_down(arr, start_val, end_val):
  root = start_val
  
  while root * 2 + 1 <= end_val:
    child = root * 2 + 1
    
    if child + 1 <= end_val and arr[child] < arr[child + 1]:
      child += 1
      
    if arr[root] < arr[child]:
      arr[root], arr[child] = arr[child], arr[root]
      root = child
    else:
      return;
      

def heap_sort(arr, count):
  heapify(arr, count)
  
  for i in range(count - 1, 0, -1):
    arr[i], arr[0] = arr[0], arr[i]
    sift_down(arr, 0, i - 1)
    
  return arr;
  
print heap_sort([1,3,5,7,9,8,6,4,2,0], 10)
print heap_sort([9,8,7,6,5,4,3,2,1,0], 10)
print heap_sort([1,2,3,4,5,0,4,3,2,1], 10)
    