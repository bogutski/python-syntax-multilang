// NAMEEN:Assign value 'Hello' to the `str` variable
// NAMERU:Присвойте переменной `str` значение 'Hello'

/*
INSTRUCTIONENSTART
Create a variable named `str`. 
Use the keyword `let`.
Assign a value - the string `Hello`.
To do this, type the command:
```
let str = 'Hello';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-13.png)

Создайте переменную с именем `str`. 
Используйте ключевое слово` let`.
Присвойте значение - строку `Hello`.

Похожий пример:
```javascript
let string = 'World';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let str = 'Hello';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let str = 'Hello';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let str = 'Hello';
// SOLUTIONEND


// OPENTESTSSTART
it('str is defined', () => {
  expect (str).not.to.be.undefined;
});

it('str is a string', () => {
  expect (str).to.be.a('string');
});

it('str is equal to "Hello"', () => {
  expect (str).to.be.equal('Hello');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
