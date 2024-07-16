// NAMEEN:
// NAMERU:Перевернуть слово, кроме последнего символа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseExceptLast`, которая принимает строку и возвращает перевернутую строку, кроме последнего символа.

Если строка пустая, то функция должна вернуть пустую строку.


Примеры запуска функции:
```javascript
reverseExceptLast('tpircSavaJ!'); // 'JavaScript!'
reverseExceptLast('ananab?');     // 'banana?'
reverseExceptLast('hello.');      // 'olleh.'
reverseExceptLast('25$');         // '52$'
reverseExceptLast('');            // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseExceptLast(word){
  let result = '';
  for (let i = 0; i < word.length; i++){
    if(i !== word.length - 1) result = word[i] + result
    else result += word[i];
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseExceptLast', () => {
  expect(reverseExceptLast).to.be.a('function');
});

it("reverseExceptLast('hello!') returns 'olleh!'", () => {
  expect(reverseExceptLast('hello!')).to.equal('olleh!');
});

it("reverseExceptLast('tpircSavaJ!') returns 'JavaScript!'", () => {
  expect(reverseExceptLast('tpircSavaJ!')).to.equal('JavaScript!');
});

it("reverseExceptLast('ananab?') returns 'banana?'", () => {
  expect(reverseExceptLast('ananab?')).to.equal('banana?');
});

it("reverseExceptLast('15$') returns '51$'", () => {
  expect(reverseExceptLast('15$')).to.equal('51$');
});

it("reverseExceptLast('#') returns '#'", () => {
  expect(reverseExceptLast('#')).to.equal('#');
});

it("reverseExceptLast('') returns ''", () => {
  expect(reverseExceptLast('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
