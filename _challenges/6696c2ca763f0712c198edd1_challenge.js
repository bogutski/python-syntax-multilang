// NAMEEN:
// NAMERU:Удалить дубликаты слов независимо от регистра и знаков препинания

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `deleteDuplicates` принимает строку и возвращает строку, в которой удалены все повторяющиеся слова.

Слова могут быть написаны в разных регистрах, но считаются одинаковыми, поэтому надо привести все слова к нижнему регистру.

Слова могут содержать знаки препинания, `!?.,;:` которые не надо учитывать при сравнении.

Например:
```javascript
const str= 'Hello, Hello! Hello?';
```
Данная строка содержит дубликаты слова `hello`, хотя у каждого слова разный знак препинания.
Результатом получения такой строки должно быть `hello`.

Слова в новой строке должны быть разделены пробелом.

Примеры запуска функции:
```javascript
deleteDuplicates('Hello, world!'); // 'hello world'
deleteDuplicates('Hello, world! Hello! world?'); // 'hello world'
deleteDuplicates('a, b c a d! d? d t'); // 'a b c d t'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deleteDuplicates(str) {
  str = str.toLowerCase();
  let result = '';
  const symbols = '!?.,;:'
  let word = '';
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && symbols.includes(str[i]) === false) word += str[i];

    if (str[i] === ' ' || i === str.length - 1) {
      if (word && !obj[word]) {
        obj[word] = 1;

        if (result) result += ' ' + word;
        else result = word;
      }
      word = '';
    }
  }
  return result
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function deleteDuplicates', () => {
  expect(deleteDuplicates).to.be.a('function');
});

it('deleteDuplicates("Hello, world!") should return "hello world"', () => {
  expect(deleteDuplicates('Hello, world!')).to.equal('hello world');
});

it('deleteDuplicates("Hello, world! Hello! world?") should return "hello world"', () => {
  expect(deleteDuplicates('Hello, world! Hello! world?')).to.equal('hello world');
});

it('deleteDuplicates("a, b c a d! d? d t") should return "a b c d t"', () => {
  expect(deleteDuplicates('a, b c a d! d? d t')).to.equal('a b c d t');
});

it('deleteDuplicates("") should return ""', () => {
  expect(deleteDuplicates('')).to.equal('');
});

it('deleteDuplicates("Hello, Hello! HELLO?") should return "hello"', () => {
  expect(deleteDuplicates('Hello, Hello! HELLO?')).to.equal('hello');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
