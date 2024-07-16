// NAMEEN:Assign the value 'Alice' to the name variable
// NAMERU:Присвойте переменной name значение 'Alice'

/*
INSTRUCTIONENSTART
Create a variable named `name`. Use keyword `const`. Assign a value - the string `Alice`.

Similar example
```
const name = 'Tom';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-11.png)

Создайте переменную с именем `name`. Используйте ключевое слово `const`. Присвойте значение – строку `Alice`.

Похожий пример:
```javascript
const name = 'Tom';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const name = 'Alice';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const name = 'Alice';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const name = 'Alice';
// SOLUTIONEND


// OPENTESTSSTART
it('name is a variable', () => {
  expect(name).not.undefined;
});

it('name is a string', () => {
  expect(typeof name).to.equal('string');
});

it('name is Alice', () => {
  expect(name).to.equal('Alice');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
