"use strict";

function sortBy(arr, rule) {
  if (rule === "Asc") {
    return (arr = arr.sort(function (a, b) {
      return a - b;
    }));
  }
  if (rule === "Desc") {
    return (arr = arr.sort(function (a, b) {
      return b - a;
    }));
  }
  return (arr = arr.sort(function (a, b) {
    return a - b;
  }));
}
console.log(sortBy([100, 23, 542, 23], "Desc"));
