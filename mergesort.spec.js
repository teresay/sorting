describe('Merge sort', function() {
  describe('split', function() {
    it('given on array, returns two arrays', function() {
      expect(split([])).toEqual([[], []])
    })

    it('splits array of even length', function() {
      expect(split([5, 10])).toEqual([[5], [10]])
    })

    it('splits array of odd length', function() {
      expect(split([4, 10, 20])).toEqual([[4], [10, 20]])
    })
  })
})

describe('merge', function() {
  it('given two arrays, return an array', function() {
    expect(merge([], [])).toEqual([])
  })

  it('given two already sorted arrays of equal length, returns sorted result array', function() {
    expect(merge([1, 5, 10], [2, 4, 11])).toEqual([1, 2, 4, 5, 10, 11])
    expect(merge([1, 9, 10], [2, 3, 8])).toEqual([1, 2, 3, 8, 9, 10])
  })

  it('works for arrays of unequal length', function() {
    exect(merge([1, 5, 10, 20, 21], [2, 4, 100])).toEqual([
      1,
      2,
      4,
      5,
      10,
      20,
      21,
      100
    ])
  })
})
