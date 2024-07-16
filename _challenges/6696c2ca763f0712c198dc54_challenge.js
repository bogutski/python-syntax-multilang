// NAMEEN:Creating infinity
// NAMERU:Создаем бесконечность

/*
INSTRUCTIONENSTART
The universe is infinite... Time is infinite...  How to understand and realize infinity?

Create a variable `inf` and assign to it the value of an expression with the value `+infinity'.
For this, the expression must contain the result of dividing an arbitrary number by zero.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const before = 1;
const after = before / 0;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Вселенная бесконечна... Время бесконечно...  Как понять и осознать бесконечность?

Создайте переменную `inf` и присвойте ей значение выражения со значением "+бесконечность".
Для этого, выражение должно содержать результат деления произвольного числа на ноль.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const infinity = 10 / 0;
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
const inf = 1 / 0;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const inf = 1 / 0;
// SOLUTIONEND


// OPENTESTSSTART
it('variable type `inf` - number', () => {
  expect(inf).a('number');
});

it('the variable `inf` contains a value', () => {
  expect(inf).not.undefined;
});

it('the variable `inf` is equal to Infinity', () => {
  expect(inf).equal(Infinity);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
