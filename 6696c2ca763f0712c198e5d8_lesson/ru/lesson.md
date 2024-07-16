В объект можно добавлять новые свойства.

Для добавления свойства объекта в JavaScript используется синтаксис точки или квадратных скобок. Давайте рассмотрим оба варианта более подробно.

**Добавление свойства с помощью точки:**

```js
const car = {
  make: "Toyota",
  model: "Prius",
};

car.year = "2023";
console.log(car); // Выведет: { make: "Toyota", model: "Prius", year: "2023" }

car.year = "2027";
console.log(car); // Выведет: { make: "Toyota", model: "Prius", year: "2027" }
```

В этом примере мы добавили новое свойство `year` к объекту `car` с помощью точки. Перезаписывать свойство можно сколько угодно раз.

**Добавление свойства с помощью квадратных скобок:**

```js
const car = {
  make: "Toyota",
  model: "Prius",
};

car["year-year"] = "1234";

console.log(car); // Выведет: { make: "Toyota", model: "Prius", year-year: "1234" }
console.log(car["year-year"]); // Выведет: 1234
```

В этом примере мы добавили новое свойство `year-year` к объекту `car` с помощью квадратных скобок. Мы также можем получить доступ к этому свойству, используя квадратные скобки и строку в качестве имени свойства.

Рассмотрим еще один пример:

```js
const car = {
  make: "Toyota",
  model: "Prius",
};


car["year year"] = "1234";

console.log(car); // Выведет: { make: "Toyota", model: "Prius", year year: "1234" }
console.log(car["year-year"]); // Выведет: 1234
```

Оба метода дают одинаковый результат, но использование точечной нотации предпочтительнее, если имя свойства является строкой без символов. Если имя свойства содержит пробелы, цифры или другие специальные символы, то необходимо использовать квадратные скобки.

Далее напишем функцию, которая возвращает нам 'склеенный' объект, состоящий из двух разных объектов – `part1` и `part2`.

```js
function mergeProperties(part1, part2) {
  return {
    make: part1.make,
    model: part1.model,
    year: part2.year,
    price: part2.price,
  };
}

console.log(
  mergeProperties(
    { make: "Toyota", model: "Sienna" },
    { year: 2078, price: 789987 }
  )
); // Выведет: { make: "Toyota", model: "Sienna", year: 2078, price: 789987 }
```
