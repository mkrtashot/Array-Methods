"use strict";

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(us) {
  let newArr = [];

  newArr = us.filter(function (item) {
    if (item.isAstronaut) {
      return item;
    }
  });
  return newArr;
}

console.log(filterByField(users, "isAstronaut"));
