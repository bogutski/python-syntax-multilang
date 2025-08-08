// NAMEEN:The unpredictability of the game
// NAMERU:Непредсказуемость игры

/*
INSTRUCTIONENSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-8.png)

A tourist in Las Vegas started a game with some amount of money.

Create a variable `start_money` and assign it a value greater than or equal to `100`.

At the end of the game, he lost some amount of money.

Create a variable `lost_money` and assign it a value between `50` and `80`.

Create a variable `end_money` and assign it the calculated value of the remaining money,

which is the difference between `start_money` and `lost_money`.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-8.png)

Турист в Лас-Вегасе начал игру со какой-то суммой денег.

Создайте переменную `start_money` и присвойте ей значение большее либо равное `100`.

В конце игры он проиграл какую-то сумму денег.

Создайте переменную `lost_money` и присвойте ей значение от `50` до `80`.

Создайте переменную `end_money` и присвойте ей вычисленное значение оставшихся денег, как разницу между `start_money` и `lost_money`.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Here is a similar example:
```python
start_money = 150
lost_money = 60
end_money = start_money - lost_money
```
HINTENEND
*/

/*
HINTRUSTART
Похожий пример:
```python
start_money = 150
lost_money = 60
end_money = start_money - lost_money
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
start_money = 150
lost_money = 60
end_money = start_money - lost_money
// SOLUTIONEND

// OPENTESTSSTART
it('The "start_money" variable contains a value more or equal 100', () => {
  expect(start_money).gte(100);
});

it('The "lost_money" variable contains a value between 50 and 80', () => {
  expect(lost_money).gte(50).lte(80);
});

it('The "end_money" variable contains the difference between "start_money" and "lost_money"', () => {
  expect(end_money).equal(start_money - lost_money);
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
