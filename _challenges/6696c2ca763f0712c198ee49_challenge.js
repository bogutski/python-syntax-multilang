// NAMEEN:
// NAMERU:Верните объект с первым и последним словом в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `updateString` принимает строку.

Необходимо вернуть объект с тремя свойствами:
* `firstWord` - первое слово в строке
* `lastWord` - последнее слово в строке
* `updatedString` - строка, в которой первое и последнее слово поменяны местами

Слова в строке разделены пробелами и приходит более одного слова

Не используйте метод `substring` для получения подстроки.

Примеры запуска функции:
```javascript
updateString("sense makes position") // {firstWord: "sense", lastWord: "position", updatedString: "position makes sense"}
updateString("Hello world") // {firstWord: "Hello", lastWord: "world", updatedString: "world Hello"}
updateString("") // {firstWord: "", lastWord: "", updatedString: ""}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function updateString(str) {
  let firstWord = '';
  let lastWord = '';
  let restString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') break;
    firstWord += str[i];
  }
  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] === ' ') break;
    lastWord = str[j] + lastWord
  }
  for (let k = firstWord.length; k <= str.length-lastWord.length-1; k++) {
    restString += str[k];
  }
  const updatedString = lastWord + restString + firstWord;
  return {
    firstWord,
    lastWord,
    updatedString,
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function updateString', () => {
  expect(updateString).to.be.a('function');
});

it('function updateString do not include statement substring', () => {
  expect(updateString.toString()).to.not.include('substring');
})
it('updateString("sense makes position") returns {firstWord: "sense", lastWord: "position", updatedString: "position makes sense"}', () => {
  expect(updateString("sense makes position")).to.deep.equal({
    firstWord: "sense",
    lastWord: "position",
    updatedString: "position makes sense"
  });
});

it('updateString("perfect practice makes up only") returns {firstWord: "perfect", lastWord: "only", updatedString: "only practice makes up perfect"}', () => {
  expect(updateString("perfect practice makes up only")).to.deep.equal({
    firstWord: "perfect",
    lastWord: "only",
    updatedString: "only practice makes up perfect"
  });
});
it('updateString("Hello world") returns {firstWord: "Hello", lastWord: "world", updatedString: "world Hello"}', () => {
  expect(updateString("Hello world")).to.deep.equal({
    firstWord: "Hello",
    lastWord: "world",
    updatedString: "world Hello"
  });
});

it('updateString("") returns {firstWord: "", lastWord: "", updatedString: ""}', () => {
  expect(updateString("")).to.deep.equal({firstWord: "", lastWord: "", updatedString: ""});
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
