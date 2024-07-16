// NAMEEN:What is three plus five?
// NAMERU:Сколько будет три плюс пять?

/*
INSTRUCTIONENSTART
*Now let's make it count,*

*How much is three plus five!*

Create a variable named `number1` and give it the value 3.

Create a variable named `number2` and give it a value of 5.

Create a variable named `sum` and give it the value of the sum of the variables `number1` and `number2`.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the task:
```
let num1 = 1;
let num2 = 2;
let result = num1 + num2;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
*А теперь давай считать,*

*Сколько будет три плюс пять!*

Создайте переменную  с именем `number1` и присвойте ей значение 3.

Создайте переменную  с именем `number2` и присвойте ей значение 5.

Создайте переменную  с именем `sum` и присвойте ей значение суммы переменных `number1` и `number2`.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
let num1 = 1;
let num2 = 2;
let result = num1 + num2;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
let number1 = 3;
let number2 = 5;
let sum = number1 + number2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let number1 = 3;
let number2 = 5;
let sum = number1 + number2;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `number1` exists and has a value', () => {
  expect(number1).not.undefined;
});

it('the value of variable `number1` is a number', () => {
  expect(number1).a('number');
});

it('the value of variable `number1` is a number', () => {
  expect(number1).equal(3);
});

it('the variable `number2` exists and has a value', () => {
  expect(number2).not.undefined;
});

it('the value of variable `number2` is a number', () => {
  expect(number2).a('number');
});

it('the value of variable `number2` is 5', () => {
  expect(number2).equal(5);
});

it('the variable`sum` exists and has a value', () => {
  expect(sum).not.undefined;
});

it('the value of variable`sum` is a number', () => {
  expect(sum).a('number');
});

it('the value of variable `um` is a number', () => {
  expect(sum).equal(8);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
