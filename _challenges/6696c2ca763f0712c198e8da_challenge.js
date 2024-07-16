// NAMEEN:
// NAMERU:Целые числа из диапазона

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fillArray`, которая принимает два целых числа `n` и `m` и возвращает массив, заполненный целыми последовательными числами.

Если `n` больше чем `m`, то функция должна вернуть массив, заполненный последовательными числами от `m` до `n`.

Если `n` меньше чем `m`, то функция должна вернуть массив, заполненный последовательными числами от `n` до `m`.

Если `n` и `m` равны, то функция должна вернуть массив, содержащий одно число.

Алгоритм решения задачи:

1. Создать пустой массив `result`.

2. Создать переменную `start` и присвоить ей начальное значение `n`.

3. Создать переменную `end` и присвоить ей начальное значение `m`.

4. Сравнить `n` и `m`. Если `n` больше чем `m`, то записать в переменную `start` значение `m`, а в переменную `end` значение `n`.

5. Создать цикл `for`, который будет выполняться от `start` до `end` включительно.

6. В теле цикла добавить в массив `result` очередное число.

7. Вернуть массив `result`.

Примеры запуска функции:

```javascript
fillArray(1, 5); // [1, 2, 3, 4, 5]
fillArray(5, 1); // [1, 2, 3, 4, 5]
fillArray(5, 5); // [5]
fillArray(-5, 5); //  [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillArray(n, m) {
  let result = [];
  let start = n;
  let end = m;
  if (n > m) {
    start = m;
    end = n;
  }
  for (let i = start; i <= end; i = i + 1) {
    result.push(i);
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fillArray', () => {
  expect(fillArray).to.be.a('function');
});

it('fillArray(1, 10) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
  expect(fillArray(1, 10)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('fillArray(10, 1) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
  expect(fillArray(10, 1)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('fillArray(1, 1) should return [1]', () => {
  expect(fillArray(1, 1)).to.eql([1]);
});

it('fillArray(-8, 3) should return [- 8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3]', () => {
  expect(fillArray(-8, 3)).to.eql([-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3]);
});

it('fillArray(3, -8) should return [- 8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3]', () => {
  expect(fillArray(3, -8)).to.eql([-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3]);
});

it('fillArray(-8, -8) should return [-8]', () => {
  expect(fillArray(-8, -8)).to.eql([-8]);
});

it('fillArray(-16, -1) should return [-16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]', () => {
  expect(fillArray(-16, -1)).to.eql([-16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
