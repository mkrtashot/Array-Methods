"use strict";

function spliceFake(arr, copyBeginning, copyEnd) {
  let newArr = [];
  for (let i = copyBeginning; i <= copyEnd; i++) {
    newArr.push(arr[i]);
  }
  arr = newArr;
  return arr;
}

console.log(spliceFake([1, 2, 3, 4, 5, 6, 7], 3, 6));
