// NAMEEN:
// NAMERU:Преобразование в булево значение с помощью двойного отрицания

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `toBoolean`, которая принимает одно значение и преобразует его в `boolean`.

Используйте: `!!`.

Пример запуска функции:
```javascript
toBoolean(1);    // true
toBoolean(0);    // false
toBoolean('');   // false
toBoolean(' ');  // true
toBoolean(true); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function toBoolean(value) {
  return !!value;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function toBoolean', () => {
  expect(toBoolean).to.be.a('function');
} );

it('toBoolean(true) should return true', () => {
  expect(toBoolean(true)).to.equal(true);
} );

it('toBoolean(false) should return false', () => {
  expect(toBoolean(false)).to.equal(false);
} );

it('toBoolean(1) should return true', () => {
  expect(toBoolean(1)).to.equal(true);
});

it('toBoolean(0) should return false', () => {
  expect(toBoolean(0)).to.equal(false);
});

it('toBoolean("") should return false', () => {
  expect(toBoolean('')).to.equal(false);
});

it('toBoolean(" ") should return true', () => {
  expect(toBoolean(' ')).to.equal(true);
});

it('function should contain !!', function () {
  expect(toBoolean.toString().indexOf('!!')).to.not.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
