// NAMEEN:
// NAMERU:Сумма четных чисел. Метод continue

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `evenSum` принимает массив чисел в качестве параметра.

Функция `evenSum` должна возвращать сумму четных чисел в массиве.

Используйте метод `continue` для пропуска нечетных чисел.

Решение будет проверяться на использование метода `continue`.

Пример запуска функции:
```javascript
evenSum([1, 2, 3, 4, 5, 6]) // 12
evenSum([1, 3, 5, 7, 9]) // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function evenSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) continue;
    sum += arr[i];
  }
  return sum
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function evenSum', () => {
  expect(evenSum).to.be.a('function');
});

it('function evenSum should include continue', () => {
  expect(evenSum.toString()).to.include('continue');
});

it('evenSum([1, 2, 3, 4, 5, 6]) should return 12', () => {
  expect(evenSum([1, 2, 3, 4, 5, 6])).to.equal(12);
});

it('evenSum([1, 3, 5, 7, 9]) should return 0', () => {
  expect(evenSum([1, 3, 5, 7, 9])).to.equal(0);
});

it('evenSum([2, 4, 6, 8, 10]) should return 30', () => {
  expect(evenSum([2, 4, 6, 8, 10])).to.equal(30);
})

it('evenSum([0]) should return 0', () => {
  expect(evenSum([0])).to.equal(0);
});

it('evenSum([]) should return 0', () => {
  expect(evenSum([])).to.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
