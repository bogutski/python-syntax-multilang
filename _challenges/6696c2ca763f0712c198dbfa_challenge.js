// NAMEEN:Bacterial growth
// NAMERU:Рост количества бактерий

/*
INSTRUCTIONENSTART
A scientific laboratory is studying the behavior of a certain species of bacteria.
Every day their number is doubled.

Create a variable `bacteriaCount` and give it a value of `10000`.

Then write a command that doubles the existing value of the `bacteriaCount` variable.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-10.png)

В научной лаборатории изучают поведение некоторого вида бактерий.
Каждые сутки их количество увеличивается в два раза.

Создайте переменную `bacteriaCount` и присвойте ей значение `10000`.

Напишите следующую команду, которая увеличивает имеющееся значение переменной `bacteriaCount` в два раза.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let bacteriaCount = 10000;
bacteriaCount = bacteriaCount * 2;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let bacteriaCount = 10000;
bacteriaCount = bacteriaCount * 2;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let bacteriaCount = 10000;
bacteriaCount = bacteriaCount * 2;
// SOLUTIONEND


// OPENTESTSSTART
it("The `bacteriaCount` variable is not undefined", () => {
    expect(bacteriaCount).not.undefined;
});

it("The `bacteriaCount` variable contains a value 20000", () => {
    expect(bacteriaCount).eq(20000);
});

it("The `bacteriaCount` is type of number", () => {
  expect(typeof bacteriaCount).eq('number');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
