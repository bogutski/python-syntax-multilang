// NAMEEN:
// NAMERU:Перевернуть массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `reverseArray` принимает массив, в котором могут быть разные типы данных.

Функция должна вернуть новый массив, в котором элементы идут в обратном порядке.

Пример запуска функции:
```javascript
reverseArray([1, 2, 3]) // [3, 2, 1]
reverseArray(["hello" , 12, "world", 234, false]) // [false, 234, "world", 12, "hello"]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseArray(arr) {
  const newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseArray', () => {
  expect(reverseArray).to.be.a('function');
});

it('reverseArray([1, 2, 3]) returns [3, 2, 1]', () => {
  expect(reverseArray([1, 2, 3])).to.deep.equal([3, 2, 1]);
});

it('reverseArray(["hello" , 12, "world", 234, false]) returns [false, 234, "world", 12, "hello"', () => {
  expect(reverseArray(["hello", 12, "world", 234, false])).to.deep.equal([false, 234, "world", 12, "hello"]);
});

it('reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) returns [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
  expect(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

it('reverseArray(["JS task"]) returns ["JS task"]', () => {
  expect(reverseArray(["JS task"])).to.deep.equal(["JS task"]);
});

it('reverseArray([]) returns []', () => {
  expect(reverseArray([])).to.deep.equal([]);
})
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
