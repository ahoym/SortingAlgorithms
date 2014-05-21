def insertion_sort(arr)
  (1...arr.length).each do |i|
    current_val = arr[i]
    j = i - 1
    
    while j >= 0 && arr[j] > current_val
      arr[j + 1] = arr[j]
      j -= 1
    end
    arr[j + 1] = current_val
  end
  
  arr
end