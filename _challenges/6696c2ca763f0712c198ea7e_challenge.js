// NAMEEN:
// NAMERU:Добавление результата суммы в строку

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfArray`, которая принимает массив чисел.

Функция должна посчитать сумму всех чисел в массиве и вернуть строку вида:

 * `Sum of array is ${sum}`, где `sum` - сумма всех чисел в массиве.

В массиве будут передаваться только числа.

Пример запуска функции:
```javascript
sumOfArray([1,2,3,4,5]); // 'Sum of array is 15'
sumOfArray([0,5,10,15,20,25]); // 'Sum of array is 75'
sumOfArray([33, 74, 61, 78]); // 'Sum of array is 246'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfArray(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return `Sum of array is ${sum}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfArray', () => {
  expect(sumOfArray).to.be.a('function');
});

it('sumOfArray([1,2,3,4,5,6,7,8,9,10]) should return 55', () => {
expect(sumOfArray([1,2,3,4,5,6,7,8,9,10])).to.equal('Sum of array is 55');
});

it('sumOfArray([0,5,10,15,20,25,30,35,40,45,50]) should return 275', () => {
expect(sumOfArray([0,5,10,15,20,25,30,35,40,45,50])).to.equal('Sum of array is 275');
});

it('sumOfArray([33, 74, 61, 78, 146, 987, 321]) should return 1700', () => {
expect(sumOfArray([33, 74, 61, 78, 146, 987, 321])).to.equal('Sum of array is 1700');
});

it('sumOfArray([14,28,-35,4,-5,68,7,8,-90,10]) should return 9', () => {
expect(sumOfArray([14,28,-35,4,-5,68,7,8,-90,10])).to.equal('Sum of array is 9');
});

it('sumOfArray([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]) should return -55', () => {
expect(sumOfArray([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10])).to.equal('Sum of array is -55');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
