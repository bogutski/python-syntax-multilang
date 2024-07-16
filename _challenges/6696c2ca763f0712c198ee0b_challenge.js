// NAMEEN:
// NAMERU:Переписать все слова с заглавной буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `wordsCapitalize` принимает строку из слов в нижнем регистре, разделенных пробелами, и возвращает строку, в которой все слова начинаются с заглавной буквы.
Переданная строка может быть пустой. В этом случае функция должна вернуть пустую строку.

Для решения задачи используйте цикл `for` и метод `toUpperCase()`.

Примеры вызова функции `wordsCapitalize`:

```javascript
wordsCapitalize('hi hello welcome goodbye'); // 'Hi Hello Welcome Goodbye'
wordsCapitalize(''); // ''
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function wordsCapitalize(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function wordsCapitalize', () => {
  expect(wordsCapitalize).to.be.a('function');
});

it('Function wordsCapitalize should not contain method split()', () => {
  expect(wordsCapitalize.toString().includes('split(')).to.be.false;
});

it('Function wordsCapitalize should not contain method join()', () => {
  expect(wordsCapitalize.toString().includes('join(')).to.be.false;
});

it('wordsCapitalize("hi hello welcome goodbye") should return "Hi Hello Welcome Goodbye"', () => {
  expect(wordsCapitalize('hi hello welcome goodbye')).to.be.eq('Hi Hello Welcome Goodbye');
});

it('wordsCapitalize("alice bob andrew") should return "Alice Bob Andrew"', () => {
  expect(wordsCapitalize('alice bob andrew')).to.be.eq('Alice Bob Andrew');
});

it('wordsCapitalize("tom hanks") should return "Tom Hanks"', () => {
  expect(wordsCapitalize('tom hanks')).to.be.eq('Tom Hanks');
});

it('wordsCapitalize("") should return ""', () => {
  expect(wordsCapitalize('')).to.be.eq('');
});

it('wordsCapitalize("hi") should return "Hi"', () => {
  expect(wordsCapitalize('hi')).to.be.eq('Hi');
});

it('wordsCapitalize("the eye is a region of mostly calm weather found at the center of tropical cyclones") should return "The Eye Is A Region Of Mostly Calm Weather Found At The Center Of Tropical Cyclones"', () => {
  expect(wordsCapitalize('the eye is a region of mostly calm weather found at the center of tropical cyclones')).to.be.eq('The Eye Is A Region Of Mostly Calm Weather Found At The Center Of Tropical Cyclones');
});

it('wordsCapitalize("the eye is characterized by light winds and clear skies") should return "The Eye Is Characterized By Light Winds And Clear Skies"', () => {
  expect(wordsCapitalize('the eye is characterized by light winds and clear skies')).to.be.eq('The Eye Is Characterized By Light Winds And Clear Skies');
});

it('wordsCapitalize("i") should return "I"', () => {
  expect(wordsCapitalize('i')).to.be.eq('I');
});

it('wordsCapitalize("i am") should return "I Am"', () => {
  expect(wordsCapitalize('i am')).to.be.eq('I Am');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
