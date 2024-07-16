// NAMEEN:
// NAMERU:Повторить в зависимости от регистра первой буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `repeatString`, которая принимает строку.

Пусть функция возьмет первый символ строки и повторит его.

Если первый символ написан в верхнем регистре, то повторить его нужно 3 раза, если в нижнем, то 2 раза.


Пример запуска функции:
```javascript
repeatString('abc'); // 'aa'
repeatString('Abc'); // 'AAA'
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
  const firstLetter = string[0];
  if (firstLetter === firstLetter.toUpperCase()) {
    return firstLetter.repeat(3);
  }
  return firstLetter.repeat(2);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function repeatString', () => {
  expect(repeatString).to.be.a('function');
});

it('Should return "aa" for "abc"', () => {
  expect(repeatString('abc')).to.be.equal('aa');
});

it('Should return "AAA" for "Abc"', () => {
  expect(repeatString('Abc')).to.be.equal('AAA');
});

it('Should return "bb" for "bb"', () => {
  expect(repeatString('bb')).to.be.equal('bb');
});

it('Should return "BBB" for "BBb"', () => {
  expect(repeatString('BBb')).to.be.equal('BBB');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
