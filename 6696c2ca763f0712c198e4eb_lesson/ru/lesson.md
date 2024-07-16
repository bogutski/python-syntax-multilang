Объекты в JavaScript - это одна из основных структур данных, которые могут хранить и организовывать информацию в коде.

Объекты представляют собой коллекцию свойств, где свойство — это пара `ключ: значение`. Ключ — это уникальная строка, а значением может быть любой тип данных в JavaScript, включая другой объект.

Синтаксис создания объекта:

```javascript
let person = {
  key: value,
  key1: value1,
  key2: value,
  key3: value1,
};
```

Каждый ключ в объекте должен быть уникальным и не может повторяться, тогда как значения могут повторяться.

Объекты в JavaScript — это как коробки, которые могут хранить разные вещи. Например, в одной коробке может быть информация о тебе, а в другой — информация о друге. Кроме того, коробки могут содержать другие коробки внутри себя, что позволяет организовать информацию в сложные структуры.

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/box-js.png)

Рассмотрим пример объекта, который представляет информацию о человеке:

```javascript
let person = {
  name: 'Eve',
  age: 10,
  favoriteColor: 'Blue',
};
```

Этот объект содержит три свойства:

- name (имя)
- age (возраст)
- favoriteColor (любимый цвет)

Напишем функцию `makePersonObject` которая будет принимать `name, age, favoriteColor` и возвращать объект:

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