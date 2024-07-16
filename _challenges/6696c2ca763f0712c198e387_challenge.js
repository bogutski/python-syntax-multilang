// NAMEEN:
// NAMERU:Конкатенация строк. Запятые между словами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `concat`, которая принимает три параметра: `str1`, `str2`, `str3`.

При вызове функция должна возвращать строку, состоящую из трех строк, разделенных запятой и пробелом. Точка в конце строки.

Примеры запуска функции:
```javascript
concat('Hello', 'world', 'JavaScript'); // 'Hello, world, JavaScript.'
concat('I', 'love', 'JS'); // 'I, love, JS.'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function concat(str1, str2, str3) {
  return str1 + ', ' + str2 + ', ' + str3 + '.';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function concat', () => {
  expect(concat).to.be.a('function');
});

it('concat("Hello", "world", "JavaScript") should return "Hello, world, JavaScript."', () => {
  expect(concat('Hello', 'world', 'JavaScript')).to.equal('Hello, world, JavaScript.');
});

it('concat("I", "love", "JS") should return "I, love, JS."', () => {
  expect(concat('I', 'love', 'JS')).to.equal('I, love, JS.');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
