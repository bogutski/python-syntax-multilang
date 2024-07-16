// NAMEEN:Student notes
// NAMERU:Конспект студента

/*
INSTRUCTIONENSTART
A student takes notes in his lectures in a very strange way: he abbreviates each word,
leaving only the first and last letter and putting a dash between them.
In this way, for example, the word "function" becomes "f-n".
You are to write down an arbitrary word in the way used by a student.

Create a variable `word` and assign it the value of an arbitrary string.
Create a variable `cut`, give it the value of the result of concatenation of the first letter, the dash and the last letter.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
const name = 'Moscow';
const shortName = name[0] + ';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Студент на лекциях ведет записи очень странным способом: каждое слово он сокращает,
оставляя только первую и последнюю букву, и ставит между ними знак тире.
Таким образом, например, из слова "функция" получается "ф-я".
Вам предстоит задать произвольное слово и записать его способом, который применяет студент.

Создайте переменную `word` и присвойте ей значение произвольной строки.
Создайте переменную `cut`, присвойте ей значение  результата конкатенации первой буквы, тире и последней буквы.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const name = 'Moscow';
const shortName = name[0] + '.';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
const word = 'Function';
const cut = word[0] + '-' + word[word.length - 1];
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const word = 'Function';
const cut = word[0] + '-' + word[word.length - 1];
// SOLUTIONEND


// OPENTESTSSTART
it('The `word` variable exists and has a value', () => {
  expect(word).not.undefined;
});

it('The variable `word` is a string', () => {
  expect(word).a('string');
});

it('Variable `word` is a non-empty string', () => {
  expect(word === '').false;
});

it('The `cut` variable exists and has a value', () => {
  expect(cut).not.undefined;
});

it('The `cut` variable is a string', () => {
  expect(cut).a('string');
});

it('Variable `cut` is correct', () => {
  const expected = word[0] + '-' + word[word.length - 1];
  expect(cut).equal(expected);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
