// NAMEEN:
// NAMERU:Искать вхождение начиная со второго слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `search`, которая принимает две строки и возвращает индекс вхождения второй строки в первую, начиная поиск со второго слова.

Слова разделяются пробелами.

Найдите индекс первого пробела в строке и используйте его как начало поиска.

Если вторая строка повторяется, функция должна возвращать индекс первого вхождения.

Примеры запуска функции:
```javascript
search('Hello world', 'o'); // 7
search('Hello world', 'l'); // 9
search('Hello world', 'x'); // -1
```

Если строка не найдена, функция должна возвращать `-1`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function search(string, substring) {
  const spaceIndex = string.indexOf(' ');
  return string.indexOf(substring, spaceIndex);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function search', () => {
  expect(search).to.be.a('function');
});

it('search("Hello world", "o") should return 7', () => {
  expect(search('Hello world', 'o')).to.be.equal(7);
});

it('search("Hello world", "l") should return 9', () => {
  expect(search('Hello world', 'l')).to.be.equal(9);
});

it('search("Hello world", "x") should return -1', () => {
  expect(search('Hello world', 'x')).to.be.equal(-1);
});

it('search("Hello wooorld", "o") should return 7', () => {
  expect(search('Hello wooorld', 'o')).to.be.equal(7);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
