// NAMEEN:
// NAMERU:Переменная с логическим значением

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-2-task-4.png)

Создайте переменную с именем `isRainy` c использованием ключевого слова `const` и присвойте ей логическое значение `true`.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const isRainy = true;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const isRainy = true;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const isRainy = true;
// SOLUTIONEND


// OPENTESTSSTART
it('isRainy should be a variable', () => {
  expect (isRainy).to.exist;
});

it('isRainy should be a boolean', () => {
  expect (isRainy).to.be.a('boolean');
});

it('isRainy should be equal to true', () => {
  expect (isRainy).to.be.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
