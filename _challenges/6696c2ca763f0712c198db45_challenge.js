// NAMEEN:What is emptiness?
// NAMERU:Что такое пустота?

/*
INSTRUCTIONENSTART
"*The word is the emptiness lined on all sides with letters*" (Yuri Hanon).

Create a variable named `empty` and assign to it the value of the empty string.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```javascript
const word = '';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-4.png)

"*Слово - это пустота, со всех сторон облепленная буквами* " (Юрий Ханон).

Создайте переменную с именем `empty` и присвойте ей значение пустой строки.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const word = '';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const empty = '';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const empty = '';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const empty = '';
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `empty` exists and has a value', () => {
  expect(empty).not.undefined;
});

it('the variable `empty` is a string', () => {
  expect(empty).a('string');
});

it('the value of the variable `empty` is ``', () => {
  expect(empty).equal('');
});

it('the length of the string `empty` is 0 ', () => {
  expect(empty.length).equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
