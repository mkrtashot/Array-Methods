"use strict";

let result = arr.reduce(previousValue, 0);

function previousValue(total, a) {
  if (a >= 18) {
    console.log(a);
    return total + a;
  } else {
    return total;
  }
}

console.log(result);
