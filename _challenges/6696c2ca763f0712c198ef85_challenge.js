// NAMEEN:
// NAMERU:Найти в массиве четные и нечетные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `findNumbers` принимает массив в качестве аргумента `arr`. Массив arr может содержать различные типы данных,
в том числе и числа. Числа расположены в массиве по возрастанию.

Функция должна вернуть массив из двух массивов.

Первый массив содержит только четные числа из массива, а второй массив содержит только нечетные числа из массива.

При этом числа в этих массивах должны быть расположены в обратном порядке, чем в массиве arr.

При решении задачи нельзя использовать метод `reverse`.

Пример запуска функции:
```javascript
findNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [[10, 8, 6, 4, 2], [9, 7, 5, 3, 1]]
findNumbers([1, 3, "hello", "32", {name: "Alice"}, 5, 7, 9]); // [[], [9, 7, 5, 3, 1]]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findNumbers
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findNumbers(arr) {
  let evenArr = [];
  let oddArr = [];
  for (let i = arr.length-1; i >= 0; i--) {
    if (typeof arr[i] === 'number' && arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
    if (typeof arr[i] === 'number' && arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  return [evenArr, oddArr];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findNumbers', () => {
  expect(findNumbers).to.be.a('function');
});

it('function findNumber do not include statement reverse', () => {
  expect(findNumbers.toString()).to.not.include('reverse');
});

it('findNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) returns [[10, 8, 6, 4, 2], [9, 7, 5, 3, 1]]', () => {
  expect(findNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal([[10, 8, 6, 4, 2], [9, 7, 5, 3, 1]]);
});

it('findNumbers([1, 3, "hello", "32", {name: "Alice"}, 5, 7, 9]) returns [[], [9, 7, 5, 3, 1]]', () => {
  expect(findNumbers([1, 3, 'hello', '32', {name: "Alice"}, 5, 7, 9])).to.deep.equal([[], [9, 7, 5, 3, 1]]);
});

it('findNumbers([true, -3, 5, 8, "letter"]) returns [[8], [-3, 5]]', () => {
  expect(findNumbers([true, -3, 5, 8, 'letter'])).to.deep.equal([[8], [5, -3]]);
});

it('findNumbers(["hello", "a", "JS", true]) returns [[], []]', () => {
  expect(findNumbers(["hello", "a", "JS", true])).to.deep.equal([[], []]);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
