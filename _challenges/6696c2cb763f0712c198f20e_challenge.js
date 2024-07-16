// NAMEEN:
// NAMERU:Разделить массив пополам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `splitArrayInTwo` должна принимать массив, разделять его на 2 подмассива и возвращать вложенный массив, содержащий оба подмассива.

Входной массив должен быть разделен пополам на равные части, если он содержит четное количество элементов.
Если массив содержит нечетное количество элементов, то первый подмассив должен содержать дополнительный элемент.
Если массив пустой, то функция должна вернуть сообщение `"Array is empty"`.

Задача должна быть решена с помощью цикла `for` и метода `push`.

Подсказки:
1) для нахождения середины массива используйте функцию `Math.round()`.
2) можно использовать 2 цикла `for` для заполнения подмассивов: в первом цикле заполнять первый подмассив, двигаясь от первого элемента входного массива до середины, во втором цикле заполнять второй подмассив, двигаясь от середины входного массива до последнего элемента.

Примеры запуска функции:
```javascript
splitArrayInTwo([1, 2, 3, 4, 5, 6]) // [[1, 2, 3], [4, 5, 6]]
splitArrayInTwo([10, 20, 30, 40, 50]) // [[10, 20, 30], [40, 50]]
splitArrayInTwo([]) // "Array is empty"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitArrayInTwo(array) {
  if (array.length === 0) {
    return "Array is empty";
  }

  const middle = Math.round(array.length / 2);

  const firstHalf = [];
  const secondHalf = [];

  for (let i = 0; i < middle; i++) {
    firstHalf.push(array[i]);
  }

  for (let i = middle; i < array.length; i++) {
    secondHalf.push(array[i]);
  }

  return [firstHalf, secondHalf];
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitArrayInTwo', () => {
  expect(splitArrayInTwo).to.be.a('function');
});

it('Function splitArrayInTwo should not include method slice()', () => {
  expect(splitArrayInTwo.toString()).to.not.include('.slice(');
});

it('Function splitArrayInTwo should not include method splice()', () => {
  expect(splitArrayInTwo.toString()).to.not.include('.splice(');
});

it('splitArrayInTwo([1, 2, 3, 4, 5, 6]) should return [[1, 2, 3], [4, 5, 6]]', () => {
  expect(splitArrayInTwo([1, 2, 3, 4, 5, 6])).to.deep.equal([[1, 2, 3], [4, 5, 6]]);
});

it('splitArrayInTwo([10, 20, 30, 40, 50]) should return [[10, 20, 30], [40, 50]]', () => {
  expect(splitArrayInTwo([10, 20, 30, 40, 50])).to.deep.equal([[10, 20, 30], [40, 50]]);
});

it('splitArrayInTwo([]) should return "Array is empty"', () => {
  expect(splitArrayInTwo([])).to.equal("Array is empty");
});

it('splitArrayInTwo([1]) should return [[1], []]', () => {
  expect(splitArrayInTwo([1])).to.deep.equal([[1], []]);
});

it('splitArrayInTwo([1, 2]) should return [[1], [2]]', () => {
  expect(splitArrayInTwo([1, 2])).to.deep.equal([[1], [2]]);
});

it('splitArrayInTwo([-1, 25.6, -303.00234, true, "", 99999, "test - test", [1,2,3]]) should return [[-1, 25.6, -303.00234, true], ["", 99999, "test - test", [1,2,3]]]', () => {
  expect(splitArrayInTwo([-1, 25.6, -303.00234, true, "", 99999, "test - test", [1, 2, 3]])).to.deep.equal([[-1, 25.6, -303.00234, true], ["", 99999, "test - test", [1, 2, 3]]]);
});

it('splitArrayInTwo([true, "222", false]) should return [[true, "222"], [false]]', () => {
  expect(splitArrayInTwo([true, "222", false])).to.deep.equal([[true, "222"], [false]]);
});

it('splitArrayInTwo([11,22,33,44,55,66,77,88,99,100]) should return [[11,22,33,44,55], [66,77,88,99,100]]', () => {
  expect(splitArrayInTwo([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])).to.deep.equal([[11, 22, 33, 44, 55], [66, 77, 88, 99, 100]]);
});

it('splitArrayInTwo([11,22,33,44,55,66,77]) should return [[11,22,33,44], [55,66,77]]', () => {
  expect(splitArrayInTwo([11, 22, 33, 44, 55, 66, 77])).to.deep.equal([[11, 22, 33, 44], [55, 66, 77]]);
});

it('splitArrayInTwo([11,22,33,44,55,66,77,88,99]) should return [[11,22,33,44,55], [66,77,88,99]]', () => {
  expect(splitArrayInTwo([11, 22, 33, 44, 55, 66, 77, 88, 99])).to.deep.equal([[11, 22, 33, 44, 55], [66, 77, 88, 99]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
