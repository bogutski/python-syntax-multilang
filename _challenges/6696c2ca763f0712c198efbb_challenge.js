// NAMEEN:
// NAMERU:Сумма четных и нечетных чисел в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfEvenAndOdd`, которая принимает массив чисел.

Функция должна суммировать все четные и нечетные числа отдельно и возвращать строку вида:

* `Sum of even numbers is <sumEven>, sum of odd numbers is <sumOdd>`, где `<sumEven>` - сумма четных чисел, `<sumOdd>` - сумма нечетных чисел.

Если массив пустой, то вернуть строку `Array has no numbers`.


Примеры запуска функции:
```javascript
sumOfEvenAndOdd([1,2,3,4]);              // "Sum of even numbers is 6, sum of odd numbers is 4"
sumOfEvenAndOdd([1,2,3,4,5,6,7,8,9,10]); // "Sum of even numbers is 30, sum of odd numbers is 25"
sumOfEvenAndOdd([123, -55, 40, 27]);     // "Sum of even numbers is 40, sum of odd numbers is 95"
sumOfEvenAndOdd([]);                     // "Array has no numbers"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfEvenAndOdd(arr){
  if(!arr.length) return 'Array has no numbers';
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2) sumOdd += arr[i]
      else sumEven += arr[i]
  }
  return `Sum of even numbers is ${sumEven}, sum of odd numbers is ${sumOdd}`
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfEvenAndOdd', () => {
  expect(sumOfEvenAndOdd).to.be.a('function');
});

it('sumOfEvenAndOdd([1,2,3,4]) should return "Sum of even numbers is 6, sum of odd numbers is 4"', () => {
  expect(sumOfEvenAndOdd([1,2,3,4])).to.equal('Sum of even numbers is 6, sum of odd numbers is 4');
});

it('sumOfEvenAndOdd([1,2,3,4,5,6,7,8,9,10]) should return "Sum of even numbers is 30, sum of odd numbers is 25"', () => {
  expect(sumOfEvenAndOdd([1,2,3,4,5,6,7,8,9,10])).to.equal('Sum of even numbers is 30, sum of odd numbers is 25');
});

it('sumOfEvenAndOdd([123, -52, -78, 56, 5, -63, 7, 32]) should return "Sum of even numbers is -42, sum of odd numbers is 72"', () => {
  expect(sumOfEvenAndOdd([123, -52, -78, 56, 5, -63, 7, 32])).to.equal('Sum of even numbers is -42, sum of odd numbers is 72');
});

it('sumOfEvenAndOdd([2, 4, 6, 8, 10, 66]) should return "Sum of even numbers is 96, sum of odd numbers is 0"', () => {
  expect(sumOfEvenAndOdd([2, 4, 6, 8, 10, 66])).to.equal('Sum of even numbers is 96, sum of odd numbers is 0');
});

it('sumOfEvenAndOdd([1, 3, 5, 7, 9, 11]) should return "Sum of even numbers is 0, sum of odd numbers is 36"', () => {
  expect(sumOfEvenAndOdd([1, 3, 5, 7, 9, 11])).to.equal('Sum of even numbers is 0, sum of odd numbers is 36');
});

it('sumOfEvenAndOdd([]) should return "Array has no numbers"', () => {
  expect(sumOfEvenAndOdd([])).to.equal('Array has no numbers');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
