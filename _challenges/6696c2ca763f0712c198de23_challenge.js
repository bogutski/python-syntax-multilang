// NAMEEN:How many apples have you picked?
// NAMERU:Сколько собрано яблок?

/*
INSTRUCTIONENSTART
Lena and Maria picked apples. Lena collected 2 baskets of apples, and Maria collected 3 more baskets.
How many baskets of apples did Maria collect? How many baskets did the girls collect together?

Create a variable `applesLena` and give it a value of 2.

Create a variable `applesMaria` and calculate its value.

Create a variable `applesTotal` and assign to it the sum of the variables `applesLena` and `applesMaria`.

Here's an example, which is fundamentally similar to what you need to do.
Adapt it to the requirements of the task.

```
const bananasPeter = 5;
const bananasNick = bananasPeter + 3;
const bananasTotal = bananasPeter + bananasNick;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Лена и Мария собирали яблоки. Лена собрала 2 корзинки яблок, а Мария собрала на 3 корзинки больше.
Сколько корзинок яблок собрала Мария? Сколько корзинок собрали девушки вместе?

Создайте переменную `applesLena` и присвойте ей значение 2.

Создайте переменную `applesMaria` и посчитайте ее значение.

Создайте переменную `applesTotal` и присвойте в нее сумму переменных `applesLena` и `applesMaria`.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```javascript
const bananasPeter = 5;
const bananasNick = bananasPeter + 3;
const bananasTotal = bananasPeter + bananasNick;
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
const applesLena = 2;
const applesMaria = applesLena + 3;
const applesTotal = applesLena + applesMaria;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const applesLena = 2;
const applesMaria = applesLena + 3;
const applesTotal = applesLena + applesMaria;
// SOLUTIONEND


// OPENTESTSSTART
it('The `applesLena` variable contains a value', () => {
  expect(applesLena).not.undefined;
});

it('The `applesLena` variable contains a number', () => {
  expect(applesLena).a('number');
});

it('The `applesLena` variable has a value of 2', () => {
  expect(applesLena).eq(2);
});

it('The `applesMaria` variable has a value', () => {
  expect(applesMaria).not.undefined;
});

it('The `applesMaria` variable contains a number', () => {
  expect(applesMaria).a('number');
});

it('The `applesMaria` variable is greater than `applesLena` by 3', () => {
  expect(applesLena + 3).eq(applesMaria);
});

it('The `applesMaria` variable has a value of 5', () => {
  expect(applesMaria).eq(5);
});

it('The `applesTotal` variable has a value', () => {
  expect(applesTotal).not.undefined;
});

it('The `applesTotal` variable contains a number', () => {
  expect(applesTotal).a('number');
});

it('The `applesTotal` variable has a value of 7', () => {
  expect(applesTotal).eq(7);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
