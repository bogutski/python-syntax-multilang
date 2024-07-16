// NAMEEN:Let or const?
// NAMERU:Let или const?

/*
INSTRUCTIONENSTART
Create a variable `a` with value 100 (number). Note that the value of the variable will be changed in the future.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-2-task-7.png)

Создайте переменную `a` со значением 100 (число). Примите во внимание, что значение переменной в дальнейшем будет изменено.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let a = 100;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let a = 100;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let a = 100;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `a` exists and has a value', () => {
  expect(a).not.undefined;
});

it('the variable `a` is a number', () => {
  expect(a).a('number');
});

it('the value of variable `a` is a number', () => {
  expect(a).equal(100);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
