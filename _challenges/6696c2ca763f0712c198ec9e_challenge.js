// NAMEEN:
// NAMERU:Посчитать количество согласных букв в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countOnlyConsonant` принимает строку и должна вернуть количество согласных букв в строке.

Строка содержит только строчные буквы и не содержит пробелы.

Пример запуска функции:
```javascript
countOnlyConsonant('abc') // 2
countOnlyConsonant('aeiou') // 0
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countOnlyConsonant(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {
      count = count + 1
    }
  }
  return count
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countOnlyConsonant', () => {
  expect(countOnlyConsonant).to.be.a('function');
});

it('countOnlyConsonant("a") returns 0', () => {
  expect(countOnlyConsonant('a')).eql(0);
});

it('countOnlyConsonant("b") returns 1', () => {
  expect(countOnlyConsonant('b')).eql(1);
});

it('countOnlyConsonant("ab") returns 1', () => {
  expect(countOnlyConsonant('ab')).eql(1);
});

it('countOnlyConsonant("abc") returns 2', () => {
  expect(countOnlyConsonant('abc')).eql(2);
});

it('countOnlyConsonant("aeiou") returns 0', () => {
  expect(countOnlyConsonant('aeiou')).eql(0);
});

it('countOnlyConsonant("") returns 0', () => {
  expect(countOnlyConsonant('')).eql(0);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
