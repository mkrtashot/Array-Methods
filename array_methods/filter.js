"use strict";

let arr = [1, 2, 3, 4];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  function filterFake(i) {
    return arr[i];
  }
  newArr.push(arr[i]);
}

console.log(newArr);
