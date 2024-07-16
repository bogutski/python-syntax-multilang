// NAMEEN:
// NAMERU:Удалить дубликаты из строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `deleteDuplicate` принимает строку и возвращает строку без дубликатов слов.

Слова в новой строке должны быть разделены пробелом.

В конце строки пробела быть не должно.

Примеры запуска функции:
```javascript
deleteDuplicate("i like to like learn i javascript") // "i like to learn javascript"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deleteDuplicate(str) {
  const obj = {};
  let result = '';
  let acc = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') acc += str[i]
    if (str[i] === ' ' || i === str.length - 1) {
      if (acc && !obj[acc]) {
        obj[acc] = 1;
        if (result) result += ' ' + acc;
        else result += acc;
      }
      acc = '';
    }
  }
  return result
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function deleteDuplicate', () => {
  expect(deleteDuplicate).to.be.a('function');
});

it('deleteDuplicate("i like to like learn i javascript") should return "i like to learn javascript"', () => {
  expect(deleteDuplicate('i like to like learn i javascript')).to.equal('i like to learn javascript');
});

it('deleteDuplicate("what what what is going on?") should return "what is going on?"', () => {
  expect(deleteDuplicate('what what what is going on?')).to.equal('what is going on?');
});

it('deleteDuplicate("no duplicates here") should return "no duplicates here"', () => {
  expect(deleteDuplicate('no duplicates here')).to.equal('no duplicates here');
});

it('deleteDuplicate("after i finish i after the course nothing would be difficult") should return "after i finish the course nothing would be difficult"', () => {
  expect(deleteDuplicate('after i finish i after the course nothing would be difficult')).to.equal('after i finish the course nothing would be difficult');
});

it('deleteDuplicate("") should return ""', () => {
  expect(deleteDuplicate('')).to.equal('');
});

it('deleteDuplicate("hello") should return "hello"', () => {
  expect(deleteDuplicate('hello')).to.equal('hello');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
