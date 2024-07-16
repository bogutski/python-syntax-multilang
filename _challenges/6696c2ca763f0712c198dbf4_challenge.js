// NAMEEN:Delicious cake
// NAMERU:Вкусный пирог

/*
INSTRUCTIONENSTART
The hostess baked a pie weighing 1400 g and left it on the table.
When she returned, only 1/8 of the pie was on the plate.
Find the weight of the rest of the pie.

![](https://course-js-syntax.s3-us-west-1.amazonaws.com/klava.PNG)

Create a variable `pieWeight` and assign a value of 1400 to it.
Then write a command that decreases the value of the `pieWeight` variable by a factor of 8.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```
let a = 100;
a = a / 5; //command decreases the value of the variable a by a factor of 5
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-4.png)

Хозяйка испекла пирог весом 1400 г и оставила на столе.
Когда она вернулась, на блюде лежала только 1/8 часть пирога.
Найдите вес оставшейся части пирога.


Создайте переменную `pieWeight` и присвойте ей значение 1400.
Затем запишите команду, уменьшающую значение переменной `pieWeight` в 8 раз.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let a = 100;
a = a / 5;    // команда уменьшает значение переменной `а` в 5 раз
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let pieWeight = 1400;
pieWeight = pieWeight / 8;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let pieWeight = 1400;
pieWeight = pieWeight / 8;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let pieWeight = 1400;
pieWeight = pieWeight / 8;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `pieWeight` exists and has a value', () => {
  expect(pieWeight).not.undefined;
});

it('the variable `pieWeight` is not NaN', () => {
  expect(isNaN(pieWeight)).false;
});

it('the variable `pieWeight` is of type number', () => {
  expect(pieWeight).a('number');
});

it('the `pieWeight` variable is 175', () => {
  expect(pieWeight).equal(175);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
