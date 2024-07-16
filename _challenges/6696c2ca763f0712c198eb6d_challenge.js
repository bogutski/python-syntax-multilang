// NAMEEN:
// NAMERU:Перевернуть строку и разделить пробелами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseAndSpaceIt`, которая принимает строку.

Функция должна вернуть строку, в которой все символы перевернуты в обратном порядке и разделены пробелами.

В конце строки не должно быть пробела.

Примеры запуска функции:
```javascript
reverseAndSpaceIt('Hello World!') // должна вернуть '! d l r o W   o l l e H'
reverseAndSpaceIt('apple') // должна вернуть 'e l p p a'
reverseAndSpaceIt('') // должна вернуть ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseAndSpaceIt(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i] + ' ';
  }
  return newStr.trim();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseAndSpaceIt', () => {
  expect(reverseAndSpaceIt).to.be.a('function');
});

it('reverseAndSpaceIt("Hello World!") should return "! d l r o W   o l l e H"', () => {
  expect(reverseAndSpaceIt('Hello World!')).to.equal('! d l r o W   o l l e H');
});

it('reverseAndSpaceIt("Hello") should return "o l l e H"', () => {
  expect(reverseAndSpaceIt('Hello')).to.equal('o l l e H');
});

it('reverseAndSpaceIt("apple") should return "e l p p a"', () => {
  expect(reverseAndSpaceIt('apple')).to.equal('e l p p a');
});

it('reverseAndSpaceIt("banana") should return "a n a n a b"', () => {
  expect(reverseAndSpaceIt('banana')).to.equal('a n a n a b');
});

it('reverseAndSpaceIt("12345679") should return "9 7 6 5 4 3 2 1"', () => {
  expect(reverseAndSpaceIt('12345679')).to.equal('9 7 6 5 4 3 2 1');
});

it('reverseAndSpaceIt("") should return ""', () => {
  expect(reverseAndSpaceIt('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
