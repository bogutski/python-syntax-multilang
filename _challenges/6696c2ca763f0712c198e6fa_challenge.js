// NAMEEN:
// NAMERU:На сколько два массива отличаются по длине

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `differenceOfArrays`, которая принимает два параметра:
* `arr1` - массив элементов,
* `arr2` - массив элементов.

Функция должна вернуть число - разницу между длинами массивов.
Возвращаемое число должно быть положительным.

Пример запуска функции:
```javascript
differenceOfArrays([14, 52, 1, 'abc', null], [12, 902, 'zx', 4, 'qwe', undefined]);
// 1
```

Похожий пример:
```javascript
function differenceOfStr(str1, str2) {
  if(str1.length > str2.length){
    return str1.length - str2.length
  } else {
    return str2.length - str1.length
  }
}
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function differenceOfArrays(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1.length - arr2.length;
  } else {
    return arr2.length - arr1.length;
  }
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function differenceOfArrays', () => {
  expect(differenceOfArrays).to.be.a('function');
});

it('Function differenceOfArrays([14, 52, 1, "abc", null], [12, 902, "zx", 4, "qwe", undefined]) returns 1', () => {
  expect(
    differenceOfArrays([14, 52, 1, 'abc', null], [12, 902, 'zx', 4, 'qwe', undefined]),
  ).to.equal(1);
});

it('Function differenceOfArrays([1, 2, 3, 4, 5, 6, 5, 4], [1, 2, 3, 4]) returns 4', () => {
  expect(differenceOfArrays([1, 2, 3, 4, 5, 6, 5, 4], [1, 2, 3, 4])).to.equal(4);
});

it('Function differenceOfArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]) returns 0', () => {
  expect(differenceOfArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).to.equal(0);
});

it('Function differenceOfArrays([], []) returns 0', () => {
  expect(differenceOfArrays([], [])).to.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
