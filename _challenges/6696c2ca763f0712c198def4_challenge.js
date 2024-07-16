// NAMEEN:Assignment of value increased by 1 (postfix form)
// NAMERU:Присваивание значения, увеличенного на 1 (постфиксная форма)

/*
INSTRUCTIONENSTART
Assign a value of 50 to the variable `x`, then write a command that assigns the variable `y`
variable `x` incremented by 1 using the increment command (postfix form).


Here is an example that is fundamentally similar to what needs to be done, but adapt it to the requirements of the problem:
```
let a = 20;
let b = a++;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Присвойте переменной `x` значение 50, затем запишите команду, которая присваивает переменной `y`
значение переменной `x`, увеличенное на 1 с помощью команды инкремента (постфиксная форма).


Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
let a = 20;
let b = a++;
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
let x = 50;
let y = x++;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let x = 50;
let y = x++;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `x` contains a value', () => {
  expect(x).not.undefined;
});

it('Variable `y` contains a value', () => {
  expect(y).not.undefined;
});

it('The variable type `x` is a number', () => {
  expect(x).a('number');
});

it('the variable type `x` is not NaN', () => {
  expect(isNaN(x)).false;
});

it('the variable `x` has the correct value', () => {
  expect(x).equal(51);
});

it('the type of variable `y` is a number', () => {
  expect(y).a('number');
});

it('the variable type `y` is not NaN', () => {
  expect(isNaN(y)).false;
});

it('the variable `y` has the correct value', () => {
  expect(y).equal(50);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
