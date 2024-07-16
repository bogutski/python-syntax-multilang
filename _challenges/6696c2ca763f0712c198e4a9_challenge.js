// NAMEEN:
// NAMERU:Посчитать буквы в строке без учета пробелов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countLetters`, которая принимает строку и возвращает строку вида `String hello has 5 symbols`.

Пример запуска функции:
```javascript
countLetters('hello'); // 'String hello has 5 symbols'
countLetters('  hello     '); // 'String hello has 5 symbols'
countLetters('  hello  world'); // 'String hello world has 12 symbols'
```

Для подсчета удалите пробелы в начале и в конце строки, а затем посчитайте длину строки.

Пробелы внутри строки удалять не нужно, считайте их символами.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countLetters(name) {
  return `String ${name.trim()} has ${name.trim().length} symbols`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countLetters', () => {
  expect(countLetters).to.be.a('function');
});

it('countLetters("hello") should return "String hello has 5 symbols"', () => {
  expect(countLetters('hello')).to.be.equal('String hello has 5 symbols');
});

it('countLetters("  hello     ") should return "String hello has 5 symbols"', () => {
  expect(countLetters('  hello     ')).to.be.equal('String hello has 5 symbols');
});

it('countLetters("  hello  world") should return "String hello world has 12 symbols"', () => {
  expect(countLetters('  hello  world')).to.be.equal('String hello  world has 12 symbols');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
