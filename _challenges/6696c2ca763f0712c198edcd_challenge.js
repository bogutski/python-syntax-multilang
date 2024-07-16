// NAMEEN:
// NAMERU:Найти дубликаты и удалить их независимо от регистра

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `findAndDelete` принимает строку содержащую слова в верхнем или нижнем регистре.

Слова считаются дублирующимися, если они встречаются в строке более одного раза не зависимо от регистра написания.

Функция должна вернуть строку, из которой удалены все слова, встречающиеся в исходной строке более одного раза.

Слова в возвращаемой строке должны быть разделены одним пробелом.

Пример запуска функции:
```javascript
`findAndDelete("Hello hello Abra abra HELLO")` должна вернуть `"hello abra"`.
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findAndDelete(str) {
  str = str.toLowerCase();
  let result = '';
  let word = '';
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') word += str[i];

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
it('Created function findAndDelete', () => {
  expect(findAndDelete).to.be.a('function');
});

it('findAndDelete("Hello hello Abra abra HELLO") should return "hello abra"', () => {
  expect(findAndDelete('Hello hello Abra abra HELLO')).to.equal('hello abra');
});

it('findAndDelete("Hello") should return "hello"', () => {
  expect(findAndDelete('Hello')).to.equal('hello');
});

it('findAndDelete("") should return ""', () => {
  expect(findAndDelete('')).to.equal('');
});

it('findAndDelete("JS js js JS") should return "js"', () => {
  expect(findAndDelete('JS js js JS')).to.equal('js');
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
