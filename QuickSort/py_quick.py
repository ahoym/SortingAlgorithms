def quick_sortI(arr):
  if len(arr) <= 1:
    return arr;
    
  left = []
  eq = []
  right = []
  pivot = arr[0]
  
  for el in arr:
    if el < pivot:
      left.append(el)
    elif el == pivot:
      eq.append(el)
    else:
      right.append(el)
  
  return quick_sortI(left) + eq + quick_sortI(right);


# =================== Pointer Based =======================
def quick_sortII(arr, left, right):
  if len(arr) < 2:
    return arr;
    
  if left < right:
    pivot_index = (len(arr) / 2 + left + right) / 3
    new_pivot_index = partition(arr, left, right, pivot_index)
  
    quick_sort(arr, left, new_pivot_index - 1)
    quick_sort(arr, new_pivot_index + 1, right)
  
  return arr;
  
  
def partition(arr, left, right, pivot_index):
  pivot_val = arr[pivot_index]
  
  arr[right], arr[pivot_index] = arr[pivot_index], arr[right]
  store_index = left
  
  for i in range(left, right):
    if arr[i] <= pivot_val:
      arr[i], arr[store_index] = arr[store_index], arr[i]
      store_index += 1
  
  arr[store_index], arr[right] = arr[right], arr[store_index]
  return store_index;
  
print quick_sortI([1,3,5,7,9,8,6,4,2,0])
print quick_sortI([9,8,7,6,5,4,3,2,1,0])
print quick_sortI([1,2,3,4,5,0,4,3,2,1])