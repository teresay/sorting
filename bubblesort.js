function bubbleSort(array) {
  for (var end = array.length - 1; end > 0; end--) {
    for (var j = 0; j < end; j++) {
      if (!inOrder(array, j)) swap(array, j)
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
