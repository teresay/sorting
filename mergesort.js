function split(wholeArray) {
let split = Math.floor(wholeArray.length/2)
let firstHalf = wholeArray.slice(0,split);
let secondHalf = wholeArray.slice(split,wholeArray.length);
return [firstHalf, secondHalf];
}

function merge(array) {
  let firsthalf = array[0];
  let secondhalf = array[1];
  let result=[];

  while(firsthalf.length>0 || secondhalf.length>0) {
    if(firsthalf.length===0 && secondhalf.length>0) {
      result.push(secondhalf.shift());
    } else if (secondhalf.length===0 && firsthalf.length>0) {
      result.push(firsthalf.shift());
    } else if (firsthalf[0]>secondhalf[0]) {
      result.push(secondhalf.shift());
    } else {
      result.push(firsthalf.shift());
    }
  }
  return result;
}

function mergeSort(array) {
  let result = [];

  if(array.length===1) {
    result.push(array);
  } else {
    split(array);
    let right = split(array)[1];
    let left = split(array)[0];
    mergeSort(split)
  }
}
