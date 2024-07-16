// NAMEEN:Laboratory work. Division of students into groups
// NAMERU:Лабораторная работа. Деление студентов на группы

/*
INSTRUCTIONENSTART
To perform laboratory work you need to do: description of the documentation,
writing the program, creating tests, testing.

The teacher has divided the students into groups. How many students will be in each group?

Create a variable `students` and assign a value of 32 to it.

Create a variable `groups` and give it a value of 4 (number of groups).

Create a variable `oneGroup` and return the result: how many students will be in each group?

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem

```
const participants = 90;
const oneTable = 10;
const tables = participants / oneTable;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Для выполнения лабораторной работы необходимо сделать: описание документации,
написание программы, создание тестов, тестирование.

Учитель поделил студентов на группы. Сколько студентов будет в каждой группе?

Создайте переменную `students` и присвойте ей значение 32.

Создайте переменную `groups` и присвойте ей значение 4 (количество групп).

Создайте переменную `oneGroup` и верните результат: сколько студентов будет в каждой группе?

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи

```javascript
const participants = 90;
const oneTable = 10;
const tables = participants / oneTable;
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
const students = 32;
const groups = 4;
const oneGroup = students / groups;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const students = 32;
const groups = 4;
const oneGroup = students / groups;
// SOLUTIONEND


// OPENTESTSSTART
it('The `students` variable exists and contains a value', () => {
  expect(students).not.to.be.undefined;
});

it('The `groups` variable exists and contains a value', () => {
  expect(groups).not.to.be.undefined;
});

it('The value of the variable `students` is a number', () => {
  expect(students).a('number');
});

it('The value of variable `groups` is greater than 0', () => {
  expect(groups).gt(0);
});

it('The value of variable `groups` is a number', () => {
  expect(groups).a('number');
});

it('The result of the variable `oneGroup` is a number 8', () => {
  expect(oneGroup).eq(8);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
