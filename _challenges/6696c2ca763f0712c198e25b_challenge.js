// NAMEEN:
// NAMERU:Открыто в определенные промежутки времени

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isOpen`, которая принимает параметры:
* `time` – время в часах, число от 1 до 12;
* `ampm` – строка, может быть либо `'am'`, либо `'pm'`;

Функция должна возвращать `true`, если время находится в промежутке от 9 до 11 `am` или от 8 до 10 `pm`.

Во всех остальных случаях функция должна возвращать `false`.

Примеры запуска функции:
```javascript
isOpen(8, 'am'); // false
isOpen(9, 'am'); // true
isOpen(10, 'am'); // true
isOpen(11, 'am'); // true
isOpen(12, 'am'); // false
isOpen(7, 'pm'); // false
isOpen(8, 'pm'); // true
isOpen(9, 'pm'); // true
isOpen(10, 'pm'); // true
isOpen(11, 'pm'); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isOpen(time, ampm) {
  if (ampm === 'am') {
    return time >= 9 && time <= 11;
  } else if (ampm === 'pm') {
    return time >= 8 && time <= 10;
  } else {
    return false;
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isOpen', () => {
  expect(isOpen).to.be.a('function');
});

it('isOpen(8, "am") should return false', () => {
  expect(isOpen(8, 'am')).to.be.equal(false);
});

it('isOpen(9, "am") should return true', () => {
  expect(isOpen(9, 'am')).to.be.equal(true);
});

it('isOpen(10, "am") should return true', () => {
  expect(isOpen(10, 'am')).to.be.equal(true);
});

it('isOpen(11, "am") should return true', () => {
  expect(isOpen(11, 'am')).to.be.equal(true);
});

it('isOpen(12, "am") should return false', () => {
  expect(isOpen(12, 'am')).to.be.equal(false);
});

it('isOpen(7, "pm") should return false', () => {
  expect(isOpen(7, 'pm')).to.be.equal(false);
});

it('isOpen(8, "pm") should return true', () => {
  expect(isOpen(8, 'pm')).to.be.equal(true);
});

it('isOpen(9, "pm") should return true', () => {
  expect(isOpen(9, 'pm')).to.be.equal(true);
});

it('isOpen(10, "pm") should return true', () => {
  expect(isOpen(10, 'pm')).to.be.equal(true);
});

it('isOpen(11, "pm") should return false', () => {
  expect(isOpen(11, 'pm')).to.be.equal(false);
});

it('isOpen(12, "pm") should return false', () => {
  expect(isOpen(12, 'pm')).to.be.equal(false);
});

it('isOpen(1, "pm") should return false', () => {
  expect(isOpen(1, 'pm')).to.be.equal(false);
});

it('isOpen(1, "am") should return false', () => {
  expect(isOpen(1, 'am')).to.be.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
