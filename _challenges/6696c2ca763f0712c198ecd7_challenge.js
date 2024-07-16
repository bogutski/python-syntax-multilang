// NAMEEN:
// NAMERU:Количество букв в верхнем регистре

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numOfUpperCase`, которая принимает строку и возвращает количество символов в верхнем регистре.

Строка будет содержать только буквы, без пробелов, цифр и специальных символов.

Если строка не содержит символов в верхнем регистре или пустая, функция должна вернуть 0.

Примеры запуска функции:
```javascript
numOfUpperCase('Hi')   // 1
numOfUpperCase('blue') // 0
numOfUpperCase('')     // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numOfUpperCase(str){
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i].toUpperCase()){
      count++;
    }
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numOfUpperCase', () => {
  expect(numOfUpperCase).to.be.a('function');
});

it("numOfUpperCase('hello') returns 0", () => {
  expect(numOfUpperCase('hello')).to.equal(0);
});

it("numOfUpperCase('ABcdEFg') returns 4", () => {
  expect(numOfUpperCase('ABcdEFg')).to.equal(4);
});

it("numOfUpperCase('bAnAnA') returns 3", () => {
  expect(numOfUpperCase('bAnAnA')).to.equal(3);
});

it("numOfUpperCase('summer') returns 0", () => {
  expect(numOfUpperCase('summer')).to.equal(0);
});

it("numOfUpperCase('') returns 0", () => {
  expect(numOfUpperCase('')).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
