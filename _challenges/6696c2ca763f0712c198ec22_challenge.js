// NAMEEN:
// NAMERU:Количество вхождений символа в строку с учетом регистра

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `lowerAndUpperCase`, которая принимает строку и символ и возвращает количество вхождений символа в строку с учетом регистра.

Для подсчета количества вхождений используйте две проверки:
* на равенство символа в нижнем регистре
* на равенство символа в верхнем регистре.

Пример проверки:
```javascript
if(string[i] === el.toLowerCase()) countLowerCase++;
if(string[i] === el.toUpperCase()) countUpperCase++;
```

Функция должна возвращать строку вида: `Number of lowercase is ${countLowerCase} and uppercase is ${countUpperCase}`.

Строка и элемент всегда будут переданы в функцию, не нужно проверять их наличие.

```javascript
lowerAndUpperCase('Hello World!', 'l');  // 'Number of lowercase is 3 and uppercase is 0'
lowerAndUpperCase('Hello WORLD!', 'o');  // 'Number of lowercase is 1 and uppercase is 1'
lowerAndUpperCase('APPLE', 'p');         // 'Number of lowercase is 0 and uppercase is 2'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function lowerAndUpperCase(str, el) {
  let countLowerCase = 0;
  let countUpperCase = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === el.toLocaleString()) countLowerCase++;
    if (str[i] === el.toLocaleUpperCase()) countUpperCase++;
  }
  return `Number of lowercase is ${countLowerCase} and uppercase is ${countUpperCase}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function lowerAndUpperCase', () => {
  expect(lowerAndUpperCase).to.be.a('function');
});

it("lowerAndUpperCase('Hello World!', 'l') should return 'Number of lowercase is 3 and uppercase is 0'", () => {
  expect(lowerAndUpperCase('Hello World!', 'l')).to.be.equal('Number of lowercase is 3 and uppercase is 0');
});

it("lowerAndUpperCase('Hello WORLD!', 'o') should return 'Number of lowercase is 1 and uppercase is 1'", () => {
  expect(lowerAndUpperCase('Hello WORLD!', 'o')).to.be.equal('Number of lowercase is 1 and uppercase is 1');
});

it("lowerAndUpperCase('APPLE', 'p') should return 'Number of lowercase is 0 and uppercase is 2'", () => {
  expect(lowerAndUpperCase('APPLE', 'p')).to.be.equal('Number of lowercase is 0 and uppercase is 2');
});

it("lowerAndUpperCase('abcAbaCaAbBcaaAAbc', 'a') should return 'Number of lowercase is 5 and uppercase is 4'", () => {
  expect(lowerAndUpperCase('abcAbaCaAbBcaaAAbc', 'a')).to.be.equal('Number of lowercase is 5 and uppercase is 4');
});

it("lowerAndUpperCase('abcAbaCaAbBcaaAAbc', 'b') should return 'Number of lowercase is 4 and uppercase is 1'", () => {
  expect(lowerAndUpperCase('abcAbaCaAbBcaaAAbc', 'b')).to.be.equal('Number of lowercase is 4 and uppercase is 1');
});

it("lowerAndUpperCase('abc', 's') should return 'Number of lowercase is 0 and uppercase is 0'", () => {
  expect(lowerAndUpperCase('abc', 's')).to.be.equal('Number of lowercase is 0 and uppercase is 0');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
