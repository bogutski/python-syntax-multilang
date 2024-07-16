// NAMEEN:
// NAMERU:Имеется ли свойство в объекте?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `hasProperty` принимает два параметра:
* `obj` – объект, который необходимо проверить;
* `key` – строка, ключ, который необходимо проверить.

Функция должна вернуть `true`, если объект содержит ключ, и `false`, если нет.

Пример запуска функции:
```javascript
hasProperty({ name: "Helen", lastName: "Rock" }, "lastName")  // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasProperty(obj, key){
  return key in obj
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function hasProperty', () => {
  expect(hasProperty).to.be.a('function');
});

it("The function includes the `in` operator", () => {
  expect(hasProperty.toString()).to.include(" in ");
});

it(`hasProperty({ name: "Helen", lastName: "Rock" }, "lastName")  // true`, () => {
  expect(hasProperty({ name: "Helen", lastName: "Rock" }, "lastName")).eq(true);
});

it(`hasProperty({ name: "Helen", lastName: "Rock" }, "age")  // false`, () => {
    expect(hasProperty({ name: "Helen", lastName: "Rock" }, "age")).eq(false);
});

it(`hasProperty({ name: "Jonny", lastName: "Cash" }, "name")  // true`, () => {
    expect(hasProperty({ name: "Jonny", lastName: "Cash" }, "name")).eq(true);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
