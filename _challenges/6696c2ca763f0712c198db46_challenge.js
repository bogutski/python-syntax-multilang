// NAMEEN:Null or deliberate absence of any value
// NAMERU:Null или намеренное отсутствие какого-либо значения

/*
INSTRUCTIONENSTART
Null is a special value that has the meaning `value is intentionally absent`.
Create a variable named `futureProfit` and assign a special value null to it.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```javascript
let nextWinner = null;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-5.png)

Null - специальное значение, которое имеет смысл `значение намеренно отсутствует`.
Создайте переменную с именем `futureProfit` и присвойте ей специальное значение null.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let nextWinner = null;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let futureProfit = null;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let futureProfit = null;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let futureProfit = null;
// SOLUTIONEND


// OPENTESTSSTART
it('the `futureProfit` variable exists and has a value', () => {
  expect(futureProfit).not.undefined;
});

it('the value of variable `futureProfit` is null', () => {
  expect(futureProfit).equal(null);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
