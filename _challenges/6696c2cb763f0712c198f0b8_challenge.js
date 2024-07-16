// NAMEEN:
// NAMERU:Удвоение нечетных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `doubleOddNumbers` принимает массив в качестве параметра и возвращает массив, в котором все нечетные числа удвоены.

Строки и/или четные числа возвращаются без изменений в том же порядке.

В массиве встречаются только числа и строки.

Пример запуска функции:
```javascript
doubleOddNumbers([1, 2, 3, 4, 5]); // [2, 2, 6, 4, 10]
doubleOddNumbers([2, 2, "4", 4, 6]); // [2, 2, "4", 4, 6]
doubleOddNumbers(["hello", 2, "4", 4]); // ["hello", 2, "4", 4]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleOddNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((typeof arr[i] === 'number' || !isNaN(arr[i])) && arr[i] % 2 === 1)
      arr[i] *= 2;
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleOddNumbers', () => {
  expect(doubleOddNumbers).to.be.a('function');
});

it('doubleOddNumbers([1, 2, 3, 4, 5]) should return [2, 2, 6, 4, 10]', () => {
  expect(doubleOddNumbers([1, 2, 3, 4, 5])).to.deep.equal([2, 2, 6, 4, 10]);
});

it('doubleOddNumbers([2, 2, "4", 4, 6]) should return [2, 2, "4", 4, 6]', () => {
  expect(doubleOddNumbers([2, 2, "4", 4, 6])).to.deep.equal([2, 2, "4", 4, 6]);
});

it('doubleOddNumbers(["hello", 2, "4", 4]) should return ["hello", 2, "4", 4]', () => {
  expect(doubleOddNumbers(["hello", 2, "4", 4])).to.deep.equal(["hello", 2, "4", 4]);
});

it('doubleOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return [2, 2, 6, 4, 10, 6, 14, 8, 18, 10]', () => {
  expect(doubleOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal([2, 2, 6, 4, 10, 6, 14, 8, 18, 10]);
});

it('doubleOddNumbers([1, 3, 5, 7, 9) should return [2, 6, 10, 14, 18]', () => {
  expect(doubleOddNumbers([1, 3, 5, 7, 9])).to.deep.equal([2, 6, 10, 14, 18]);
});

it('doubleOddNumbers([]) should return []', () => {
  expect(doubleOddNumbers([])).to.deep.equal([]);
});

it('doubleOddNumbers([""]) should return [""]', () => {
  expect(doubleOddNumbers([""])).to.deep.equal([""]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
