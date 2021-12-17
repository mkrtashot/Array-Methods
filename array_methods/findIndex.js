"use strict";

function findIndexFake(arr, findItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findItem) {
      return i;
    }
  }
  return undefined;
}

console.log(findIndexFake(["mama", "papa", "whatever"], "papa"));
