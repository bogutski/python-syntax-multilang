// NAMEEN:
// NAMERU:Количество гласных и согласных букв

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countLetters` принимает строку и возвращает объект с количеством гласных и согласных букв в строке:

```javascript
{
vowel: countVowel,
consonant: countConsonant
}
```

где `countVowel` - количество гласных букв в строке, `countConsonant` - количество согласных букв в строке.

Строка может содержать буквы латинского алфавита и пробелы. Буквы в строке могут быть в разном регистре.

Примеры запуска функции:
```javascript
countLetters('Hello') // {vowel: 2, consonant: 3}
countLetters('Why') // {vowel: 0, consonant: 3}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countLetters(str) {
  str = str.toLowerCase()
  let vowel = 0
  let consonant = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      vowel++
    } else if (str[i] === ' ') {
      continue
    } else {
      consonant++
    }
  }
  return {vowel, consonant}
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countLetters', () => {
  expect(countLetters).to.be.a('function');
});

it('countLetters("Hello") returns {vowel: 2, consonant: 3}', () => {
  expect(countLetters('Hello')).eql({vowel: 2, consonant: 3});
});

it('countLetters("Why") returns {vowel: 0, consonant: 3}', () => {
  expect(countLetters('Why')).eql({vowel: 0, consonant: 3});
});

it('countLetters("Hello world") returns {vowel: 3, consonant: 7}', () => {
  expect(countLetters('Hello world')).eql({vowel: 3, consonant: 7});
});

it('countLetters("AaEeIiOoUu") returns {vowel: 10, consonant: 0}', () => {
  expect(countLetters('AaEeIiOoUu')).eql({vowel: 10, consonant: 0});
});

it('countLetters("BbCcDdFfGgHhJjKkLl  MmNnPpQqRrSsTtVvWwXxYyZz") returns {vowel: 0, consonant: 42}', () => {
  expect(countLetters('BbCcDdFfGgHhJjKkLl  MmNnPpQqRrSsTtVvWwXxYyZz')).eql({vowel: 0, consonant: 42});
});

it('countLetters("") returns {vowel: 0, consonant: 0}', () => {
  expect(countLetters('')).eql({vowel: 0, consonant: 0});
});

it('countLetters(" ") returns {vowel: 0, consonant: 0}', () => {
  expect(countLetters(' ')).eql({vowel: 0, consonant: 0});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
