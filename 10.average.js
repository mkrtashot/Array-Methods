"use strict";

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge(arr) {
  let newArr = [];
  newArr = arr.map((item) => item.age);

  console.log(newArr);
  let sum = newArr.reduce((a, b) => a + b, 0);
  let average = sum / arr.length;
  return average;
}
console.log(getAverageAge(users)); // 55
