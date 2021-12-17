"use strict";

let arr = [1, 30, 39, 29, 10, 13];
let result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 40) {
    result.push(arr[i]);
  }
}

console.log(result);
