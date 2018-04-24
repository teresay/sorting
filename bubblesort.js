function bubbleSort(array) {
  let sorted = false
  for (var end = array.length; end > 0 && !sorted; end--) {
    sorted = true
    for (var j = 0; j < end; j++) {
      if (!inOrder(array, j)) swap(array, j)
      sorted = false
    }
  }
  return array
}

function inOrder(array, index) {
  if (index === array.length - 1) return true
  return array[index] < array[index + 1]
}

function swap(array, index) {
  var oldLeftValue = array[index]
  array[index] = array[index + 1]
  array[index + 1] = oldLeftValue
}
