// NAMEEN:Delicious cake
// NAMERU:Вкусный пирог

/*
INSTRUCTIONENSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-4.png)

The hostess baked a pie weighing 1400 g and left it on the table.
When she returned, only 1/8 of the pie was on the plate.
Find the weight of the rest of the pie.

Create a variable `pie_weight` and assign a value of `1400` to it.
Then write a command that decreases the value of the `pie_weight` variable by a factor of `8`.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-4.png)

Хозяйка испекла пирог весом 1400 г и оставила на столе.
Когда она вернулась, на блюде лежала только 1/8 часть пирога.
Найдите вес оставшейся части пирога.

Создайте переменную `pie_weight` и присвойте ей значение `1400`.
Затем запишите команду, уменьшающую значение переменной `pie_weight` в `8` раз.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the needs of the task:
```python
a = 100
a = a / 5
```
HINTENEND
*/

/*
HINTRUSTART
Приведенный пример, принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```python
a = 100
a = a / 5
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
pie_weight = 1400
pie_weight = pie_weight / 8
// SOLUTIONEND

// OPENTESTSSTART
it('the variable "pie_weight" exists and has a value', () => {
  expect(pie_weight).not.undefined;
});

it('the variable "pie_weight" is not NaN', () => {
  expect(isNaN(pie_weight)).false;
});

it('the variable "pie_weight" is of type number', () => {
  expect(pie_weight).a('number');
});

it('the "pie_weight" variable is 175', () => {
  expect(pie_weight).equal(175);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
