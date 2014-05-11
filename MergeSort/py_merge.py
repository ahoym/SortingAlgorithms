def merge(left, right):
  sorted = []
  
  while len(left) > 0 and len(right) > 0:
    if left[0] < right[0]:
      sorted.append(left.pop(0))
    else:
      sorted.append(right.pop(0))

  if len(left) > 0:
    sorted.extend(left)
  else:
    sorted.extend(right)

  return sorted;


def merge_sort(arr):
  if len(arr) < 2:
    return arr 
    
  mid = len(arr) / 2
  left = arr[:mid]
  right = arr[mid:]
  
  return merge(merge_sort(left), merge_sort(right));
  

print merge_sort([1,3,5,7,9,8,6,4,2,0])
print merge_sort([9,8,7,6,5,4,3,2,1,0])
print merge_sort([1,2,3,4,5,0,4,3,2,1])