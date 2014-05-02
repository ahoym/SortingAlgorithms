def heapify(arr, count)
  ((count - 2) / 2).downto(0) {|start| sift_down(arr, start, count - 1) }
end

def sift_down(arr, start_val, end_val)
  root = start_val
  
  while root * 2 + 1 <= end_val
    child = root * 2 + 1
    break if child > end_val
    
    if child + 1 <= end_val && arr[child] < arr[child + 1]
      child += 1
    end
    
    if arr[root] < arr[child]
      arr[root], arr[child] = arr[child], arr[root]
      root = child
    else
      return
    end
  end
end

def heap_sort(arr, count)
  heapify(arr, count)
  
  (count - 1).downto(1) do |end_val|
    arr[end_val], arr[0] = arr[0], arr[end_val]
    sift_down(arr, 0, end_val - 1)
  end
  
  arr
end

p heap_sort([1,3,5,7,9,8,6,4,2], 9)
p heap_sort([9,8,7,6,5,4,3,2,1], 9)
p heap_sort([1,2,3,4,5,4,3,2,1], 9)