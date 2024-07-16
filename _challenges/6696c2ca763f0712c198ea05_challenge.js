// NAMEEN:
// NAMERU:Вычитание диапазона чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `subtraction`, которая принимает 4 аргумента:

* `amount` - первоначальное значение
* `num1` - начало диапазона
* `num2` - конец диапазона
* `step` - шаг итерации цикла

Функция должна вычесть из `amount` все числа в диапазоне от `num1` до `num2` с шагом `step`.

Например:
Если `amount = 15, num1 = 1, num2 = 5, step = 2`,
то функция должна вернуть `6`, так как `15 - 1 - 3 - 5 = 6`.

Примеры запуска функции:
```javascript
subtraction(100, 1, 10, 1) // 45
subtraction(50, 5, 25, 2) // -115
subtraction(0, 1, 15, 3) // -35
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function subtraction(amount, num1, num2, step){
  for (let i = num1; i <= num2; i += step) {
    amount -= i;
  }
  return amount;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function subtraction', () => {
  expect(subtraction).to.be.a('function');
});

it('subtraction(100, 1, 10, 1) should return 45', () => {
  expect(subtraction(100, 1, 10, 1)).to.equal(45);
});

it('subtraction(50, 5, 25, 2) should return -115', () => {
  expect(subtraction(50, 5, 25, 2)).to.equal(-115);
});

it('subtraction(0, 1, 15, 3) should return -35', () => {
  expect(subtraction(0, 1, 15, 3)).to.equal(-35);
});

it('subtraction(5000, 100, 1000, 100) should return -500', () => {
  expect(subtraction(5000, 100, 1000, 100)).to.equal(-500);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
