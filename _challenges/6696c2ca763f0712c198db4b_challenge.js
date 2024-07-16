// NAMEEN:Assign true value to the isAdult variable
// NAMERU:Присвойте переменной isAdult значение true

/*
INSTRUCTIONENSTART
Create a variable named `isAdult`.
Use keyword `const`.
Assign a boolean value `true`.

Similar example
```
const isMan = true;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-10.png)

Создайте переменную с именем `isAdult`.
Используйте ключевое слово` const`.
Присвойте логическое значение `true`.

Похожий пример:
```javascript
const isMan = true;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const isAdult = true;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const isAdult = true;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const isAdult = true;
// SOLUTIONEND


// OPENTESTSSTART
it('isAdult is defined', () => {
  expect(isAdult).not.undefined;
});

it('isAdult is a boolean', () => {
  expect(typeof isAdult).to.equal('boolean');
});

it('isAdult is true', () => {
  expect(isAdult).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
