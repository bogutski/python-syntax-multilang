// NAMEEN:
// NAMERU:Средняя длина четырех массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `averageLength`, которая принимает четыре параметра:
* `arr1` - массив элементов,
* `arr2` - массив элементов,
* `arr3` - массив элементов,
* `arr4` - массив элементов.

Функция должна возвращать среднюю длину массивов, округленную до ближайшего целого числа.

Для округления используй метод  `Math.round()`.

Пример запуска функции:
```javascript
averageLength([1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]);
// 5
```

Похожий пример:
```javascript
function averageString(str1, str2, str3) {
  const average = (str1.length + str2.length + str3.length) / 3;
  return Math.round(average);
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
function averageLength(arr1, arr2, arr3, arr4) {
  const average =  (arr1.length + arr2.length + arr3.length + arr4.length) / 4;
  return Math.round(average)
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageLength', () => {
  expect(averageLength).to.be.a('function');
});

it('Function averageLength([1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]) returns 5', () => {
  expect(averageLength([1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.equal(5);
});

it('Function averageLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) returns 10', () => {
  expect(averageLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(10);
});

it('Function averageLength([1, 2, 3, 4], [1], [], [1, 2, 3, 4, 5, 6, 7]) returns 3', () => {
  expect(averageLength([1, 2, 3, 4], [1], [], [1, 2, 3, 4, 5, 6, 7])).to.equal(3);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
