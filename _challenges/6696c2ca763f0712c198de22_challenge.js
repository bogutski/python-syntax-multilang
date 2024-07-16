// NAMEEN:How many boys in the class?
// NAMERU:Сколько мальчиков в классе?

/*
INSTRUCTIONENSTART
There are 30 children in the class. A third of all children are girls. 

Create a variable `kids` with a value of 30 .
Create a variable `girls` in which calculate the number of girls in the class.
Create a variable `boys` in which you calculate the number of boys in the class.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const a = 30;
const b = a / 3;
const c = a - b ;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В классе 30 детей. Третья часть из всех детей - девочки.

Создайте переменную `kids` со значением 30 .
Создайте переменную `girls`, в которой вычислите количество девочек в классе.
Создайте переменную `boys`, в которой вычислите количество мальчиков в классе.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const a = 30;
const b = a / 3;
const c = a - b ;
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
const kids = 30;
const girls = kids / 3;
const boys = kids - girls;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const kids = 30;
const girls = kids / 3;
const boys = kids - girls;
// SOLUTIONEND


// OPENTESTSSTART
it('The `kids` variable exists and has a value', () => {
  expect(kids).not.undefined;
});

it('The `kids` variable contains a number', () => {
  expect(kids).a('number');
});

it('The `kids` variable contains a value', () => {
  expect(kids).eq(30);
});

it('The `girls` variable exists and has a value', () => {
  expect(girls).not.undefined;
});

it('Variable `girls` contains a number', () => {
  expect(girls).a('number');
});

it('Variable `girls` contains a value', () => {
  expect(girls).eq(kids / 3);
});

it('The `boys` variable exists and has a value', () => {
  expect(boys).not.undefined;
});

it('Variable `boys` contains a number', () => {
  expect(boys).a('number');
});

it('Variable `boys` contains a value', () => {
  expect(boys).eq(kids - girls);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
