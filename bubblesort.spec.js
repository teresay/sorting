describe('Bubble Sort', function() {
  let arr = null
  beforeEach(function() {
    arr = [1, 3, 2, 4, 0]
  })

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([])
  })

  it('should call swap', function() {
<<<<<<< HEAD
    spyOn(window, 'swap').and.callThrough();
    bubbleSort(arr);
    expect(swap.calls.count()).toEqual(1);

  });
   it('should equal [0,1,2,3,4]', function() {
    expect(bubbleSort(arr)).toEqual([0,1,2,3,4]);
   })

});
=======
    spyOn(window, 'swap').and.callThrough()
    bubbleSort(arr)
    expect(swap.calls.count()).toEqual(5)
  })
>>>>>>> 62b585d9c62d642a810894588831245e5ff5e1fe

  it('should equal [0,1,2,3,4]', function() {
    expect(bubbleSort(arr)).toEqual([0, 1, 2, 3, 4])
  })
})
