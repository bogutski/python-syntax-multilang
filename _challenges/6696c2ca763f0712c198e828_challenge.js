// NAMEEN:
// NAMERU:Если есть элемент - удвоить его

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `findAndDouble` принимает три массива и число `number`.

Если число `number` есть в массиве, то удвойте его.

Если число `number` встречается несколько раз, то удвойте только первое вхождение.

Если число `number` не встречается, то добавьте его удвоенное значение в конец массива.

Эти условия относятся ко всем трем массивам.

Верните массив из трех массивов.

Примеры запуска функции:
```javascript
findAndDouble([1, 2, 3], [2, 5, 1], [7, 8, 9], 2) // [[1, 4, 3], [4, 5, 1], [7, 8, 9, 4]]
findAndDouble([1, 2, 1], [0, 2, 0], [1, 2, 3], 1) // [[2, 2, 1], [0, 2, 0, 2], [2, 2, 3]]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findAndDouble(arr1, arr2, arr3, num) {

  if (arr1.includes(num)) {
    arr1.splice(arr1.indexOf(num), 1, num * 2)
  } else {
    arr1.push(num * 2)
  }
  if (arr2.includes(num)) {
    arr2.splice(arr2.indexOf(num), 1, num * 2)
  } else {
    arr2.push(num * 2)
  }
  if (arr3.includes(num)) {
    arr3.splice(arr3.indexOf(num), 1, num * 2)
  } else {
    arr3.push(num * 2)
  }
  return [arr1, arr2, arr3]

}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function findAndDouble', () => {
  expect(findAndDouble).to.be.a('function');
});

it('findAndDouble([1, 2, 3], [2, 5, 1], [7, 8, 9], 2) should return [[1, 4, 3], [4, 5, 1], [7, 8, 9, 4]]', () => {
  expect(findAndDouble([1, 2, 3], [2, 5, 1], [7, 8, 9], 2)).to.eql([[1, 4, 3], [4, 5, 1], [7, 8, 9, 4]]);
});

it('findAndDouble([1, 2, 1], [0, 2, 0], [1, 2, 3], 1) should return [[2, 2, 1], [0, 2, 0, 2], [2, 2, 3]]', () => {
  expect(findAndDouble([1, 2, 1], [0, 2, 0], [1, 2, 3], 1)).to.eql([[2, 2, 1], [0, 2, 0, 2], [2, 2, 3]]);
});

it('findAndDouble([1, 2, 3], [2, 5, 1], [7, 8, 9], 5) should return [[1, 2, 3, 10], [2, 10, 1], [7, 8, 9, 10]]', () => {
  expect(findAndDouble([1, 2, 3], [2, 5, 1], [7, 8, 9], 5)).to.eql([[1, 2, 3, 10], [2, 10, 1], [7, 8, 9, 10]]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
