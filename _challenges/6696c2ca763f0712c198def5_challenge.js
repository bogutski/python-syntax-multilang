// NAMEEN:Increment, postfix form
// NAMERU:Инкремент, постфиксная форма

/*
INSTRUCTIONENSTART
Assign a value of 20 to the `num` variable, then write a command that increments the variable by 1
(increment, postfix form).

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
let x = 2;
x++;

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Присвойте переменной `num` значение 20, затем запишите команду, увеличивающую значение переменной на 1
(инкремент, постфиксная форма).

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
let x = 2;
x++;
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
let num = 20;
num++;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let num = 20;
num++;
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
  expect(num).equal(21);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
