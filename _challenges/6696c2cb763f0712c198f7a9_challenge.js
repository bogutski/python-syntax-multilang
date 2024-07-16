// NAMEEN:
// NAMERU:Проверка наличия значений в объекте

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `checkObjectValues`, которая принимает объект и два значения.

Функция должна преобразовать объект в массив его значений и затем проверить, содержатся ли оба значения в массиве.

Функция должна вернуть соответствующее сообщение:

* Если оба значения содержатся в массиве: `Object includes both values`,
* Если оба значения НЕ содержатся в массиве: `Object is missing both values`,
* Если массив содержатся только первое значение: `Object includes only first value: <first_value>`,
* Если массив содержатся только второе значение: `Object includes only second value: <second_value>`.


Примеры запуска функции:
```javascript
checkObjectValues({ name: 'Alice', age: 25, isStudent: true }, 'Alice', true));
// Object includes both values

checkObjectValues({ name: 'Bob', age: 30, isStudent: false }, 'Alice', true));
// Object is missing both values

checkObjectValues({ name: 'Charlie', age: 35, isStudent: true }, 'Charlie', false));
// Object includes only first value: Charlie

checkObjectValues({ name: 'Dave', age: 40, isStudent: false }, 'Alice', false));
// Object includes only second value: false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkObjectValues(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkObjectValues(object, value1, value2) {
  const toArray = Object.values(object)
  if(toArray.includes(value1) && toArray.includes(value2)) return `Object includes both values`
  else if(toArray.includes(value1)) return `Object includes only first value: ${value1}`
  else if(toArray.includes(value2)) return `Object includes only second value: ${value2}`
  else return 'Object is missing both values';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkObjectValues', () => {
  expect(checkObjectValues).to.be.a('function');
});

it("Function checkObjectValues should include includes method", () => {
  const result = checkObjectValues.toString();
  expect(result).to.include('.includes(');
});

it('checkObjectValues({ name: "Alice", age: 25, isStudent: true }, "Alice", true) should return "Object includes both values"', function() {
  expect(checkObjectValues({ name: "Alice", age: 25, isStudent: true }, "Alice", true)).to.equal("Object includes both values");
});

it('checkObjectValues({ name: "Bob", age: 30, isStudent: false }, "Alice", true) should return "Object is missing both values"', function() {
  expect(checkObjectValues({ name: "Bob", age: 30, isStudent: false }, "Alice", true)).to.equal("Object is missing both values");
});

it('checkObjectValues({ name: "Charlie", age: 35, isStudent: true }, "Charlie", false) should return "Object includes only first value: Charlie"', function() {
  expect(checkObjectValues({ name: "Charlie", age: 35, isStudent: true }, "Charlie", false)).to.equal("Object includes only first value: Charlie");
});

it('checkObjectValues({ name: "Dave", age: 40, isStudent: false }, "Alice", false) should return "Object includes only second value: false"', function() {
  expect(checkObjectValues({ name: "Dave", age: 40, isStudent: false }, "Alice", false)).to.equal("Object includes only second value: false");
});

it('checkObjectValues({ name: "Eve", age: 45, isStudent: false }, "Eve", true) should return "Object includes only first value: Eve"', function() {
  expect(checkObjectValues({ name: "Eve", age: 45, isStudent: false }, "Eve", true)).to.equal("Object includes only first value: Eve");
});

it('checkObjectValues({ name: "Frank", age: 50, isStudent: true }, "Frank", 50) should return "Object includes both values"', function() {
  expect(checkObjectValues({ name: "Frank", age: 50, isStudent: true }, "Frank", 50)).to.equal("Object includes both values");
});

it('checkObjectValues({ name: "Grace", age: 55, isStudent: true }, "Grace", false) should return "Object includes only first value: Grace"', function() {
  expect(checkObjectValues({ name: "Grace", age: 55, isStudent: true }, "Grace", false)).to.equal("Object includes only first value: Grace");
});

it('checkObjectValues({ name: "Henry", age: 60, isStudent: false }, "John", true) should return "Object is missing both values"', function() {
  expect(checkObjectValues({ name: "Henry", age: 60, isStudent: false }, "John", true)).to.equal("Object is missing both values");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
