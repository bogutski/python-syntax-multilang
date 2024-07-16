// NAMEEN:
// NAMERU:Поменять местами слова в строке из двух слов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `switchWords` принимает строку и возвращает строку, в которой первое и последнее слова поменяны местами.

Строка состоит только из двух слов, разделенных одним пробелом.

Не используйте метод `substring` для этой задачи.

Примеры запуска функции:
```javascript
switchWords("Hello World") // "World Hello"
switchWords("PASV school") // "school PASV"
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function switchWords(str) {
  let firstWord = '';
  let secondWord = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      secondWord += str[i]
    } else {firstWord = secondWord
      secondWord = ''}
  }
  return secondWord + ' ' + firstWord;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function switchWords', () => {
  expect(switchWords).to.be.a('function');
});

it('function switchWords not includes statement substring', () => {
  expect(switchWords.toString()).to.not.include('substring');
});

it('switchWords("Hello World") returns "World Hello"', () => {
  expect(switchWords('Hello World')).to.equal('World Hello');
});

it('switchWords("PASV school") returns "school PASV"', () => {
  expect(switchWords('PASV school')).to.equal('school PASV');
});

it('switchWords("JS practice") returns "practice JS"', () => {
  expect(switchWords('JS practice')).to.equal('practice JS');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
