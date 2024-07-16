// NAMEEN:Golden Ratio
// NAMERU:Золотое сечение

/*
INSTRUCTIONENSTART
The most popular number in the world is the "golden ratio", which is a proportion obtained by dividing a value (for example, the length of a line segment) by two parts in such a way that the ratio of the larger part to the smaller part is equal to the ratio of the
(for example, the length of a line) into two parts in such a way that the ratio of the larger part to the smaller part equals the ratio
of the whole value to the greater value. The golden ratio is about 1.618.

Create a variable named `gold` and set it to `1.618`.

Here is an example that is fundamentally similar to what needs to be done,
but adapt it to the requirements of the problem:
```
const silver = 3.878323;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-3-task-5.png)

Самым популярным в мире числом считают «золотое сечение» – это пропорция, полученная делением величины
(например, длины отрезка) на две части таким образом, при котором отношение большей части к меньшей равно отношению
всей величины к её большей части. Золотое сечение равно около 1,618.

Создайте переменную с именем `gold` и присвойте ей значение `1.618`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const silver = 3.878323;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const gold = 1.618;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const gold = 1.618;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const gold = 1.618;
// SOLUTIONEND


// OPENTESTSSTART
it('the `gold` variable exists and has a value', () => {
  expect(gold).not.undefined;
});

it('the variable `gold` is a number', () => {
  expect(gold).a('number');
});

it('the value of variable `gold` is 2.7', () => {
  expect(gold).equal(1.618);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
