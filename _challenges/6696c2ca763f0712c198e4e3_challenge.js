// NAMEEN:
// NAMERU:Искать вхождение начиная с третьего слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `search`, которая принимает две строки и возвращает индекс вхождения второй строки в первую, начиная поиск с третьего слова.

Слова разделяются пробелами.

Найдите индекс первого пробела в строке и используйте его как начало поиска для поиска индекса второго пробела.

Потом используйте найденный индекс второго пробела как начало поиска для подстроки.

Приводить строки к единому регистру не нужно.

Примеры запуска функции:
```javascript
search('Hello wonderful world', 'o'); // 17
search('Hello wonderful world', 'l'); // 19
search('Hello wonderful world', 'e'); // -1
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
  const secondSpaceIndex = string.indexOf(' ', spaceIndex + 1);
  return string.indexOf(substring, secondSpaceIndex);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function search', () => {
  expect(search).to.be.a('function');
});

it('search("Hello wonderful world", "o") should return 17', () => {
  expect(search('Hello wonderful world', 'o')).to.be.equal(17);
});

it('search("Hello wonderful world", "l") should return 19', () => {
  expect(search('Hello wonderful world', 'l')).to.be.equal(19);
});

it('search("Hello wonderful world", "e") should return -1', () => {
  expect(search('Hello wonderful world', 'e')).to.be.equal(-1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
