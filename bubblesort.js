<<<<<<< HEAD
// let counter = 0;
// let compare = 0;

// function bubbleSort(arr) {
//   for (i===0;i<arr.length;i++) {
//     for (j===0;j<arr.length;j++) {
//       if(!inOrder(arr,j))
//     }
//   }

//   return arr;
// }


// function swap(arr,currentindex) {
// if(arr[currentindex]>arr[currentindex+1]) {
//   arr[currentindex+1]=arr[currentindex];
//   counter++;
// }
// }

// function inOrder(arr) {
//   if (arr.sort)
// }

let count = 0;
let arr = [1,3,2,4,0];

=======
>>>>>>> 62b585d9c62d642a810894588831245e5ff5e1fe
function bubbleSort(array) {
  if (array.length===0) {
    return array;
  }
  const swapsneeded = array.length - 1
  if(count===swapsneeded) {

    return array;
  } else {
    swap(array, array.length - count);
  }
}

function swap(array,length) {
  for(i=0;i<length;i++) {
    current = array[i];
    next = array[i+1]
    if (current > next) {
      array[i] = next;
      array[i+1] = current;
    }
  }
<<<<<<< HEAD
  count++;
}

bubbleSort(arr);
console.log(bubbleSort(arr));
=======
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
>>>>>>> 62b585d9c62d642a810894588831245e5ff5e1fe
