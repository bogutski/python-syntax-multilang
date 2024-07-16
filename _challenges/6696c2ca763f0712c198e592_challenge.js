// NAMEEN:
// NAMERU:Есть ли свойство в объекте, оператор 'in'

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `objectHasProperty`, которая принимает два параметра:
* `object` – объект, может иметь любое количество свойств
* `property` – свойство, которое нужно проверить на наличие в объекте, строка.

В решении используйте оператор `in`.

Если свойство `property` присутствует в объекте `object`, то функция должна вернуть `true`, иначе `false`.

Пример запуска функции:
```javascript
objectHasProperty({ name: 'John', age: 20 }, 'name') // true
objectHasProperty({ type: 'car', color: 'red' }, 'age') // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function objectHasProperty(object, property) {
  return property in object;
}
// SOLUTIONEND


// OPENTESTSSTART
it("Created function objectHasProperty", () => {
  expect(objectHasProperty).to.be.a("function");
});

it("The function includes the `in` operator", () => {
  expect(objectHasProperty.toString()).to.include(" in ");
});

it(`objectHasProperty({ name: "John", age: 20 }, "name")  // true`, () => {
  expect(objectHasProperty({ name: "John", age: 20 }, "name")).eq(true);
});

it(`objectHasProperty({ type: "car", color: "red" }, "age")  // false`, () => {
  expect(objectHasProperty({ type: "car", color: "red" }, "age")).eq(false);
});

it(`objectHasProperty({ name: "Mississippi", type: "river", length: 2345 }, "length")  // true`, () => {
  expect(objectHasProperty({ name: "Mississippi", type: "river", length: 2345 }, "length")).eq(true);
});

it(`objectHasProperty({ name: "dog", breed: "Labrador", color: "black" }, 123)  // false`, () => {
  expect(objectHasProperty({name: "dog", breed: "Labrador", color: "black"}, 123)).eq(false);
});

it(`objectHasProperty({ name: "Taiwan", capital: "Taipei", population: 23.5 }, " " )  // false`, () => {
  expect(objectHasProperty({name: "Taiwan", capital: "Taipei", population: 23.5}, " ")).eq(false);
});

it(`objectHasProperty({ first: "", last: "" }, "")  // false`, () => {
  expect(objectHasProperty({first: "John", last: "Doe"}, "")).eq(false);
});

it(`objectHasProperty({}, "something")  // false`, () => {
  expect(objectHasProperty({}, "something")).eq(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
