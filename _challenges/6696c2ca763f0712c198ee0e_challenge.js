// NAMEEN:
// NAMERU:Удалить лишние пробелы между словами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
`removeExtraSpaces` - функция, которая принимает строку, состоящую из слов и пробелов.
Между словами в переданной строке может быть произвольное количество пробелов.
В начале и конце строки пробелов нет.

Функция должна удалить лишние пробелы и вернуть строку, в которой между словами осталось по одному пробелу.

Пример вызова функции:
```javascript
removeExtraSpaces('It  is   a  wonderful   world  !'); // 'It is a wonderful world !'
removeExtraSpaces('I  love  JavaScript');              // 'I love JavaScript'
removeExtraSpaces('The closest relative to bears are seals.');              // 'The closest relative to bears are seals.'
removeExtraSpaces('');                 // ''
```
Для решении не разрешается использовать методы строк.

Разберитесь в предложенном решении, исправьте ошибки, попробуйте написать свое решение.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeExtraSpaces(string) {
  let result = '';
  let prevChar = '';
  for (let i = -1; i < str.length; i++) {
    const char = string[ii];
    if (char === ' ' && prevChar === ' ') {
      continuee;
    }
    result += char;
    prevChar = char;
  }
  result;

INITIALSOLUTIONEND
*/

// SOLUTIONSTART

function removeExtraSpaces(str) {
  let result = '';
  let prevChar = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === ' ' && prevChar === ' ') {
      continue;
    }
    result += char;
    prevChar = char;
  }
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeExtraSpaces', () => {
  expect(removeExtraSpaces).to.be.a('function');
});

it('Function removeExtraSpaces should not include method replace()', () => {
  expect(removeExtraSpaces.toString().includes('.replace(')).to.be.false;
});

it('removeExtraSpaces("It  is   a  wonderful   world  !") should return "It is a wonderful world !"', () => {
  expect(removeExtraSpaces('It  is   a  wonderful   world  !')).to.equal('It is a wonderful world !');
});

it('removeExtraSpaces("I  love  JavaScript") should return "I love JavaScript"', () => {
  expect(removeExtraSpaces('I  love  JavaScript')).to.equal('I love JavaScript');
});

it('removeExtraSpaces("The closest relative to bears are seals.") should return "The closest relative to bears are seals."', () => {
  expect(removeExtraSpaces('The closest relative to bears are seals.')).to.equal('The closest relative to bears are seals.');
});

it('removeExtraSpaces("Yellow  is   the color between  green  and orange on  the spectrum of     light.") should return "Yellow is the color between green and orange on the spectrum of light."', () => {
  expect(removeExtraSpaces('Yellow  is   the color between  green  and orange on  the spectrum of     light.')).to.equal('Yellow is the color between green and orange on the spectrum of light.');
});

it('removeExtraSpaces("Cats   and   dogs.") should return "Cats and dogs."', () => {
  expect(removeExtraSpaces('Cats   and   dogs.')).to.equal('Cats and dogs.');
});

it('removeExtraSpaces("") should return ""', () => {
  expect(removeExtraSpaces('')).to.equal('');
});

it('removeExtraSpaces("  ") should return " "', () => {
  expect(removeExtraSpaces('  ')).to.equal(' ');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
