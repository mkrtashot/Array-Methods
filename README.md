```
Concatenate the two arrays
```

```
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Here is the [solution](1.concatenate.js)

```
- Create a function that takes an array of numbers arr, a string str
and return an array of numbers as per the following rules:

- "Asc" returns a sorted array in ascending order.
- "Desc" returns a sorted array in descending order.
```

Here is the [solution](2.ascending_descending.js)

````
Write a function which returns array of usernames.
``` javascript
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
getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong']
````

Here is the [solution](3.usernames.js)

````
Write a function which returns array of lengths of user names
``` javascript
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
getUsernameLengths(users); // [12, 13]
````

Here is the [solution](4.usernames_length.js)

````
Write a function which parses string integers. If it's not possible to
parse, then add null
``` javascript
arseInteger(["1", "2", "34"]); // [1, 2, 34];
parseInteger(["1", "px", "2323"]); // [1, null, 2323];
````

Here is the [solution](5.parseInteger.js)

````
- Given an array, return a new array that only includes the numbers.
``` javascript
const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN]
// [1, 2, 55, 166]
````

Here is the [solution](6.filter_num.js)

````
Write a function which remove users with language equals to 'ru'.
``` javascript
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
filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]
````

Here is the [solution](7.users_filter_ru.js)

````
Write a function which filters object by field.
``` javascript
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
isAstronaut: true,
},
{
username: "Nil Armstrong",README.md 12/9/2021
4 / 5
lang: "ENG",
isAstronaut: true,
},
{
username: "Elon Musk",
isAstronaut: false,
},
];
filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin",
lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"
}]
````

Here is the [solution](8.is_astronaut.js)

````
- Given an array, return the sum of numbers that are 18 or over.
``` javascript
const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]
// 22 + 55 + 166 + 36 + 205 + 333 + 95 + 62 + 43 = 1017
````

Here is the [solution](9.number_sum_18.js)

````
- Write a function which calculates average age of users.
``` javascript
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
getAverageAge(users); // 55
````

Here is the [solution](10.average.js)

Implement these array methods
[forEach](./array_methods/forEach.js)
[splice](./array_methods/splice.js)
[findIndex](./array_methods/findIndex.js)
[find](./array_methods/find.js)
[map](./array_methods/map.js)
[filter](./array_methods/filter.js)
[every](./array_methods/ever.js)
[some](./array_methods/some.js)
[reduce](./array_methods/reduce.js)
