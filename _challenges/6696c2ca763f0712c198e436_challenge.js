// NAMEEN:
// NAMERU:Сколько букв в верхнем и нижнем регистре в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countUpperLower`, которая принимает 1 параметр – строку из 5-ти букв.

Примеры запуска функции:
```javascript
countUpperLower('aBcDe') // 'Upper: 2, Lower: 3'
countUpperLower('aBcDE') // 'Upper: 3, Lower: 2'
countUpperLower('aBcDeF') // 'Wrong string'
countUpperLower('aBc') // 'Wrong string'
```

Из примера видно, что функция должна вернуть строку вида `Upper: 2, Lower: 3`, где `2` и `3` – количество букв в верхнем и нижнем регистре соответственно.

Если в функцию передана строка не из 5-ти символов, то функция должна вернуть строку `Wrong string`.

В функцию всегда будут предаваться буквы английского алфавита.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countUpperLower(str) {
  if (str.length !== 5) {
    return 'Wrong string';
  }

  let upper = 0;
  let lower = 0;

  if (str[0] === str[0].toUpperCase()) upper++;
  else lower++;

  if (str[1] === str[1].toUpperCase()) upper++;
  else lower++;

  if (str[2] === str[2].toUpperCase()) upper++;
  else lower++;

  if (str[3] === str[3].toUpperCase()) upper++;
  else lower++;

  if (str[4] === str[4].toUpperCase()) upper++;
  else lower++;

  return `Upper: ${upper}, Lower: ${lower}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countUpperLower', () => {
  expect(countUpperLower).to.be.a('function');
});

it('countUpperLower("aBcDe") should return "Upper: 2, Lower: 3"', () => {
  expect(countUpperLower('aBcDe')).to.be.equal('Upper: 2, Lower: 3');
});

it('countUpperLower("aBcDE") should return "Upper: 3, Lower: 2"', () => {
  expect(countUpperLower('aBcDE')).to.be.equal('Upper: 3, Lower: 2');
});

it('countUpperLower("aBcDeF") should return "Wrong string"', () => {
  expect(countUpperLower('aBcDeF')).to.be.equal('Wrong string');
});

it('countUpperLower("aBc") should return "Wrong string"', () => {
  expect(countUpperLower('aBc')).to.be.equal('Wrong string');
});

it('countUpperLower("aBcDe") should return "Upper: 2, Lower: 3"', () => {
  expect(countUpperLower('aBcDe')).to.be.equal('Upper: 2, Lower: 3');
});

it('countUpperLower("aBcDE") should return "Upper: 3, Lower: 2"', () => {
  expect(countUpperLower('aBcDE')).to.be.equal('Upper: 3, Lower: 2');
});

it('countUpperLower("aBcDeF") should return "Wrong string"', () => {
  expect(countUpperLower('aBcDeF')).to.be.equal('Wrong string');
});

it('countUpperLower("aBc") should return "Wrong string"', () => {
  expect(countUpperLower('aBc')).to.be.equal('Wrong string');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
