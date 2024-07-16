// NAMEEN:
// NAMERU:Сумма нечетных чисел массива. Инструкция continue

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `oddSum` принимает массив чисел `arr` в качестве параметра.

Функция должна вернуть сумму нечетных чисел в массиве.

В начальном решении показано как сделать эту задачу с помощью метода `if`.

Исправьте код используя оператор `continue` в цикле.

Пример запуска функции:
```javascript
oddSum([1, 2, 3, 4, 5]) // 9
oddSum([0, 1, 2, 4, 6, 8]) // 1
```

Задача будет проверяться на использование метода `continue`.

Если массив пустой, то функция должна вернуть 0.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function oddSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {sum += arr[i]}
  }
  return sum
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function oddSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) continue;
    sum += arr[i];
  }
  return sum
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function oddSum', () => {
  expect(oddSum).to.be.a('function');
});

it('function oddSum should include statement continue', () => {
  expect(oddSum.toString()).to.include('continue');
});

it('oddSum([1, 2, 3, 4, 5]) should return 9', () => {
  expect(oddSum([1, 2, 3, 4, 5])).to.equal(9);
});

it('oddSum([0, 1, 2, 4, 6, 8]) should return 1', () => {
  expect(oddSum([0, 1, 2, 4, 6, 8])).to.equal(1);
});

it('oddSum([1, 3, 5, 7, 9]) should return 25', () => {
  expect(oddSum([1, 3, 5, 7, 9])).to.equal(25);
});

it('oddSum([2, 2, 2, 2, 5, 2, 2, 2, 2]) should return 5', () => {
  expect(oddSum([2, 2, 2, 2, 5, 2, 2, 2, 2])).to.equal(5);
});

it('oddSum([0]) should return 0', () => {
  expect(oddSum([0])).to.equal(0);
});

it('oddSum([]) should return 0', () => {
  expect(oddSum([])).to.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
