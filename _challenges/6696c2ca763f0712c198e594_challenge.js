// NAMEEN:
// NAMERU:Есть ли свойство в объекте, метод `hasOwnProperty`

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `hasProperty`, которая принимает два параметра:

* `object` – объект
* `property` – свойство, которое будет проверяться на наличие в объекте, строка

В решении используйте метод `hasOwnProperty`.

Если свойство `property` присутствует в объекте `object`, то функция должна вернуть `true`, иначе `false`.

Пример запуска функции:
```javascript
hasProperty({ name: 'Alice' }, 'name') // true
hasProperty({ name: 'Toshiba', model: 'Satellite', year: 2015 }, 'color') // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasProperty(object, property) {
  return object.hasOwnProperty(property);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function hasProperty', () => {
  expect(hasProperty).to.be.a('function');
});

it('The function includes the `hasOwnProperty` method', () => {
  expect(hasProperty.toString()).to.include('.hasOwnProperty(');
});

it("The function returns the correct result for the arguments { name: 'Alice', age: 25 }, 'name'", () => {
  expect(hasProperty({ name: 'Alice', age: 25 }, 'name')).eq(true);
});

it("The function returns the correct result for the arguments { name: 'Terminator', model: 'T-800', year: 1984 }, 'color'", () => {
  expect(hasProperty({ name: 'Terminator', model: 'T-800', year: 1984 }, 'color')).eq(
    false,
  );
});

it("The function returns the correct result for the arguments { name: 'Dog', breed: 'Labrador', color: 'black' }, 'breed'", () => {
  expect(hasProperty({ name: 'Dog', breed: 'Labrador', color: 'black' }, 'breed')).eq(
    true,
  );
});

it("The function returns the correct result for the arguments { name: 'Taiwan', capital: 'Taipei', population: 23.5 }, 'size'", () => {
  expect(hasProperty({ name: 'Taiwan', capital: 'Taipei', population: 23.5 }, 'size')).eq(
    false,
  );
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
