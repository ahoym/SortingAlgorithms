def merge_sort(arr)
  return arr if arr.length < 2
  
  mid = arr.length / 2
  left = arr[0...mid]
  right = arr[mid..-1]
  
  return merge( merge_sort(left), merge_sort(right) )
end

def merge(left, right)
  sorted_arr = []
  
  until left.empty? || right.empty?
    sorted_arr << (left.first > right.first ? right.shift : left.shift)
  end
  
  sorted_arr + left + right
end

p merge_sort([1,3,5,7,9,8,6,4,2])
p merge_sort([1,2,3,4,5,4,3,2,1])