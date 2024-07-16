// NAMEEN:
// NAMERU:Первый и последний элемент массива поменять местами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `switchFirstAndLast` принимает один параметр:
* `array` - массив чисел

Необходимо первый и последний элемент массива поменять местами.

Функция должна вернуть измененный массив.

Примеры запуска функции:
```javascript
switchFirstAndLast([1, 2, 3, 4]) // [4, 2, 3, 1]

switchFirstAndLast([5, 2, 3, 4]) // [4, 2, 3, 5]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function switchFirstAndLast(array) {
  const lastElement= array[array.length - 1];
  array[array.length-1] = array[0]
  array[0] = lastElement
  return array
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function switchFirstAndLast', () => {
  expect(switchFirstAndLast).to.be.a('function');
});

it('switchFirstAndLast([1, 2, 3, 4]) should return [4, 2, 3, 1]', () => {
  expect(switchFirstAndLast([1, 2, 3, 4])).to.eql([4, 2, 3, 1]);
});

it('switchFirstAndLast([2, 4]) should return [4, 2]', () => {
  expect(switchFirstAndLast([2, 4])).to.eql([4, 2]);
});

it('switchFirstAndLast([10, 2, 3, 4]) should return [4, 2, 3, 10]', () => {
  expect(switchFirstAndLast([10, 2, 3, 4])).to.eql([4, 2, 3, 10]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
