// NAMEEN:
// NAMERU:Исправьте код по удалению дубликатов слов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция findTheSameWord принимает строку. В строке могут быть дубликаты каких-то слов.

Функция должна вернуть строку, в которой будут все слова из строки, но без дубликатов. Слова должны быть разделены дефисом.

Примеры запуска функции:
```javascript
findTheSameWord('hello hello world') // 'hello-world'
findTheSameWord('good morning good world from good people') // 'good-morning-world-from-people'
```

Исправьте код, чтобы функция работала правильно.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findTheSameWord(str) {
  const obj = {};
  const result = '';
  const word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') word += str[i]
    if (str[i] === ' ' && i === str.length - 1) {
      if (word && !obj.hasOwnProperty[word]) {
        obj[word] = 1;
        if (result) result += ' ' + word;
        else result += word;
      }
      word = '';
    }
  }
  return 'result'
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findTheSameWord(str) {
  const obj = {};
  let result = '';
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') word += str[i]
    if (str[i] === ' ' || i === str.length - 1) {
      if (word && !obj.hasOwnProperty([word])) {
        obj[word] = 1;
        if (result) result += '-' + word;
        else result += word;
      }
      word = '';
    }
  }
  return result
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findTheSameWord', () => {
  expect(findTheSameWord).to.be.a('function');
});

it('findTheSameWord("hello hello world") should return "hello-world"', () => {
  expect(findTheSameWord('hello hello world')).to.equal('hello-world');
});

it('findTheSameWord("good morning good world from good people") should return "good-morning-world-from-people"', () => {
  expect(findTheSameWord('good morning good world from good people')).to.equal('good-morning-world-from-people');
});

it('findTheSameWord("hello world") should return "hello-world"', () => {
  expect(findTheSameWord('hello world')).to.equal('hello-world');
});

it('findTheSameWord("how to find find duplicates duplicates") should return "how-to-find-duplicates"', () => {
  expect(findTheSameWord('how to find find duplicates duplicates')).to.equal('how-to-find-duplicates');
});

it('findTheSameWord("") should return ""', () => {
  expect(findTheSameWord('')).to.equal('');
});

it('findTheSameWord("duplicate") should return "duplicate"', () => {
  expect(findTheSameWord('duplicate')).to.equal('duplicate');
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
