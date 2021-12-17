"use strict";

let arr = [1, 2, 3, 4];
function reduceFake(arr) {
  let acc;
  function accumulator() {
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        acc = arr[i];
      } else {
        acc += arr[i];
      }
      if (i === arr.length - 1) {
        return acc;
      }
    }
  }
  return accumulator();
}

console.log(reduceFake(arr));
