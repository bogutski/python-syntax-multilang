// NAMEEN:
// NAMERU:Второе минимальное четное число из массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `secondMinEvenNumber`, которая принимает массив чисел и возвращает второе минимальное четное число из массива.

* Если массив пустой или в нем нет четных чисел, то функция должна вернуть `false`.
* Если в массиве нет второго минимального четного числа, то функция должна вернуть `false`.
* Второе минимальное число, не должно быть равно минимальному числу.


Примеры запуска функции:
```javascript
secondMinEvenNumber([1, 2, 3, 4]);      // 4
secondMinEvenNumber([4, 3, -4, 2, 1]);  // 2
secondMinEvenNumber([-5, -3, 1, 3, 5]); // false
secondMinEvenNumber([1, 1, 1]);         // false
secondMinEvenNumber([]);                // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function secondMinEvenNumber(arr){
  if(!arr.length) return false;
  let min = undefined;
  let secondMin = undefined;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      if(min === undefined || arr[i] < min) min = arr[i];
    }
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      if((secondMin === undefined || arr[i] < secondMin) && arr[i] !== min) secondMin = arr[i];
    }
  }

  if(secondMin === undefined) return false;
  return secondMin;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function secondMinEvenNumber', () => {
  expect(secondMinEvenNumber).to.be.a('function');
});

it('Function secondMinEvenNumber does not include method sort', () => {
  expect(secondMinEvenNumber.toString()).to.not.include('sort');
});

it('Function secondMinEvenNumber does not include method Math.min', () => {
  expect(secondMinEvenNumber.toString()).to.not.include('Math.min');
});

it('secondMinEvenNumber([1, 2, 3, 4, 5]) should return 4', () => {
  expect(secondMinEvenNumber([1, 2, 3, 4, 5])).to.equal(4);
});

it('secondMinEvenNumber([10, 8, 6, -2, -4, -8]) should return -4', () => {
  expect(secondMinEvenNumber([10, 8, 6, -2, -4, -8])).to.equal(-4);
});

it('secondMinEvenNumber([20, 36, -45, -78, -22, -12, -6]) should return -22', () => {
  expect(secondMinEvenNumber([20, 36, -45, -78, -22, -12, -6])).to.equal(-22);
});

it('secondMinEvenNumber([-5, -3, -1, 1, 3, 5]) should return false', () => {
  expect(secondMinEvenNumber([-5, -3, -1, 1, 3, 5])).to.equal(false);
});

it('secondMinEvenNumber([10, 10, 10]) should return false', () => {
  expect(secondMinEvenNumber([10, 10, 10])).to.equal(false);
});

it('secondMinEvenNumber([]) should return false', () => {
  expect(secondMinEvenNumber([])).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
