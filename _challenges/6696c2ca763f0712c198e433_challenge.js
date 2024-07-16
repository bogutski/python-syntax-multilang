// NAMEEN:
// NAMERU:Строка содержит только нижний регистр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isAllLower`, которая принимает 1 параметр – строку.

Функция должна возвращать `true`, если строка содержит только символы в нижнем регистре, и `false` в противном случае.

Примеры запуска функции:
```javascript
isAllLower('abc') // true
isAllLower('aBc') // false
isAllLower('abc123') // true
isAllLower('abc 123') // true
isAllLower('') // true
```

Для решения задачи переведите строку в нижний регистр и сравните с исходной строкой.

Если они равны, значит строка содержит только символы в нижнем регистре.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAllLower(str) {
  return str === str.toLowerCase();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAllLower', () => {
  expect(isAllLower).to.be.a('function');
});

it('isAllLower("abc") should return true', () => {
  expect(isAllLower('abc')).to.equal(true);
});

it('isAllLower("aBc") should return false', () => {
  expect(isAllLower('aBc')).to.equal(false);
});

it('isAllLower("abc123") should return true', () => {
  expect(isAllLower('abc123')).to.equal(true);
});

it('isAllLower("abc 123") should return true', () => {
  expect(isAllLower('abc 123')).to.equal(true);
});

it('isAllLower("") should return true', () => {
  expect(isAllLower('')).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
