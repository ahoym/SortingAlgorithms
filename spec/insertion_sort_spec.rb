require_relative '../InsertionSort/ruby_insertion'

describe "#insertion_sort" do
  let(:arr) { [1, 3, 5, 7, 9, 8, 6, 4, 2, 0] }
  let(:random_arr) { Array.new(10) { rand(100) } }
  let(:sorted_random_arr) { random_arr.sort }
  let(:huge_random_arr) { Array.new(10000) { rand(100) } }
  
  it "should sort an unsorted array" do
    expect(insertion_sort(arr)).to eq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(insertion_sort(random_arr)).to eq(sorted_random_arr)
    expect(insertion_sort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).to eq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(insertion_sort([1, 2, 3, 4, 5, 0, 4, 3, 2, 1])).to eq([0, 1, 1, 2, 2, 3, 3, 4, 4, 5])
  end
  
  it "should return an empty array when given one" do
    expect(insertion_sort([])).to eq([])
  end
  
  it "should handle single element arrays" do
    expect(insertion_sort([2])).to eq([2])
  end
  
  it "should handle small, simple arrays" do
    expect(insertion_sort([3, 2, 1])).to eq([1, 2, 3])
    expect(insertion_sort([2, 1])).to eq([1, 2])
  end
  
  it "should handle large, unsorted arrays" do
    expect(insertion_sort(huge_random_arr)).to eq(huge_random_arr.sort)
  end
  
  it "should not alter an already sorted array" do
    expect(insertion_sort(sorted_random_arr)).to eq(sorted_random_arr)
  end
end