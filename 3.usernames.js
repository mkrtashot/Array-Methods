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
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].username) {
      finalArr.push(users[i].username);
    }
  }
  return finalArr;
}

console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
