require_relative "../MergeSort/ruby_merge"

describe "#merge_sort" do
  let(:random_arr) { Array.new(10) { rand(100) } }
  let(:sorted_random_arr) { random_arr.sort }
  let(:huge_random_arr) { Array.new(10000) { rand(100) } }
  let(:sorted_huge_random_arr) { huge_random_arr.sort }
  
  it "should sort an unsorted array" do
    expect(merge_sort([1, 3, 5, 7, 9, 8, 6, 4, 2, 0])).to eq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(merge_sort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).to eq([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(merge_sort([1, 2, 3, 4, 5, 0, 4, 3, 2, 1])).to eq([0, 1, 1, 2, 2, 3, 3, 4, 4, 5])
    expect(merge_sort(random_arr)).to eq(sorted_random_arr)
  end
  
  it "should return an empty array, when given one" do
    expect(merge_sort([])).to eq([])
  end
  
  it "should handle single element arrays" do
    expect(merge_sort([5])).to eq([5])
  end
  
  it "should handle small and simple arrays" do
    expect(merge_sort([6, 5])).to eq([5, 6])
    expect(merge_sort([7, 6, 5])).to eq([5, 6, 7])
  end
  
  it "should handle huge unsorted arrays" do
    expect(merge_sort(huge_random_arr)).to eq(sorted_huge_random_arr)
  end
  
  it "should call itself recursively" do
    should_receive(:merge_sort).at_least(:twice).and_call_original
    merge_sort([1,2,3,4,5])
  end
end