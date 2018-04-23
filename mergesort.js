function split(wholeArray) {
  let splitArr = Math.floor(wholeArray.length / 2)

  let firstHalf = wholeArray.slice(0, splitArr)
  let secondHalf = wholeArray.slice(splitArr)

  return [firstHalf, secondHalf]
}

function merge(arr1, arr2) {
  console.log('arr1', arr1)
  console.log('arr2', arr2)

  let newArr = []
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.shift())
    } else {
      newArr.push(arr2.shift())
    }
  }

  return newArr
}

function mergeSort(arr) {
  if (arr.length > 1) {
    return merge(split(arr)[0], split(arr)[1])
  }
}

mergeSort([2, 1, 6, 4])
