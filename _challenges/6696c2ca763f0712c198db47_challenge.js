// NAMEEN:Creating a variable without a value
// NAMERU:Создание переменной без значения

/*
INSTRUCTIONENSTART
A variable can be created without assigning a value to it.

Create a variable named `phoneNumber` without assigning any value to it.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
let age;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-6.png)

Переменную можно создать, не присваивая ей значения.

Создайте переменную с именем `phoneNumber` без присваивания ей какого-либо значения.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let age;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let phoneNumber;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let phoneNumber;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let phoneNumber;
// SOLUTIONEND


// OPENTESTSSTART
it('the `phoneNumber` variable exists and is undefined', () => {
  expect(phoneNumber).to.be.undefined;
});

it('the variable `phoneNumber` is of type undefined', () => {
  expect(typeof phoneNumber).eq('undefined');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
