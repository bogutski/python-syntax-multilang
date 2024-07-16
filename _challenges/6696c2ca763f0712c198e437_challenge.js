// NAMEEN:
// NAMERU:Инвертировать регистр буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `invertCase`, которая принимает 1 параметр – строку из 4-х букв.

Функция должна возвращать строку, в которой каждая буква заменена на противоположный регистр.

Примеры запуска функции:
```javascript
invertCase('ABCD') // 'abcd'
invertCase('AbCd') // 'aBcD'
invertCase('aBcD') // 'AbCd'

invertCase('aBcDq') // 'Long string'
```

Как вы поняли из примеров, функция должна работать со строками только из 4-х букв.

Если строка больше 4-х букв, то функция должна возвращать строку 'Long string'.

Используйте конкатенацию строк для решения задачи. Пример:
```javascript
let str = 'abc';
str = str + '123';
console.log(str); // 'abc123'
str = str + '456';
console.log(str); // 'abc123456'
```

или более короткий вариант:
```javascript
let str = 'abc';
str += '123';
console.log(str); // 'abc123'
str += '456';
console.log(str); // 'abc123456'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function invertCase(str) {
  if (str.length > 4) {
    return 'Long string';
  }

  let result = '';

  if (str[0] === str[0].toUpperCase()) result += str[0].toLowerCase();
  else result += str[0].toUpperCase();

  if (str[1] === str[1].toUpperCase()) result += str[1].toLowerCase();
  else result += str[1].toUpperCase();

  if (str[2] === str[2].toUpperCase()) result += str[2].toLowerCase();
  else result += str[2].toUpperCase();

  if (str[3] === str[3].toUpperCase()) result += str[3].toLowerCase();
  else result += str[3].toUpperCase();

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function invertCase', () => {
  expect(invertCase).to.be.a('function');
});

it('invertCase("ABCD") should return "abcd"', () => {
  expect(invertCase('ABCD')).to.be.equal('abcd');
});

it('invertCase("aaBb") should return "AAbB"', () => {
  expect(invertCase('aaBb')).to.be.equal('AAbB');
});

it('invertCase("AbCd") should return "aBcD"', () => {
  expect(invertCase('AbCd')).to.be.equal('aBcD');
});

it('invertCase("aBcD") should return "AbCd"', () => {
  expect(invertCase('aBcD')).to.be.equal('AbCd');
});

it('invertCase("aBcDq") should return "Long string"', () => {
  expect(invertCase('aBcDq')).to.be.equal('Long string');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
