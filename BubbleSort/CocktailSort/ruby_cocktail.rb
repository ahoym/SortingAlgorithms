def cocktail_sort(arr)
  (arr.length / 2).times do |i|
    
    (i..(arr.length - 2 - i)).each do |j|
      arr[j], arr[j + 1] = arr[j + 1], arr[j] if arr[j] > arr[j + 1]
    end
    
    (arr.length - 2 - i).downto(i + 1) do |k|
      arr[k], arr[k - 1] = arr[k - 1], arr[k] if arr[k] < arr[k - 1]
    end
  end
        
  arr
end