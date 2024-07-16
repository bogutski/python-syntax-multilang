// NAMEEN:Life is good!
// NAMERU:Life is good!

/*
INSTRUCTIONENSTART
Create a variable `word1` and write the word `'Life'` into it.

Create a variable `word2` and write the word `'is'` into it.

Create a variable `word3` and write the word `'good!'`

Create a variable `myGoal` and write the result of concatenation (concatenation) of the previous three variables into it.

Here's an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task

 ```
const before = "Be";
const after = "Happy!";
const together = before + ' ' + after;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `word1` и запишите в нее слово `'Life'`.

Создайте переменную `word2` и запишите в нее слово `'is'`.

Создайте переменную `word3` и запишите в нее слово `'good!'`.

Создайте переменную `myGoal` и запишите в результат конкатенации (склеивания) трех предыдущих переменных с добавление пробелов между ними.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи

```javascript
const before = "Be";
const after = "Happy!";
const together = before + ' ' + after;
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
const word1 = 'Life';
const word2 = 'is';
const word3 = 'good!';
const myGoal = word1 + ' ' + word2 + ' ' + word3;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const word1 = 'Life';
const word2 = 'is';
const word3 = 'good!';
const myGoal = word1 + ' ' + word2 + ' ' + word3;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `word1` exists and contains a value', () => {
  expect(word1).not.to.be.undefined;
});

it('Variable `word2` exists and contains a value', () => {
  expect(word2).not.to.be.undefined;
});

it('Variable `word3` exists and contains a value', () => {
  expect(word3).not.to.be.undefined;
});

it('The value of variable `word1` is a string', () => {
  expect(word1).a('string');
});

it('The value of variable `word2` is a string', () => {
  expect(word2).a('string');
});

it('The value of variable `word2` is a string', () => {
  expect(word3).a('string');
});

it('Variable `myGoal` contains the value `Life is good!`', () => {
  expect(myGoal).eq('Life is good!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
