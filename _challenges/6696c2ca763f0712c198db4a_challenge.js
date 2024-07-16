// NAMEEN:Assign the variable salary to null
// NAMERU:Присвойте переменной salary значение null

/*
INSTRUCTIONENSTART
Create a variable named `salary`.
Use keyword `const`.
Assign to it the value `null`.

To do this, type the command:
```
const salary = null;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-9.png)

Создайте переменную с именем `salary`.
Используйте ключевое слово `const`.
Присвойте ей значение `null`.

Принципиально похожий пример:
```javascript
const price = null;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const salary = null;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const salary = null;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const salary = null;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable salary exists', () => {
  expect(salary).not.undefined;
});

it('the variable salary is a null', () => {
  expect(salary).eql(null);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
