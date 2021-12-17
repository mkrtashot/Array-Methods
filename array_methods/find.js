"use strict";

function findFake(arr, findItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findItem) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findFake(["mama", "papa", "whatever"], "papa"));
