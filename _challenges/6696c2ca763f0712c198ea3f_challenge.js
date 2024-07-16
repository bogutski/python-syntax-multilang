// NAMEEN:
// NAMERU:Массив чисел от большего к меньшему

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `decreaseArray` принимает два числа `num1` и `num2`.

 Функция должна возвращать массив чисел от большего к меньшему, включая `num1` и `num2`.

 Сначала необхоимо определить какое из чисел больше, а какое меньше и применить цикл `for` для заполнения массива.

 Пример запуска функции:
 ```javascript
  decreaseArray(5, 2) // [5, 4, 3, 2]
  decreaseArray(2, 5) // [5, 4, 3, 2]
  ```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function decreaseArray(num1, num2) {
  let arr = [];
  if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      arr.push(i);
    }
  } else {
    for (let i = num2; i >= num1; i--) {
      arr.push(i);
    }
  }
  return arr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function decreaseArray', () => {
  expect(decreaseArray).to.be.a('function');
});

it('decreaseArray(5, 2) should return [5, 4, 3, 2]', () => {
  expect(decreaseArray(5, 2)).to.eql([5, 4, 3, 2]);
});

it('decreaseArray(2, 5) should return [5, 4, 3, 2]', () => {
  expect(decreaseArray(2, 5)).to.eql([5, 4, 3, 2]);
});

it('decreaseArray(5, 5) should return [5]', () => {
  expect(decreaseArray(5, 5)).to.eql([5]);
});

it('decreaseArray(0, 100) should return an array with 101 elements', () => {
  expect(decreaseArray(0, 100).length).to.eql(101);
});

it('decreaseArray(-5, 5) should return [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]', () => {
  expect(decreaseArray(-5, 5)).to.eql([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
