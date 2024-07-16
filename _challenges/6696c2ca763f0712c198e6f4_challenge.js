// NAMEEN:
// NAMERU:Найди сумму длин массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `arraySumLengths`, которая принимает два параметра:
* `arr1` - массив
* `arr2` - массив

Функция должна вернуть сумму длин массивов.

Пример запуска функции:
```javascript
arraySumLengths(['a', 'b', 'c'], [1, 2, 3, 4, 5, 6, 7, 8])
// 11
```

Похожий пример со строками:
```javascript
function strSumLengths(str1, str2){
 return str1.length + str2.length;
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
function arraySumLengths(arr1, arr2) {
  return arr1.length + arr2.length;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function arraySumLengths', () => {
  expect(arraySumLengths).to.be.a('function');
});

it('Function arraySumLengths(["a", "b", "c"], [1, 2, 3, 4, 5, 6, 7, 8]) should return 11', () => {
  expect(arraySumLengths(['a', 'b', 'c'], [1, 2, 3, 4, 5, 6, 7, 8])).eq(11);
});

it('Function arraySumLengths(["a"], [1, 2, 3, 4, 5]) should return 6', () => {
  expect(arraySumLengths(['a'], [1, 2, 3, 4, 5])).eq(6);
});

it('Function arraySumLengths([], []) should return 0', () => {
  expect(arraySumLengths([], [])).eq(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
