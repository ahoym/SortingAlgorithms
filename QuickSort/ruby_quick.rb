def quick_sortI(arr)
  return arr if arr.length <= 1
  pivot = arr[0]
  
  left, right = arr[1..-1].partition { |el| el < pivot }
  quick_sortI(left) + [pivot] + quick_sortI(right)
end

# =================== Pointer Based =======================
# Why? .pop functions are expensive.
def quick_sortII(arr, left, right)
  return arr if arr.length < 2

  if left < right
    pivot_index = ((arr.length / 2) + left + right) / 3
    new_pivot_index = partition(arr, left, right, pivot_index)
    
    quick_sort(arr, left, new_pivot_index - 1)
    quick_sort(arr, new_pivot_index + 1, right)    
  end
  
  arr
end

def partition(arr, left, right, pivot_index)
  pivot_val = arr[pivot_index]
  
  arr[right], arr[pivot_index] = arr[pivot_index], arr[right]
  store_index = left
  
  (left...right).each do |i|
    if arr[i] <= pivot_val
      arr[i], arr[store_index] = arr[store_index], arr[i]
      store_index += 1
    end
  end
  
  arr[store_index], arr[right] = arr[right], arr[store_index]
  store_index
end

p quick_sortI([1,3,5,7,9,8,6,4,2,0])
p quick_sortI([9,8,7,6,5,4,3,2,1,0])
p quick_sortI([1,2,3,4,5,0,4,3,2,1])