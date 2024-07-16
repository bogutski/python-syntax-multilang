// NAMEEN:
// NAMERU:На сколько процентов один массив длиннее другого?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `calculateLength`, которая принимает два параметра:
* `arr1` - массив
* `arr2` - массив

Функция должна возвращать строку, в которой будет указано на сколько процентов один массив длиннее другого:

* Например, если первый массив длиннее второго на 20%, то функция должна вернуть строку
`The first array is 20% longer than the second array`.

* Если второй массив длиннее первого на 50%, то функция должна вернуть строку
`The second array is 50% longer than the first array`.

* Если массивы одинаковой длины, то функция должна вернуть строку `The arrays are the same length`.

* Если один из массивов пустой, то функция должна вернуть строку `One of the arrays is empty`.

Для округления чисел используй функцию `Math.round()`.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateLength(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return 'One of the arrays is empty';
  let result = 0;
  if (arr1.length > arr2.length) {
    result = Math.round(((arr1.length - arr2.length) / arr2.length) * 100);
    return 'The first array is ' + result + '% longer than the second array';
  } else if (arr1.length < arr2.length) {
    result = Math.round(((arr2.length - arr1.length) / arr1.length) * 100);
    return 'The second array is ' + result + '% longer than the first array';
  } else return 'The arrays are the same length';
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function calculateLength', () => {
  expect(calculateLength).to.be.a('function');
});

it('Function calculateLength([8, 9], []) returns "One of the arrays is empty"', () => {
  expect(calculateLength([8, 9], [])).eq('One of the arrays is empty');
});

it('Function calculateLength([8, 9], [1, 2, 3, 4, 5]) returns "The second array is 150% longer than the first array"', () => {
  expect(calculateLength([8, 9], [1, 2, 3, 4, 5])).eq('The second array is 150% longer than the first array');
});

it('Function calculateLength([7, 6, 5, 4], [1, 2]) returns "The first array is 100% longer than the second array"', () => {
  expect(calculateLength([7, 6, 5, 4], [1, 2])).eq('The first array is 100% longer than the second array');
});

it('Function calculateLength([], [7, 6, 5, 4]) returns "One of the arrays is empty"', () => {
  expect(calculateLength([], [7, 6, 5, 4])).eq('One of the arrays is empty');
});

it('Function calculateLength([7, 6, 5, 4], [2, 3, 4, 5]) returns "The arrays are the same length"', () => {
  expect(calculateLength([7, 6, 5, 4], [2, 3, 4, 5])).eq('The arrays are the same length');
});

it('Function calculateLength([], []) returns "One of the arrays is empty"', () => {
  expect(calculateLength([], [])).eq('One of the arrays is empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
