// NAMEEN:
// NAMERU:Удалить дубликаты слов, включая цифры

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkDuplicates` принимает строку, которая содержит слова, числа и разные символы.

Нужно удалить все дубликаты и вернуть сроку состоящую из уникальных слов, чисел и символов, разделенных пробелом.

Пример запуска функции:
```javascript
checkDuplicates("1 2 1 2 hello hello 1 1 1") // "1 2 hello"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkDuplicates(str) {
  let result = '';
  let word = '';
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') word += str[i];

    if (str[i] === ' ' || i === str.length - 1) {
      if (word && !obj[word]) {
        obj[word] = 1;
        result += word + ' ';
      }
      word = '';
    }
  }
  return result.trim()
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkDuplicates', () => {
  expect(checkDuplicates).to.be.a('function');
});

it('checkDuplicates("1 2 1 2 hello hello 1 1 1") should returns "1 2 hello"', () => {
  expect(checkDuplicates('1 2 1 2 hello hello 1 1 1')).to.be.equal('1 2 hello');
});

it('checkDuplicates("hello JS 2023") should return "hello JS 2023"', () => {
  expect(checkDuplicates('hello JS 2023')).to.be.equal('hello JS 2023');
});

it('checkDuplicates("hello") should return "hello"', () => {
  expect(checkDuplicates('hello')).to.be.equal('hello');
});

it('checkDuplicates("") should return ""', () => {
  expect(checkDuplicates('')).to.be.equal('');
});

it('checkDuplicates("1 ? ? JS coding JS") should return "1 ? JS coding"', () => {
  expect(checkDuplicates('1 ? ? JS coding JS')).to.be.equal('1 ? JS coding');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
