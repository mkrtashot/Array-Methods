"use strict";

function sliceFake(arr, copyBeginning, copyEnd) {
  let newArr = [];
  for (let i = copyBeginning; i <= copyEnd; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(sliceFake([1, 2, 3, 4, 5, 6, 7, 8], 3, 6));
