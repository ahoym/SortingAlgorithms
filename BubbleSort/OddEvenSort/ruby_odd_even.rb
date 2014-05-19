def odd_even_sort(arr)
  sorted = false
  
  until sorted
    sorted = true
    (1...arr.length - 1).step(2) do |i|
      if arr[i] > arr[i + 1]
        arr[i], arr[i + 1] = arr[i + 1], arr[i]
        sorted = false
      end
    end
    
    (0...arr.length - 1).step(2) do |i|
      if arr[i] > arr[i + 1]
        arr[i], arr[i + 1] = arr[i + 1], arr[i]
        sorted = false
      end
    end
  end
  
  arr
end