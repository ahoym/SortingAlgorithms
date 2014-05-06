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

p odd_even_sort([1,3,5,7,9,8,6,4,2,0])
p odd_even_sort([9,8,7,6,5,4,3,2,1,0])
p odd_even_sort([1,2,3,4,5,0,4,3,2,1])