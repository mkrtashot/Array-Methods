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

function filterUsers(us) {
  let newArr = [];

  newArr = us.filter(function (item) {
    if (item.lang !== "ru") {
      return item;
    }
  });
  return newArr;
}
console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]
