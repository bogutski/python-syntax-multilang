// NAMEEN:Assign false value to the isChild variable
// NAMERU:Присвойте переменной isChild значение false

/*
INSTRUCTIONENSTART
Create a variable named `isChild`.
Use the keyword ` const`.
Assign a boolean value `false` to it.

Similar example
```
const isAdult = true;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-7.png)

Создайте переменную с именем `isChild`.
Используйте ключевое слово` const`.
Присвойте ей логическое значение `false`.

Похожий пример:
```javascript
const isAdult = true;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const isChild = false;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const isChild = false;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const isChild = false;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable isChild exists', () => {
  expect(isChild).not.undefined;
});

it('the variable isChild is a boolean', () => {
  expect(typeof isChild).eql('boolean');
});

it('the variable isChild is false', () => {
  expect(isChild).eql(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
