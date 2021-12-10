"use strict";

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
// [1, 2, 55, 166]

function numFilter(arr1) {
  let newArr = [];
  newArr = arr1.filter(function (item) {
    if (typeof item === "number") {
      return item;
    }
  });
  return newArr;
}
console.log(numFilter(arr));
