// NAMEEN:
// NAMERU:Сумма чисел из трех массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfNumbers`, которая принимает 3 массива и возвращает сумму всех чисел в этих массивах.

В массивах могут быть не только числа, но и другие типы данных. Такие элементы массива нужно игнорировать.

Если все три массива пустые, то верните строку: `'All arrays are empty'`.

Hint: Это задание можно выполнить с помощью только одного цикла.


Пример запуска функции:
```javascript
sumOfNumbers([1,'2',3], [4,5,'6'], ['7',8,9]) // 30
sumOfNumbers([10, 34, 37, 75], [500, false], []) // 656
sumOfNumbers([true, (1 === 1), 1000], [], [10]) // 1010
sumOfNumbers([], [20, 30], [1, 2, 3]) // 56
sumOfNumbers(['hi'], ['there'], ['no', 'numbers']) // 0
sumOfNumbers([], [], []) // 'All arrays are empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfNumbers(arr1, arr2, arr3){
  if(!arr1.length && !arr2.length && !arr3.length) return 'All arrays are empty';

  let sum = 0;
  const newArr = [...arr1, ...arr2, ...arr3];

  for(let i = 0; i < newArr.length; i++){
    if(typeof newArr[i] === 'number') sum += newArr[i];
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfNumbers', () => {
  expect(sumOfNumbers).to.be.a('function');
});

it("sumOfNumbers([1, '2', 3], [4, 5, '6'], ['7', 8, 9]) should return 30", () => {
  expect(sumOfNumbers([1, '2', 3], [4, 5, '6'], ['7', 8, 9])).to.equal(30);
});

it("sumOfNumbers([10, 34, 37, 75], [47, 500, false], []) should return 703", () => {
  expect(sumOfNumbers([10, 34, 37, 75], [47, 500, false], [])).to.equal(703);
});

it("sumOfNumbers([true, (1 === 1), 1000], [], [9000]) should return 10000", () => {
  expect(sumOfNumbers([true, (1 === 1), 1000], [], [9000])).to.equal(10000);
});

it("sumOfNumbers([], [10, 20, 30], [1, 2, 3, 4, 5, 0]) should return 75", () => {
  expect(sumOfNumbers([], [10, 20, 30], [1, 2, 3, 4, 5, 0])).to.equal(75);
});

it("sumOfNumbers(['hi', 'there'], ['there', 'is'], ['no', 'numbers']) should return 0", () => {
  expect(sumOfNumbers(['hi', 'there'], ['there', 'is'], ['no', 'numbers'])).to.equal(0);
});

it("sumOfNumbers([], [], []) should return 'All arrays are empty'", () => {
  expect(sumOfNumbers([], [], [])).to.equal('All arrays are empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
