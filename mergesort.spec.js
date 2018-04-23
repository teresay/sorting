describe('Split Array function', function() {
  let arr = null
  beforeEach(function() {
    arr = [3, 1, 2, 4]
  })

  it('is able to split an array into two halves', function() {
    // your code here
    expect(split(arr)).toEqual([[1, 3], [2, 4]])
  })

  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4])
  })
})
