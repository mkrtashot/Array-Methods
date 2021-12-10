"use strict";

function parseInteger(arr) {
  let newArr = [];

  return arr.map(function (item) {
    if (item) {
      return (item = +item);
    } else {
      return null;
    }
  });
}
console.log(parseInteger(["1", "2", "34"]));
