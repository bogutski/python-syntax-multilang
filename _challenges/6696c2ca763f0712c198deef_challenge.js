// NAMEEN:Assignment of a value reduced by 1 (postfix form)
// NAMERU:Присваивание значения, уменьшенного на 1 (постфиксная форма)

/*
INSTRUCTIONENSTART
Assign a value of 3 to the variable `x`, then write a command that assigns the variable `y`
variable `x` decremented by 1 (postfix form).


Here is an example that is fundamentally similar to what needs to be done, but adapt it to the requirements of the problem:
```
let a = 20;
let b = a--; // the value of variable b will be 20, 
               // because the b variable is first assigned the previous value of the a variable, i.e. 20,
               //and afterwards the value of the a variable is decreased by 1.
               // after this command, the a variable is equal to 19, the b variable is equal to 20.
 
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Присвойте переменной `x` значение 3, затем запишите команду, которая присваивает переменной `y`
значение переменной `x`, уменьшенное на 1 с помощью команды декремента (постфиксная форма).


Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
let a = 20;
let b = a--;   // значение переменной b будет 20,
               // так как переменной b сначала присваивается прежнее значение переменной a, т.е. 20,
               // а после этого значение переменной a уменьшается на 1.
               // после этой команды переменная a равна 19, переменная b равна 20.

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
let x = 3;
let y = x--;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let x = 3;
let y = x--;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `x` contains a value', () => {
  expect(x).not.undefined;
});

it('The variable type `x` is a number', () => {
  expect(x).a('number');
});

it('the variable type `x` is not NaN', () => {
  expect(isNaN(x)).false;
});

it('the variable `x` has the correct value', () => {
  expect(x).equal(2);
});

it('Variable `y` has a value', () => {
  expect(y).not.undefined;
});

it('The variable `y` type is a number', () => {
  expect(y).a('number');
});

it('the variable type `y` is not NaN', () => {
  expect(isNaN(y)).false;
});

it('the variable `y` has the correct value', () => {
  expect(y).equal(3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
