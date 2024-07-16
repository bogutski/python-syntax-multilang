// NAMEEN:
// NAMERU:Сумма чисел в массиве массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfNumbers`, которая принимает массив массивов.

Во внешнем массиве нет никаких элементов, кроме массивов.

Все элементы внутренних массивов являются числами.

Функция должна вернуть сумму всех чисел во внутренних массивах.

Если массив пустой, то верните строку 'Array is empty'.


Примеры запуска функции:
```javascript
sumOfNumbers([ [1,2,3], [4,5,6], [7,8,9] ]) // 45
sumOfNumbers([ [10, 20, 50], [], [0, 0, 0] ]) // 80
sumOfNumbers([ [10,20,30], [-4,-5,-6], [70,80,90], [-10,-11,-12] ]) // 252
sumOfNumbers([]) // 'Array is empty'
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
    for(let j = 0; j < arr[i].length; j++){
      sum += arr[i][j];
    }
  }

  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfNumbers', () => {
  expect(sumOfNumbers).to.be.a('function');
});

it('sumOfNumbers([[1,2,3], [4,5,6], [7,8,9]]) should return 45', () => {
  expect(sumOfNumbers([[1,2,3], [4,5,6], [7,8,9]])).to.be.equal(45);
});

it('sumOfNumbers([[10,20,30], [-4,-5,-6], [70,80,90], [-10,-11,-12]]) should return 252', () => {
  expect(sumOfNumbers([[10,20,30], [-4,-5,-6], [70,80,90], [-10,-11,-12]])).to.be.equal(252);
});

it('sumOfNumbers([[123, 587, 50], [], [0, 0, 0]]) should return 760', () => {
  expect(sumOfNumbers([[123, 587, 50], [], [0, 0, 0]])).to.be.equal(760);
});

it('sumOfNumbers([[1,1,1], [1,1,1], [1,1,1], [1,1,1], [1,1,1]]) should return 15', () => {
  expect(sumOfNumbers([[1,1,1], [1,1,1], [1,1,1], [1,1,1], [1,1,1]])).to.be.equal(15);
});

it('sumOfNumbers([]) should return "Array is empty"', () => {
  expect(sumOfNumbers([])).to.be.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
