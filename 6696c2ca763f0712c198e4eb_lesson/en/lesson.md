Objects in JavaScript are one of the basic data structures that can store and organize information in code.

Objects are a collection of properties, where a property is a `key: value` pair. The key is a unique string, and the value can be any data type in JavaScript, including another object.

Syntax for creating an object:

```javascript
let person = {
  key: value,
  key1: value1,
  key2: value,
  key3: value1,
};
```

Each key in an object must be unique and cannot be repeated, while values can be repeated.

Objects in JavaScript are like boxes that can store different things. For example, one box can hold information about you, and another can hold information about a friend. Also, boxes can contain other boxes within them, allowing you to organize information into complex structures.

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/box-js.png)

Consider the example of an object that represents information about a person:

```javascript
let person = {
  name: 'Eve',
  age: 10,
  favoriteColor: 'Blue',
};
```

This object contains three properties:

- name
- age
- favoriteColor

Let's write a function `makePersonObject` that will take `name, age, favoriteColor` and return an object:

```javascript
function makePersonObject(name, age, favoriteColor) {
  return {
    name: name,
    age: age,
    favoriteColor: favoriteColor,
  };
}

const stivePerson = makePersonObject('Stive', 5, 'Yellow');
const evePerson = makePersonObject('Eve', 10, 'Blue');

console.log(stivePerson); // { name: "Stive", age: 5 , favoriteColor: "Yellow" }
console.log(evePerson); // { name: "Eve", age: 10 , favoriteColor: "Blue" }
```
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girl-and-key.png)