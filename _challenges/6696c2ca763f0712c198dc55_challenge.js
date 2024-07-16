// NAMEEN:Infinity with a minus sign
// NAMERU:Бесконечность со знаком минус

/*
INSTRUCTIONENSTART
Understanding infinity is difficult. And how to understand minus infinity?

Create a variable `inf` and assign to it the value of an expression with the value "-infinity".
To do this, the expression must contain the result of dividing an arbitrary negative number by zero.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const before = -11;
const after = before / 0;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Понять, что такое бесконечность - трудно. А как понять минус бесконечность?

Создайте переменную `inf` и присвойте ей значение выражения со значением "-бесконечность".
Для этого, выражение должно содержать результат деления произвольного отрицательного числа на ноль.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const minusInfinity = -11 / 0;
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
const inf = -1 / 0;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const inf = -1 / 0;
// SOLUTIONEND


// OPENTESTSSTART
it('variable type `inf` - number', () => {
  expect(inf).a('number');
});

it('the variable `inf` contains a value', () => {
  expect(inf).not.undefined;
});

it('the variable `inf` is equal to -Infinity', () => {
  expect(inf).equal(-Infinity);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
