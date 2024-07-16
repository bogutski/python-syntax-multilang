// NAMEEN:Rolls in a restaurant
// NAMERU:Роллы в ресторане

/*
INSTRUCTIONENSTART
Katya and Sasha went to a sushi restaurant. Katya said she wasn't hungry.
Sasha ordered 20 rolls, but Katya ate 5 of Sasha's rolls anyway.
How many rolls did Sasha have left?

Create a variable `rolls` and give it the value 20.

Create a variable `leftoverRolls` and count how many rolls Sasha has left.

Here is an example, which is fundamentally similar to what you need to do.
Adapt it to the requirements of the problem.

```
const cupcakes = 8;
const leftoverCupcakes = cupcakes - 3;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Катя и Саша пошли в суши ресторан. Катя сказала, что она не голодная.
Саша заказал 20 роллов, но Катя все равно скушала 5 Сашиных роллов.
Сколько роллов осталось у Саши?

Создайте переменную `rolls` и присвойте ей значение 20.

Создайте переменную `leftoverRolls` и посчитайте, сколько же у Саши осталось роллов.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```javascript
const cupcakes = 8;
const leftoverCupcakes = cupcakes - 3;
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
const rolls = 20;
const leftoverRolls = rolls - 5;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const rolls = 20;
const leftoverRolls = rolls - 5;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `rolls` contains a value', () => {
  expect(rolls).not.undefined;
});

it('Variable `rolls` contains a number', () => {
  expect(rolls).a('number');
});

it('Variable `rolls` has a value of 20', () => {
  expect(rolls).eq(20);
});

it('The `leftoverRolls` variable has a value', () => {
  expect(leftoverRolls).not.undefined;
});

it('The `leftoverRolls` variable contains a number', () => {
  expect(leftoverRolls).a('number');
});


it('The `leftoverRolls` variable has a value of 15', () => {
  expect(leftoverRolls).eq(15);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
