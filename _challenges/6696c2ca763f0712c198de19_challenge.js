// NAMEEN:Increasing the number by 3
// NAMERU:Увеличение числа на 3

/*
INSTRUCTIONENSTART
Samantha was 13, but she really wanted to go to the movies, which were only open at 16,
so she added three to her age.

Set the variable `age` and give it a value of 13.
Then write a command that increments the value of the `age` variable by 3.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
let number = 8;
number += 5;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Саманте было 13 лет, но ей очень хотелось попасть в кино, куда пускали только с 16 лет,
и она прибавила к своему возрасту 3.

Задайте переменную `age` и присвойте ей значение числа 13.
Затем запишите команду, увеличивающую значение переменной `age` на 3.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let number = 8;
number += 5;
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
let age = 13;
age += 3;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let age = 13;
age += 3;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `age` contains a value', () => {
  expect(age).not.undefined;
});

it('The variable `age` type is a number', () => {
  expect(age).a('number');
});

it('the variable `age` is not NaN', () => {
  expect(isNaN(age)).false;
});

it('the variable `age` is incremented by 3', () => {
  expect(age).equal(16);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
