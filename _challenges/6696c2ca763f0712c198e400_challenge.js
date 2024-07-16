// NAMEEN:
// NAMERU:Перевернуть слово из пяти букв

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseWord`, которая принимает строку из пяти букв и возвращает ее перевернутую версию.

Примеры запуска функции:
```javascript
reverseWord('abcde'); // 'edcba'
reverseWord('PASV!'); // '!VSAP'
reverseWord('12345'); // '54321'
```

Используйте конкатенацию строк и обращайтесь к каждому символу строки по индексу.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseWord(w) {
  return w[4] + w[3] + w[2] + w[1] + w[0];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseWord', () => {
  expect(reverseWord).to.be.a('function');
});

it('reverseWord("abcde") should return "edcba"', () => {
  expect(reverseWord('abcde')).to.equal('edcba');
});

it('reverseWord("PASV!") should return "!VSAP"', () => {
  expect(reverseWord('PASV!')).to.equal('!VSAP');
});

it('reverseWord("12345") should return "54321"', () => {
  expect(reverseWord('12345')).to.equal('54321');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
