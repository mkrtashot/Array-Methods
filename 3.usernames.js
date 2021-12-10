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
  let finalArr = arr.map((item) => item.username);
  return finalArr;
}

console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
