// NAMEEN:Assign value 10 to the variable a
// NAMERU:Присвойте переменной a значение 10

/*
INSTRUCTIONENSTART
Create a variable named `a`. Use keyword `let`. Assign a value - the number `10`.
To do this, type the command:
```
let a = 10;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-15.png)

Создайте переменную с именем `a`. Используйте ключевое слово` let`. Присвойте значение - число `10`.

Похожий пример:
```javascript
let b = 5;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let a = 10;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let a = 10;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let a = 10;
// SOLUTIONEND


// OPENTESTSSTART
it('a is defined', () => {
  expect (a).to.not.be.undefined;
});

it('a is 10', () => {
  expect (a).to.equal(10);
});

it('a is a number', () => {
  expect (a).to.be.a('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
