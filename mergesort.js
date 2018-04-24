function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  let splits = split(array),
    left = splits[0],
    right = splits[1]
  return merge(mergeSort(left), mergeSort(right))
}

function split(array) {
  let center = array.length / 2
  let left = array.slice(0, center)
  let right = array.slice(center)
  return [left, right]
}

function merge(left, right) {
  let merged = [],
    leftIdx = 0,
    rightIdx = 0

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx])
      leftIdx++
    } else {
      merged.push(right[rightIdx])
      rightIdx
    }
  }

  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx])
  for (; rightIdx < right.length; right++) merged.push(right[rightIdx])

  return merged
}
