// NAMEEN:
// NAMERU:Найти и вернуть дубликаты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `returnDuplicates` принимает строку и возвращает новую строку, содержащую все слова, которые повторяются в исходной строке.

Слова в возвращаемой строке должны быть разделены пробелом. Если в строке нет повторяющихся слов, функция должна вернуть пустую строку.

Примеры запуска функции:
```javascript
returnDuplicates("hello world hello code") // "hello"
returnDuplicates("one two three one two three four") // "one two three"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function returnDuplicates(str) {
  const obj = {};
  let acc = '';
  let duplicate = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') acc += str[i]
    if (str[i] === ' ' || i === str.length - 1) {
      if (acc && !obj[acc]) obj[acc] = 1;
      else duplicate += acc + ' ';
      acc = '';
    }
  }
  return duplicate.trim()
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function returnDuplicates', () => {
  expect(returnDuplicates).to.be.a('function');
});

it('returnDuplicates("hello world hello code") returns "hello"', () => {
  expect(returnDuplicates('hello world hello code')).to.equal('hello');
});

it('returnDuplicates("one two three one two three four") returns "one two three"', () => {
  expect(returnDuplicates('one two three one two three four')).to.equal('one two three');
});

it('returnDuplicates("this is a test this is a test") returns "this is a test"', () => {
  expect(returnDuplicates('this is a test this is a test')).to.equal('this is a test');
});

it('returnDuplicates("one two three four five six seven eight nine ten") returns ""', () => {
  expect(returnDuplicates('one two three four five six seven eight nine ten')).to.equal('');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
