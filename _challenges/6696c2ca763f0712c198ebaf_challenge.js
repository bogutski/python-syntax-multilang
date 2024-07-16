// NAMEEN:
// NAMERU:Какая буква не дает быть палиндромом?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `findWrongLetter` принимает строку.

Данная строка почти является палиндромом, но одна буква в ней неправильная.

Необходимо найти индекс этой буквы и вернуть строку следующего вида:

`${str} is not palindrome because of wrong letter at position ${wrongLetter}`, где `str` - исходная строка, `wrongLetter` - индекс неправильной буквы.

Строка содержит только одну неправильную букву.

Пример:
```javascript
findWrongLetter('alba') // 'alba is not palindrome because of wrong letter at position 1'
findWrongLetter('midam') // 'midam is not palindrome because of wrong letter at position 1'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findWrongLetter(str) {
  let middle = Math.floor(str.length / 2);
  let wrongLetter;
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      wrongLetter = i
    }
  }
  return `${str} is not palindrome because of wrong letter at position ${wrongLetter}`;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function findWrongLetter', () => {
  expect(findWrongLetter).to.be.a('function');
});

it('findWrongLetter("alba") returns "alba is not palindrome because of wrong letter at position 1"', () => {
  expect(findWrongLetter('alba')).to.equal('alba is not palindrome because of wrong letter at position 1');
});

it('findWrongLetter("midam") returns "midam is not palindrome because of wrong letter at position 1"', () => {
  expect(findWrongLetter('midam')).to.equal('midam is not palindrome because of wrong letter at position 1');
});

it('findWrongLetter("ratecar") returns "ratecar is not palindrome because of wrong letter at position 2"', () => {
  expect(findWrongLetter('ratecar')).to.equal('ratecar is not palindrome because of wrong letter at position 2');
});

it('findWrongLetter("aaaabaaa") returns "aaaabaaa is not palindrome because of wrong letter at position 3"', () => {
  expect(findWrongLetter('aaaabaaa')).to.equal('aaaabaaa is not palindrome because of wrong letter at position 3');
});

it('findWrongLetter("yye") returns "yye is not palindrome because of wrong letter at position 0"', () => {
  expect(findWrongLetter('yye')).to.equal('yye is not palindrome because of wrong letter at position 0');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
