// NAMEEN:
// NAMERU:Перевернуть слова не изменяя их порядок

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `twoWords` принимает строку, состоящую из двух слов, разделенных пробелом.

Необходимо перевернуть каждое слово в строке, не изменяя порядок слов. Пробел должен остаться между словами.

Если строка пустая, то вернуть пустую строку.


В коде ниже есть 3 ошибки. Найдите их и исправьте.
Цикл и код ниже него не содержат ошибок.
Разберитесь что происходит в каждой строке и почему.

Примеры запуска функции:
```javascript
twoWords('yerg etihw') // 'grey white'
twoWords('eulb yks')   // 'blue sky'
twoWords('789')        // '987'
twoWords('')           // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
functions twoWords(words){
  const newStr = '';
  let chunk = [''];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === ' ') {
      newStr += chunk + ' ';
      chunk = '';
    } else {
      chunk = words[i] + chunk;
    }
  }
  newStr += chunk;
  return newStr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function twoWords(words){
  let newStr = '';
  let chunk = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i] === ' ') {
      newStr += chunk + ' ';
      chunk = '';
    } else {
      chunk = words[i] + chunk;
    }
  }
  newStr += chunk;
  return newStr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function twoWords', () => {
  expect(twoWords).to.be.a('function');
});

it("twoWords('olleH dlroW') returns 'Hello World'", () => {
  expect(twoWords('olleH dlroW')).to.be.equal('Hello World');
});

it("twoWords('avaJ tpircS') returns 'Java Script'", () => {
  expect(twoWords('avaJ tpircS')).to.be.equal('Java Script');
});

it("twoWords('red blue') returns 'der eulb'", () => {
  expect(twoWords('red blue')).to.be.equal('der eulb');
});

it("twoWords('123') returns '321'", () => {
  expect(twoWords('123')).to.be.equal('321');
});

it("twoWords('') returns ''", () => {
  expect(twoWords('')).to.be.equal('');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
