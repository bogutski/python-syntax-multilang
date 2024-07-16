// NAMEEN:
// NAMERU:Является ли массив палиндромом?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция checkArray принимает один аргумент - массив arr.

Массив состоит из одного элемента - строки.

Массив не может быть пустым

Строка всегда написана в нижнем регистре.

Необходимо проверить является ли строка палиндромом. И вернуть true или false.

Примеры запуска функции:
```javascript
checkArray(["madam"]) // true
checkArray(["hello"]) // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkArray(arr) {
  let str = '';
  for (let i = arr[0].length - 1; i >= 0; i--) {
    str += arr[0][i];
  }
  return str === arr[0]
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkArray', () => {
  expect(checkArray).to.be.a('function');
});

it('checkArray(["madam"]) should return true', () => {
  expect(checkArray(["madam"])).to.equal(true);
});

it('checkArray(["hello"]) should return false', () => {
  expect(checkArray(["hello"])).to.equal(false);
});

it('checkArray(["racecar"]) should return true', () => {
  expect(checkArray(["racecar"])).to.equal(true);
});

it('checkArray(["madam eye madam"]) should return true', () => {
  expect(checkArray(["madam eye madam"])).to.equal(true);
});

it('checkArray(["hello world"]) should return false', () => {
  expect(checkArray(["hello world"])).to.equal(false);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
