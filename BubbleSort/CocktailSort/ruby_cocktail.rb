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

p cocktail_sort([1,3,5,7,9,8,6,4,2])
p cocktail_sort([1,2,3,4,5,4,3,2,1])
p cocktail_sort([9,8,7,6,5,4,3,2,1])