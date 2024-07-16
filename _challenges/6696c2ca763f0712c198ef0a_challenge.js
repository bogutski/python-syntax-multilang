// NAMEEN:
// NAMERU:Очистить строку от дубликатов слов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `findDuplicates` принимает строку.

В строке могут быть слова, разделенные пробелами или дефисами. Все слова написаны в нижнем регистре.

Одинаковые слова могут быть написаны через дефис, при этом они всё равно считаются дубликатами, а не единым словом.

Необходимо очистить строку от дубликатов слов и вернуть строку, в которой слова разделены пробелами.

Примеры запуска функции:
```javascript
findDuplicates('hide-and-seek up-down up and down'); // 'hide and seek up down'
findDuplicates('start-stop and stop and run'); // 'start stop and run'
findDuplicates('javascript'); // 'javascript'
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findDuplicates(str) {
  let result = '';
  let word = '';
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && str[i] !== '-') word += str[i];

    if (str[i] === ' ' || str[i] === '-' || i === str.length - 1) {
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
it('Created function findDuplicates', () => {
  expect(findDuplicates).to.be.a('function');
});

it('findDuplicates("hide-and-seek up-down up and down") should return "hide and seek up down"', () => {
  expect(findDuplicates('hide-and-seek up-down up and down')).to.equal('hide and seek up down');
});

it('findDuplicates("") should return ""', () => {
  expect(findDuplicates('')).to.equal('');
});

it('findDuplicates("start-stop and stop and run") should return "start stop and run"', () => {
  expect(findDuplicates('start-stop and stop and run')).to.equal('start stop and run');
});

it('findDuplicates("javascript") should return "javascript"', () => {
  expect(findDuplicates('javascript')).to.equal('javascript');
});

it('findDuplicates("javascript-javascript") should return "javascript"', () => {
  expect(findDuplicates('javascript-javascript')).to.equal('javascript');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
