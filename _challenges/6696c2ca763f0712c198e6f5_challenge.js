// NAMEEN:
// NAMERU:Какой массив длиннее?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `compareArr`, которая принимает параметры:
* `arr1` - массив элементов
* `arr2` - массив элементов.

Функция должна определить длину каждого массива и вернуть строку вида:
* `Array1 is longer and its length is n`,
если длина первого массива больше длины второго, `n` - длина первого массива,

* `Array2 is longer and its length is n`,
если длина второго массива больше длины первого, `n` - длина второго массива,

* `Arrays are equal`, если длины массивов равны.

Пример запуска функции:
```javascript
compareArr([1, 2, 3], [1, 2, 3, 4, 5])
// Array2 is longer and its length is 5
```

Похожий пример:
```javascript
compareStr("abc", "hello")
// String2 is longer and its length is 5

compareStr("name", "hi")
// String1 is longer and its length is 4

compareStr("123", "abc")
// Strings are equal
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function compareArr(arr1, arr2) {
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  if (arr1Length > arr2Length) {
    return 'Array1 is longer and its length is ' + arr1Length;
  } else if (arr1Length < arr2Length) {
    return 'Array2 is longer and its length is ' + arr2Length;
  } else {
    return 'Arrays are equal';
  }
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function compareArr', () => {
  expect(compareArr).to.be.a('function');
});

it('Function returns string', () => {
  expect(compareArr([1], [1, 2, 3])).to.be.a('string');
});

it('compareArr([1, 2, 3], [1, 2, 3, 4, 5]) returns `Array2 is longer and its length is 5`', () => {
  expect(compareArr([1, 2, 3], [1, 2, 3, 4, 5])).eq('Array2 is longer and its length is 5');

});

it('compareArr([1, 2, 3, 4, 5], [1, 2, 3]) returns `Array1 is longer and its length is 5`', () => {
  expect(compareArr([1, 2, 3, 4, 5], [1, 2, 3])).eq('Array1 is longer and its length is 5');
});

it('compareArr([1, 2, 3], [1, 2, 3]) returns `Arrays are equal`', () => {
  expect(compareArr([1, 2, 3], [1, 2, 3])).eq('Arrays are equal');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
