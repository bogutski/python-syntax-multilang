// NAMEEN:Am I an adult now?
// NAMERU:Я уже взрослый?

/*
INSTRUCTIONENSTART
Create a variable named `age` and assign to it the value of an arbitrary number.
Create a variable named `isAdult` and give it the value `true`,
if age is greater than or equal to 18, and `false` otherwise.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the task:
```
const salary = 80 ;
const haveJob = salary > 0; // true if salary > 0; false if salary <= 0,
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `age` и присвойте ей значение произвольного числа.
Создайте переменную с именем `isAdult` и присвойте ей значение `true`,
если возраст больше или равен 18, и `false` в противном случае.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const salary = 80 ;
const haveJob = salary > 0;   // true, если salary > 0; false, если salary <= 0,
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
const age = 25;
const isAdult = age >= 18;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const age = 25;
const isAdult = age >= 18;
// SOLUTIONEND


// OPENTESTSSTART
it('Переменная `age` существует и имеет значение', () => {
  expect(age).not.undefined;
});

it('Значение переменной `age` является числом', () => {
  expect(age).a('number');
});

it('Значение переменной `age` не является NaN', () => {
  expect(isNaN(age)).false;
});

it('Переменная `isAdult` существует и имеет значение', () => {
  expect(isAdult).not.undefined;
});

it('Значение переменной `isAdult` является boolean', () => {
  expect(isAdult).a('boolean');
});

it('Значение переменной `isAdult` верно', () => {
  expect(isAdult).equal(age >= 18);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
