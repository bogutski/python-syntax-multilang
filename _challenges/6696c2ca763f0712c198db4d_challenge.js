// NAMEEN:Assign a value of 25 to the `age` variable
// NAMERU:Присвойте переменной `age` значение 25

/*
INSTRUCTIONENSTART
Create a variable named `age`. Use keyword `const`. Assign a value - the number `25`.
To do this, type the command:
```
const age = 25;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-12.png)

Создайте переменную с именем `age`. Используйте ключевое слово `const`. Присвойте значение - число `25`.

Похожий пример:
```javascript
const number = 10;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const age = 25;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const age = 25;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const age = 25;
// SOLUTIONEND


// OPENTESTSSTART
it('age is a variable', () => {
  expect(age).not.undefined;
});

it('age is a number', () => {
  expect(typeof age).to.equal('number');
});

it('age is 25', () => {
  expect(age).to.equal(25);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
