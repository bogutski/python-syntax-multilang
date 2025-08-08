// NAMEEN:Big win
// NAMERU:Крупный выигрыш

/*
INSTRUCTIONENSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-3.png)

In 2013 a British man managed to win more than £200,000 from the minimum bet of one penny.
That is, the amount available to him increased by 20,000,000 times!

Create a variable `money` and give it a value of `1`.

Then write a command to increase the value of the `money` variable by `20000000` times.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-3.png)

В 2013 году одному британцу удалось выиграть более 200 000 фунтов с минимальной ставки в один пенни.
То есть имеющаяся у него сумма увеличилась в 20000000 раз!

Создайте переменную `money` и присвойте ей значение `1`.

Затем запишите команду, увеличивающую значение переменной `money` в `20000000` раз.

Пример на Python, принципиально похожий на то, что нужно сделать:
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Here's an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```python
a = 5
a = a * 1000
```
HINTENEND
*/

/*
HINTRUSTART
Это пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```python
a = 5
a = a * 1000
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
money = 1
money = money * 20000000
// SOLUTIONEND

// OPENTESTSSTART
it('the variable "money" exists and has a value', () => {
  expect(money).not.undefined;
});

it('the variable "money" is not NaN', () => {
  expect(isNaN(money)).false;
});

it('the variable "money" is of type number', () => {
  expect(money).a('number');
});

it('the variable "money" is equal to 20000000', () => {
  expect(money).equal(20000000);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
