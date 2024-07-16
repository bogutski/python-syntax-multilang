// NAMEEN:The unpredictability of the game
// NAMERU:Непредсказуемость игры

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-8.png)

Турист в Лас-Вегасе начал игру со какой-то суммой денег.

Создайте переменную `startMoney` и присвойте ей значение большее либо равное 100.

В конце игры он проиграл какую-то сумму денег.

Создайте переменную `lostMoney` и присвойте ей значение от 50 до 80.

Создайте переменную `endMoney` и присвойте ей вычисленное значение оставшихся денег, как разницу между `startMoney` и `lostMoney`.

Похожий пример:
```javascript
const start = 55;
const lost = 10;
const end = start - lost;
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const startMoney = 100;
const lostMoney = 76;
const endMoney = startMoney - lostMoney;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const startMoney = 100;
const lostMoney = 76;
const endMoney = startMoney - lostMoney;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
const
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const startMoney = 100;
const lostMoney = 76;
const endMoney = startMoney - lostMoney;
// SOLUTIONEND

// OPENTESTSSTART
it('The `startMoney` variable contains a value more or equal 100', () => {
  expect(startMoney).gte(100);
});

it('The `lostMoney` variable contains a value between 50 and 80', () => {
  expect(lostMoney).gte(50).lte(80);
});

it('The `endMoney` variable contains the difference between `startMoney` and `lostMoney`', () => {
  expect(endMoney).equal(startMoney - lostMoney);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
