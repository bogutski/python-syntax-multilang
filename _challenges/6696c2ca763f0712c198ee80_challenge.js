// NAMEEN:
// NAMERU:Перевернуть строку с одним словом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseAWord`, которая принимает строку с одним словом и возвращает перевернутое слово.

Примеры запуска функции:
```javascript
reverseAWord('olleh') // 'hello'
reverseAWord('dlrow') // 'world'
reverseAWord('98765') // '56789'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseAWord(word){
  let revWord = '';
  for(let i = word.length - 1; i >= 0; i--){
    revWord += word[i];
  }
  return revWord;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseAWord', () => {
  expect(reverseAWord).to.be.a('function');
});

it("reverseAWord('olleh') returns 'hello'", () => {
  expect(reverseAWord('olleh')).to.equal('hello');
});

it("reverseAWord('dlrow') returns 'world'", () => {
  expect(reverseAWord('dlrow')).to.equal('world');
});

it("reverseAWord('12345') returns '54321'", () => {
  expect(reverseAWord('12345')).to.equal('54321');
});

it("reverseAWord('apple123!@#') returns '#@!321elppa'", () => {
  expect(reverseAWord('apple123!@#')).to.equal('#@!321elppa');
});

it("reverseAWord('') returns ''", () => {
  expect(reverseAWord('')).to.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
