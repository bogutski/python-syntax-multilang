// NAMEEN:Assignment of a value incremented by 1 (prefix form)
// NAMERU:Присваивание значения, увеличенного на 1 (префиксная форма)

/*
INSTRUCTIONENSTART
Assign a value of 9 to the variable `x`, then write a command that assigns to the variable `y`
variable `x` incremented by 1 using the increment command (prefix form).


Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the task:
```
let a = 20;
let b = ++a;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Присвойте переменной `x` значение 9, затем запишите команду, которая присваивает переменной `y`
значение переменной `x`, увеличенное на 1 с помощью команды инкремента (префиксная форма).


Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let a = 20;
let b = ++a;
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
let x = 9;
let y = ++x;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let x = 9;
let y = ++x;
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
  expect(x).equal(10);
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
  expect(y).equal(10);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
