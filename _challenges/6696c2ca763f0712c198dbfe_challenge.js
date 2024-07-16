// NAMEEN:The child's height
// NAMERU:Рост ребенка

/*
INSTRUCTIONENSTART
Over a year the boy Mike's height has increased by 9 cm.
Find the boy's height.

Suppose that the variable `mikeHeight` stores some number (the original height).
Create a variable `mikeHeight` with the value `120`:
```
let mikeHeight = 120;
```
Write a command that increments the existing value of the variable `mikeHeight` by 9.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-14.png)

За год рост мальчика Майка увеличился на 9 см. Найдите рост мальчика.

Создайте переменную `mikeHeight` со значением `120`:

Запишите команду, которая увеличивает имеющееся значение переменной `mikeHeight` на `9`.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let mikeHeight = 120;
mikeHeight = mikeHeight + 9;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let mikeHeight = 120;
mikeHeight = mikeHeight + 9;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let mikeHeight = 120;
mikeHeight = mikeHeight + 9;
// SOLUTIONEND


// OPENTESTSSTART
it('The variable "mikeHeight" should be defined', () => {
    expect(mikeHeight).not.undefined;
});

it('The variable "mikeHeight" should be a number', () => {
    expect(mikeHeight).a('number');
});

it('The variable "mikeHeight" should be equal to 129', () => {
    expect(mikeHeight).eq(129);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
