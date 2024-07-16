// NAMEEN:Create a variable with value undefined
// NAMERU:Создайте переменную co значением undefined

/*
INSTRUCTIONENSTART
Create a variable named `age`.
Use keyword `let`.
Assign a value of `undefined`.

To do this, type the command:
```
let age = undefined;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-16.png)

Создайте переменную с именем `age`.
Используйте ключевое слово `let`.
Присвойте значение `undefined`.

Похожий пример:
```javascript
let year = undefined;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let age = undefined;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let age = undefined;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let age = undefined;
// SOLUTIONEND


// OPENTESTSSTART
it('should create a variable with value undefined', () => {
  expect (typeof age).to.equal('undefined');
});

it('should create a variable with name age', () => {
  expect (age).to.equal(undefined);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
