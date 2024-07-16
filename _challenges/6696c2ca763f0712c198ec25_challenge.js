// NAMEEN:
// NAMERU:Сколько раз элемент встречается в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stringOfOccurrences`, которая принимает строку и элемент.

Функция должна посчитать количество вхождений элемента в строку и вернуть другую строку:

Например:
```javascript
stringOfOccurrences('abcabcabc', 'a')
```
* Если элемент `a` встречается в строке 3 раза, то функция должна вернуть строку: `'The element "a" occurs in the string 3 times'`
* Если элемент не встречается или какой то параметр не передан, то функция должна вернуть строку: `'There is no such element in the string'`

Все элементы будут переданы в одном регистре.


Примеры запуска функции:
```javascript
stringOfOccurrences('abcabcabc', 'a') // 'The element "a" occurs in the string 3 times'
stringOfOccurrences('apple', 'w') // 'There is no such element in the string'
stringOfOccurrences('', 'p') // 'There is no such element in the string'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringOfOccurrences(str, el) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === el) count++;
  }
  if(count === 0) return 'There is no such element in the string';
  return `The element "${el}" occurs in the string ${count} times`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringOfOccurrences', () => {
  expect(stringOfOccurrences).to.be.a('function');
});

it('stringOfOccurrences("abcabcabc", "a") should return "The element "a" occurs in the string 3 times"', () => {
  expect(stringOfOccurrences("abcabcabc", "a")).to.equal('The element "a" occurs in the string 3 times');
});

it('stringOfOccurrences("abcacabc", "b") should return "The element "b" occurs in the string 2 times"', () => {
  expect(stringOfOccurrences("abcacabc", "b")).to.equal('The element "b" occurs in the string 2 times');
});

it('stringOfOccurrences("apple", "w") should return "There is no such element in the string"', () => {
  expect(stringOfOccurrences("apple", "w")).to.equal('There is no such element in the string');
});

it('stringOfOccurrences("", "p") should return "There is no such element in the string"', () => {
  expect(stringOfOccurrences("", "p")).to.equal('There is no such element in the string');
});

it('stringOfOccurrences("0000000000000000", "0") should return "The element "0" occurs in the string 16 times"', () => {
  expect(stringOfOccurrences("0000000000000000", "0")).to.equal('The element "0" occurs in the string 16 times');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
