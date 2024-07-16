// NAMEEN:
// NAMERU:Проверка наличия свойств в объекте

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `keyInObject`, которая принимает объект и три ключа.

Функция должна вернуть объект, с ключами: `key1`, `key2`, `key3`, и значениями `true`, если ключ есть в объекте, и `false`, если ключа нет.

Пример запуска функции:
```javascript
keyInObject({ make: 'Ford', year: 2020, color: 'blue' }, 'make', 'model', 'year'); // { key1: true, key2: false, key3: true }
keyInObject({ a: null, b: undefined, c: NaN }, 'a', 'b', 'c'); // { key1: true, key2: true, key3: true }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function keyInObject(object, key1, key2, key3) {
  return {
    key1: object.hasOwnProperty(key1),
    key2: object.hasOwnProperty(key2),
    key3: object.hasOwnProperty(key3),
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function keyInObject', () => {
  expect(keyInObject).to.be.a('function');
});

it('keyInObject({ make: "Ford", year: 2020, color: "blue" }, "make", "model", "year") returns { key1: true, key2: false, key3: true }', () => {
  expect(keyInObject({ make: 'Ford', year: 2020, color: 'blue' }, 'make', 'model', 'year')).to.eql({ key1: true, key2: false, key3: true });
});

it('keyInObject({ a: null, b: undefined, c: NaN }, "a", "b", "c") returns { key1: true, key2: true, key3: true }', () => {
  expect(keyInObject({ a: null, b: undefined, c: NaN }, 'a', 'b', 'c')).to.eql({ key1: true, key2: true, key3: true });
});

it('keyInObject({ num1: 5, num2: 10, car: false }, "num1", "num2", "num3") returns { key1: true, key2: true, key3: false }', () => {
  expect(keyInObject({ num1: 5, num2: 10, car: false }, 'num1', 'num2', 'num3')).to.eql({ key1: true, key2: true, key3: false });
});

it('keyInObject({}, "a", "b", "c") returns { key1: false, key2: false, key3: false }', () => {
  expect(keyInObject({}, 'a', 'b', 'c')).to.eql({ key1: false, key2: false, key3: false });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
