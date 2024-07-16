// NAMEEN:Decrement, postfix form
// NAMERU:Декремент, постфиксная форма

/*
INSTRUCTIONENSTART
Assign a value of 101 to the `num` variable, then write a command that decrements the variable by 1
(decrement, postfix form).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
let x = 2;
x--;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Присвойте переменной `num` значение 101, затем запишите команду, уменьшающую значение переменной на 1
(декремент, постфиксная форма).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
let x = 2;
x--;
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
let num = 101;
num--;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let num = 101;
num--;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `num` contains a value', () => {
  expect(num).not.undefined;
});

it('The variable `num` type is a number', () => {
  expect(num).a('number');
});

it('the variable type `num` is not NaN', () => {
  expect(isNaN(num)).false;
});

it('the variable `num` has the correct value', () => {
  expect(num).equal(100);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
