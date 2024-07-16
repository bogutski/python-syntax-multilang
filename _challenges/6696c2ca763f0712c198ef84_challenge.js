// NAMEEN:
// NAMERU:Перевернуть массив с помощью метода reverse

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `reversedArray` принимает массив `arr` в качестве аргумента и возвращает новый массив, в котором элементы в обратном порядке.

Для решения этой задачи используйте метод `reverse`.

Пример запуска функции:
```javascript
reversedArray([1, 2, 3, 4, 5]);  // [5, 4, 3, 2, 1]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reversedArray(arr) {
  return arr.reverse();
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function reversedArray', () => {
  expect(reversedArray).to.be.a('function');
});

it('function reversedArray include statement reverse', () => {
  expect(reversedArray.toString()).to.include('reverse');
});

it('reverseArray([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1]', () => {
  expect(reversedArray([1, 2, 3, 4, 5])).eql([5, 4, 3, 2, 1]);
});

it('reverseArray([1, 1, 1, 1, 1]) should return [1, 1, 1, 1, 1]', () => {
  expect(reversedArray([1, 1, 1, 1, 1])).eql([1, 1, 1, 1, 1]);
});

it('reverseArray([1]) should return [1]', () => {
  expect(reversedArray([1])).eql([1]);
});

it('reverseArray([]) should return []', () => {
  expect(reversedArray([])).eql([]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
