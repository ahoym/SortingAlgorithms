require_relative '../SelectionSort/ruby_selection'

describe "#selection_sort" do
  let(:arr) { [1, 3, 5, 7, 9, 8, 6, 4, 2, 0] }
  let(:random_arr) { Array.new(10) { rand(100) } }
  let(:sorted_random_arr) { random_arr.sort }
  let(:huge_random_arr) { Array.new(10000) { rand(100) } }
  
  it "should sort an unsorted array" do 
    expect(selection_sort(arr)).to eq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(selection_sort(random_arr)).to eq(sorted_random_arr)
    expect(selection_sort([9,8,7,6,5,4,3,2,1,0])).to eq([0,1,2,3,4,5,6,7,8,9])
    expect(selection_sort([1,2,3,4,5,0,4,3,2,1])).to eq([0,1,1,2,2,3,3,4,4,5])
  end
  
  it "should return an empty array, when given one" do
    expect(selection_sort([])).to eq([])
  end
  
  it "should handle single element arrays" do
    expect(selection_sort([3])).to eq([3])
  end
  
  it "should handle small and simple unsorted arrays" do
    expect(selection_sort([3, 2, 1])).to eq([1, 2, 3])
    expect(selection_sort([2, 1])).to eq([1, 2])
  end
  
  it "should handle large unsorted arrays" do
    expect(selection_sort(huge_random_arr)).to eq(huge_random_arr.sort)
  end
  
  it "should not alter an already sorted array" do
    expect(selection_sort(sorted_random_arr)).to eq(sorted_random_arr)
    expect(selection_sort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to eq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  end
end