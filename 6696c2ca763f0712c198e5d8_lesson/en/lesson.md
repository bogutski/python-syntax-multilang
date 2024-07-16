New properties can be added to the object.

JavaScript uses either the point or square bracket syntax to add an object property. Let's take a closer look at both.

**Adding a property with a point:**

```js
const car = {
  make: "Toyota,
  model: "Prius",
};

car.year = "2023";
console.log(car); // Output: { make: "Toyota", model: "Prius", year: "2023" }

car.year = "2027";
console.log(car); // Output: { make: "Toyota", model: "Prius", year: "2027" }
```

In this example we have added a new property `year` to the `car` object with a dot. You can overwrite the property as many times as you want.

**Adding a property using square brackets:**

```js
const car = {
  make: "Toyota,
  model: "Prius",
};

car["year-year"] = "1234";

console.log(car); // output: { make: "Toyota", model: "Prius", year-year: "1234" }
console.log(car["year-year"]); // output: 1234
```

In this example we have added a new `year-year` property to the `car` object using square brackets. We can also access this property using square brackets and a string as the property name.

Let's look at another example:

```js
const car = {
  make: "Toyota,
  model: "Prius",
};


car["year year"] = "1234";

console.log(car); // output: { make: "Toyota", model: "Prius", year year: "1234" }
console.log(car["year-year"]); // output: 1234
```

Both methods give the same result, but using dot notation is preferable if the property name is a characterless string. If the property name contains spaces, numbers, or other special characters, you must use square brackets.

Next, write a function that returns to us a 'glued' object consisting of two different objects, `part1` and `part2`.

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
); // output: { make: "Toyota", model: "Sienna", year: 2078, price: 789987 }
```
