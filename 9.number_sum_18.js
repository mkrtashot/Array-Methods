"use strict";

let result = arr.reduce(previousValue, 0);

function previousValue(total, a) {
  if (a >= 18) {
    return total + a;
  } else {
    return total;
  }
}

console.log(result);
