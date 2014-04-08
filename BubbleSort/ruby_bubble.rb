# In place, destructive
def bubble_sort!(arr)
  sorted = false
  
  until sorted
    sorted = true
    (arr.length - 1).times do |i|
      if arr[i] > arr[i + 1]
        arr[i], arr[i + 1] = arr[i + 1], arr[i]
        sorted = false
      end
    end
  end
  
  arr
end

# Not in-place, indestructive.
def bubble_sort(arr)
  duped_arr = arr.dup
  sorted = false
  
  until sorted
    sorted = true
    (duped_arr.length - 1).times do |i|
      if duped_arr[i] > duped_arr[i + 1]
        duped_arr[i], duped_arr[i + 1] = duped_arr[i + 1], duped_arr[i]
        sorted = false
      end
    end
  end
  
  duped_arr
end

p bubble_sort([9,7,5,3,1,2,4,6,8])
p bubble_sort([1,2,3,4,5,1,2,3,4])