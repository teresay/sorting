
describe('Split Array function', function() {

  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2], [3,4,5]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([[3],[2]])).toEqual([2,3]);
    expect(merge([[1,3],[0,2]])).toEqual([0,1,2,3]);
    expect(merge([[1,3,5],[0,2,4]])).toEqual([0,1,2,3,4,5]);
    expect(merge([[1,3],[0,2,5]])).toEqual([0,1,2,3,5]);
    expect(merge([[1,3,5],[0,2]])).toEqual([0,1,2,3,5]);
  });
});
