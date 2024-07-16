// NAMEEN:How many grains did the inventor of chess ask for the 64th square?
// NAMERU:Сколько зерен попросил изобретатель шахмат за 64-ую клетку?

/*
INSTRUCTIONENSTART
From the legend of the chessboard:

"- Lord," said Setha, "command me to give me one grain of wheat for the first square of the chessboard.

- A grain of wheat? - The king was astonished.
- Yes, my lord. For the second square give me 2 grains, for the third 4, for the fourth 8, for the fifth 16, for the sixth 32...

- Enough, - with irritation the king interrupted him - you will get your grains for all 64 squares of the board, according to your wishes:
each one twice as much as the last. But know that your request is not worthy of my generosity...".

Find how many grains did the inventor ask for the 64th square?
It is not difficult to calculate that it is 2 to the power of 63.

Define a variable `power` in which calculate 2 to the power of 63.

Here is an example that is fundamentally similar to what you need to do, but adapt it to the requirements of the problem:
```
const v = 2 ** 64;
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Из легенды о шахматной доске:

"– Повелитель, – сказал Сета,– прикажи выдать мне за первую клетку шахматной доски одно пшеничное зерно.

– Простое пшеничное зерно? – изумился царь.
– Да, повелитель. За вторую клетку прикажи выдать 2 зерна, за третью 4, за четвертую – 8, за пятую – 16, за шестую – 32...

– Довольно, – с раздражением прервал его царь.– Ты получишь свои зерна за все 64 клетки доски, согласно твоему желанию:
за каждую вдвое больше против предыдущей. Но знай, что просьба твоя недостойна моей щедрости..."

Найдите, сколько зерен попросил изобретатель за 64-ую клетку?
Нетрудно посчитать, что это 2 в степени 63.

Задайте переменную `power`, в которой вычислите 2 в степени 63.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```javascript
const v = 2 ** 64;
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
const power = 2 ** 63;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const power = 2 ** 63;
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `power` contains a value', () => {
  expect(power).not.undefined;
});

it('the variable `power` type is a number', () => {
  expect(power).a('number');
});

it('the variable `power` has the correct value', () => {
  expect(power).equal(2 ** 63);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
