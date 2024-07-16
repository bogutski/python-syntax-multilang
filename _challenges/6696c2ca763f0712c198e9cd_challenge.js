// NAMEEN:
// NAMERU:Числа больше 10 разделить на 10

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `divideOn10` принимает массив чисел от 0 до 99 и возвращает массив, в котором все числа, большие 10 разделены на 10.

Используйте инструкцию `continue` для пропуска итерации цикла, если число меньше 10.

```javascript
divideOn10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1.1, 1.2, 1.3, 1.4, 1.5]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function divideOn10(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) continue;
    arr[i] = arr[i] / 10;
  }
  return arr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function divideOn10', () => {
  expect(divideOn10).to.be.a('function');
});

it('divideOn10 should include statement continue', () => {
  expect(divideOn10.toString()).to.include('continue');
});

it('divideOn10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1.1]', () => {
  expect(divideOn10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1.1]);
});

it('divideOn10([7, 8, 9, 10, 11, 12]) should return [7, 8, 9, 1, 1.1, 1.2]', () => {
  expect(divideOn10([7, 8, 9, 10, 11, 12])).to.eql([7, 8, 9, 1, 1.1, 1.2]);
});

it('divideOn10([10, 61, 27, 30, 46, 54]) should return [1.0, 6.1, 2.7, 3.0, 4.6, 5.4]', () => {
  expect(divideOn10([10, 61, 27, 30, 46, 54])).to.eql([1.0, 6.1, 2.7, 3.0, 4.6, 5.4]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
