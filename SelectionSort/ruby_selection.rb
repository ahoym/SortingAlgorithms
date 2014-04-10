def selection_sort(arr)
  (0...arr.length).each do |i|
    current_min = i
    
    (i...arr.length).each do |j|
      current_min = j if arr[j] < arr[current_min]
    end
    
    arr[i], arr[current_min] = arr[current_min], arr[i]
  end
  
  arr
end