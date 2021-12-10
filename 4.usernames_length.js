"use strict";

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getUserNames(arr) {
  let finalArr = arr.map((item) => item.username.length);
  return finalArr;
}

console.log(getUserNames(users));
