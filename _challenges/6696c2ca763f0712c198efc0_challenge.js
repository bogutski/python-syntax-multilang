// NAMEEN:
// NAMERU:Сумма чисел в массиве и во внутренних массивах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию sumOfNumbers, которая принимает массив чисел и внутренних массивов.

* Во внешнем массиве могут быть только числа и другие массивы с числами.
* Во внутренних массивах могут быть только числа.

Функция должна вернуть сумму всех чисел.

Если массив пустой - верните строку "Array is empty".


Примеры запуска функции:
```javascript
sumOfNumbers([1, 2, [1, 2, 3], 3, 4, [1, 2, 3], 5, 10]); // 37
sumOfNumbers([1, 2, 3, 4, 5, 10]);                       // 25
sumOfNumbers([1, [], 2, [], 3, []]);                     // 6
sumOfNumbers([]);                                        // "Array is empty"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfNumbers(arr){
  if(!arr.length) return 'Array is empty';
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number') sum += arr[i];

    else if(typeof arr[i] === 'object'){
      for(let j = 0; j < arr[i].length; j++){
        sum += arr[i][j];
      }
    }

  }

  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfNumbers', () => {
  expect(sumOfNumbers).to.be.a('function');
});

it('sumOfNumbers([1, 2, [1, 2, 3], 3, 4, [1, 2, 3], 5, 10]) should return 37', () => {
  expect(sumOfNumbers([1, 2, [1, 2, 3], 3, 4, [1, 2, 3], 5, 10])).to.equal(37);
});

it('sumOfNumbers([ [10, -50, 75, 123, 5], 25894, [-500, -632, -789, -4149], [4, 2, 7], -10000 ]) should return 10000', () => {
  expect(sumOfNumbers([ [10, -50, 75, 123, 5], 25894, [-500, -632, -789, -4149], [4, 2, 7], -10000 ])).to.equal(10000);
});

it('sumOfNumbers([1, 2, 3, 4, 5, 10]) should return 25', () => {
  expect(sumOfNumbers([1, 2, 3, 4, 5, 10])).to.equal(25);
});

it('sumOfNumbers([1, [], 2, [], 3, [],  4, [],  5, [],  10]) should return 25', () => {
  expect(sumOfNumbers([1, [], 2, [], 3, [],  4, [],  5, [],  10])).to.equal(25);
});

it('sumOfNumbers([ [1], [2], [3], [4], [5], [10]]) should return 25', () => {
  expect(sumOfNumbers([ [1], [2], [3], [4], [5], [10]])).to.equal(25);
});

it('sumOfNumbers([]) should return "Array is empty"', () => {
  expect(sumOfNumbers([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
