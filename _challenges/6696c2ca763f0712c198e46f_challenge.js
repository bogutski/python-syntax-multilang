// NAMEEN:
// NAMERU:Повторить в зависимости от четности длины строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `repeatString`, которая принимает строку.

Пусть функция возьмет первый символ строки, переведет его в верхний регистр и повторит его.

Если длина строки четная, то повторить его нужно 3 раза, если нечетная, то 2 раза.

Четность длины строки можно проверить с помощью оператора `%` (остаток от деления).

Четное число при делении на `2` дает остаток `0`, нечетное - `1`.

Примеры запуска функции:
```javascript
repeatString('abc'); // 'AA'
repeatString('abcd'); // 'AAA'
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
  if (string.length % 2 === 0) {
    return firstLetter.toUpperCase().repeat(3);
  }
  return firstLetter.toUpperCase().repeat(2);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function repeatString', () => {
  expect(repeatString).to.be.a('function');
});

it('repeatString("abc") should return "AA"', () => {
  expect(repeatString('abc')).to.be.equal('AA');
});

it('repeatString("abcd") should return "AAA"', () => {
  expect(repeatString('abcd')).to.be.equal('AAA');
});

it('repeatString("Fbcde") should return "FF"', () => {
  expect(repeatString('Fbcde')).to.be.equal('FF');
});

it('repeatString("wbcdef") should return "WWW"', () => {
  expect(repeatString('wbcdef')).to.be.equal('WWW');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
