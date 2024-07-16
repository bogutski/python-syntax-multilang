// NAMEEN:
// NAMERU:Сравнение массивов на повторяющиеся элементы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkArrays` должна принимать два массива, в котором могут содержаться строки и числа.

Функция должна возвращать строку:
* `Array 1 includes all elements of array 2`, если первый массив содержит все элементы второго массива
* `Array 2 has unique elements`, если второй массив содержит уникальные элементы
* `false`, если хоть один из массивов пустой

Примеры запуска функции:
```javascript
checkArrays([1, 2, 3], [3, 2]) // "Array 1 includes all elements of array 2"
checkArrays(["hello", "hello", "js"], ["js", "practice") // "Array 2 has unique elements"
checkArrays([1, 2, 3], []) // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkArrays(arr1, arr2) {
  if (!arr1.length || !arr2.length) return false;
  const obj = {};
  for (let i = 0; i < arr2.length; i++) {
    if (!obj[arr2[i]]) obj[arr2[i]] = 1;
    else obj[arr2[i]]++;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
      obj[arr1[i]]--;
    }
  }

  const values = Object.values(obj)


  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 0) return 'Array 2 has unique elements'
  }
  return 'Array 1 includes all elements of array 2';
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkArrays', () => {
  expect(checkArrays).to.be.a('function');
});

it('checkArrays([1, 2, 3], [3, 2]) should return "Array 1 includes all elements of array 2"', () => {
  expect(checkArrays([1, 2, 3], [3, 2])).to.equal('Array 1 includes all elements of array 2');
});

it('checkArrays(["hello", "hello", "js"], ["js", "practice"]) should return "Array 2 has unique elements"', () => {
  expect(checkArrays(["hello", "hello", "js"], ["js", "practice"])).to.equal('Array 2 has unique elements');
});

it('checkArrays([1, 2, 3], []) should return false', () => {
  expect(checkArrays([1, 2, 3], [])).to.equal(false);
});

it('checkArrays([], [1, 2, 3]) should return false', () => {
  expect(checkArrays([], [1, 2, 3])).to.equal(false);
});

it('checkArrays([], []) should return false', () => {
  expect(checkArrays([], [])).to.equal(false);
});

it('checkArrays([1, 2, 3, 1, 1, 2], [1, 1, 1, 2, 2, 3]) should return "Array 2 has unique elements"', () => {
  expect(checkArrays([1, 2, 3, 1, 1, 2], [11, 1, 1, 2, 2, 3])).to.equal('Array 2 has unique elements');
});

it('checkArrays([1, 2, 3], [1, 2, 3, 4]) should return "Array 2 has unique elements"', () => {
  expect(checkArrays([1, 2, 3], [1, 2, 3, 4])).to.equal('Array 2 has unique elements');
});

it('checkArrays(["js", "practice"], [""]) should return "Array 2 has unique elements"', () => {
  expect(checkArrays(["js", "practice"], [""])).to.equal('Array 2 has unique elements');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
