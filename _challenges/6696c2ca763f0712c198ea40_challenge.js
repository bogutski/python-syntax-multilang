// NAMEEN:
// NAMERU:От большего к меньшему четные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `decreaseEven` принимает два числа `num1` и `num2`.

Число `num1` всегда будет больше или равно `num2` и оба числа всегда будут положительными.

Функция должна возвращать массив, содержащий все четные числа в диапазоне от `num1` до `num2` включительно.

Числа должны быть упорядочены по убыванию.

Пример запуска функции:
```javascript
decreaseEven(10, 2) // [10, 8, 6, 4, 2]
decreaseEven(8, 4) // [8, 6, 4]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function decreaseEven(num1, num2) {
  let arr = [];
  for (let i = num1; i >= num2; i--) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function decreaseEven', () => {
  expect(decreaseEven).to.be.a('function');
});

it('decreaseEven(10, 2) should return [10, 8, 6, 4, 2]', () => {
  expect(decreaseEven(10, 2)).eql([10, 8, 6, 4, 2]);
});

it('decreaseEven(8, 4) should return [8, 6, 4]', () => {
  expect(decreaseEven(8, 4)).eql([8, 6, 4]);
});

it('decreaseEven(3, 2) should return [2]', () => {
  expect(decreaseEven(3, 2)).eql([2]);
});

it('decreaseEven(1, 0) should return [0]', () => {
  expect(decreaseEven(1, 0)).eql([0]);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
