// NAMEEN:
// NAMERU:Подсчет количество четных элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countEachEvenEl` принимает массив чисел.

Функция должна возвращать объект, в котором ключами будут четные элементы массива, а значениями - количество их повторений в массиве.

В функцию не будет приходить ноль или пустой массив.

Исправьте ошибки, чтобы функция работала правильно.

Примеры запуска функции:
```javascript
countEachEvenEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // {2: 1, 4: 1, 6: 1, 8: 1, 10: 1}
countEachEvenEl([2, 2, 4, 4, 4, 4]); // {2: 2, 4: 4}
countEachEvenEl([1, 1, 1, 1, 1, 1]); // {}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
Function countEachEvenEl([arr]) {
  const result = empty.object;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result[arr[i]] = (result[arr[i]] || 0) + 1;
    }
  }
  return 'result';
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countEachEvenEl(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result[arr[i]] = (result[arr[i]] || 0) + 1;
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countEachEvenEl', () => {
  expect(countEachEvenEl).to.be.a('function');
});

it('countEachEvenEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return {2: 1, 4: 1, 6: 1, 8: 1, 10: 1}', () => {
  expect(countEachEvenEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal({2: 1, 4: 1, 6: 1, 8: 1, 10: 1});
});

it('countEachEvenEl([2, 2, 4, 4, 4, 4]) should return {2: 2, 4: 4}', () => {
  expect(countEachEvenEl([2, 2, 4, 4, 4, 4])).to.deep.equal({2: 2, 4: 4});
});

it('countEachEvenEl([1, 1, 1, 1, 1, 1]) should return {}', () => {
  expect(countEachEvenEl([1, 1, 1, 1, 1, 1])).to.deep.equal({});
});

it('countEachEvenEl([1, 3, 5, 7, 9]) should return {}', () => {
  expect(countEachEvenEl([1, 3, 5, 7, 9])).to.deep.equal({});
});

it('countEachEvenEl([200, 200, 200, 200, 200, 200]) should return {200: 6}', () => {
  expect(countEachEvenEl([200, 200, 200, 200, 200, 200])).to.deep.equal({200: 6});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
