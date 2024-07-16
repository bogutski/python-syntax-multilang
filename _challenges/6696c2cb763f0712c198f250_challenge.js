// NAMEEN:
// NAMERU:Проверка на вхождение элементов одного массива в другой

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задача похожа на предыдущую, но уже без алгоритма решения.

Функция `isFirstContainsSecond` должна принимать два массива, в котором могут содержаться строки и числа

Функция должна возвращать `true`, если первый массив содержит все элементы второго массива, иначе `false`.

Если хоть один из массивов пустой, то функция должна возвращать `false`.

Примеры запуска функции:
```javascript
isFirstContainsSecond([1, 2, 3], [3, 2]) // true
isFirstContainsSecond(["hello", "hello", "js"], ["js", "practice") // false
isFirstContainsSecond([1, 2, 3], []) // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function isFirstContainsSecond
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isFirstContainsSecond(arr1, arr2) {
  if (!arr1.length || !arr2.length || arr1.length < arr2.length) return false
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
    if (values[i] !== 0) return false
  }
  return true;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function isFirstContainsSecond', () => {
  expect(isFirstContainsSecond).to.be.a('function');
});

it('isFirstContainsSecond([1, 2, 3], [3, 2]) should return true', () => {
  expect(isFirstContainsSecond([1, 2, 3], [3, 2])).to.be.true;
});

it('isFirstContainsSecond(["hello", "hello", "js"], ["js", "practice") should return false', () => {
  expect(isFirstContainsSecond(["hello", "hello", "js"], ["js", "practice"])).to.be.false;
});

it('isFirstContainsSecond([1, 2, 3], [3, 2, 1, 1]) should return false', () => {
  expect(isFirstContainsSecond([1, 2, 3], [3, 2, 1, 1])).to.be.false;
});

it('isFirstContainsSecond([1, 2, 3], []) should return false', () => {
  expect(isFirstContainsSecond([1, 2, 3], [])).to.be.false;
});

it('isFirstContainsSecond([], [1, 2, 3]) should return false', () => {
  expect(isFirstContainsSecond([], [1, 2, 3])).to.be.false;
});

it('isFirstContainsSecond([], []) should return false', () => {
  expect(isFirstContainsSecond([], [])).to.be.false;
});

it('isFirstContainsSecond(["", "challenge", "solved"], ["", ""]) should return false', () => {
  expect(isFirstContainsSecond(["", "challenge", "solved"], ["", ""])).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
