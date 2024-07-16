// NAMEEN:
// NAMERU:Повторение в зависимости от регистра последней буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `repeatString`, которая принимает строку.

Пусть функция возьмет последний символ строки и повторит его.

Если последний символ написан в верхнем регистре, то повторить его нужно 3 раза, если в нижнем, то 2 раза.

Пример запуска функции:
```javascript
repeatString('abc'); // 'cc'
repeatString('abС'); // 'CCC'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function repeatString(string) {
  const lastLetter = string[string.length - 1];
  if (lastLetter === lastLetter.toUpperCase()) {
    return lastLetter.repeat(3);
  }
  return lastLetter.repeat(2);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function repeatString', () => {
  expect(repeatString).to.be.a('function');
});

it('Should return "cc" for "abc"', () => {
  expect(repeatString('abc')).to.be.equal('cc');
});

it('Should return "EEE" for "abCcE"', () => {
  expect(repeatString('abCcE')).to.be.equal('EEE');
});

it('Should return "bb" for "bb"', () => {
  expect(repeatString('bb')).to.be.equal('bb');
});

it('Should return "aa" for "a"', () => {
  expect(repeatString('a')).to.be.equal('aa');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
