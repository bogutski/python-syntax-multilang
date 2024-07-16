// NAMEEN:
// NAMERU:Найти разницу между минимальным и максимальным числом в двух массивах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `minAndMax`, которая принимает два массива чисел.

Функция должна найти минимальное и максимальное число в первом массиве и минимальное и максимальное число во втором массиве.

* Если разница между максимальным и минимальным числом в первом массиве больше, чем во втором - верните массив `[min1, max1]`
* Если разница между максимальным и минимальным числом во втором массиве больше, чем в первом - верните массив `[min2, max2]`
* Если разница будет одинаковой - верните массив `[min1, max1, min2, max2]`

Массивы не будут пустыми.


Примеры запуска функции:
```javascript
minAndMax([5, 10], [3, 6]);           // [ 5, 10 ]
minAndMax([1, 2, 3], [6, 7, 8]);      // [ 1, 3, 6, 8 ]
minAndMax([55, 36, 142, 789], [555]); // [ 36, 789 ]
minAndMax([5], [5]);                  // [ 5, 5, 5, 5 ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function minAndMax(arr1, arr2){
  let min1 = arr1[0];
  let max1 = arr1[0];
  let min2 = arr2[0];
  let max2 = arr2[0];

  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] < min1) min1 = arr1[i];
    if(arr1[i] > max1) max1 = arr1[i];
  }
  for(let i = 0; i < arr2.length; i++){
    if(arr2[i] < min2) min2 = arr2[i];
    if(arr2[i] > max2) max2 = arr2[i];
  }

  if(max1 - min1 > max2 - min2) return [min1, max1];
  else if(max1 - min1 < max2 - min2) return [min2, max2];
  else return [min1, max1, min2, max2]
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function minAndMax', () => {
  expect(minAndMax).to.be.a('function');
});

it("Function minAndMax doesn't include 'Math.min' method", () => {
  expect(minAndMax.toString()).to.not.include('Math.min');
});

it("Function minAndMax doesn't include 'Math.max' method", () => {
  expect(minAndMax.toString()).to.not.include('Math.max');
});

it('minAndMax([0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10]) should return [0, 5]', () => {
  expect(minAndMax([0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).to.eql([0, 5]);
});

it('minAndMax([6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5]) should return [0, 5]', () => {
  expect(minAndMax([6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5])).to.eql([0, 5]);
});

it('minAndMax([55], [55]) should return [55, 55, 55, 55]', () => {
  expect(minAndMax([55], [55])).to.eql([55, 55, 55, 55]);
});

it('minAndMax([-5, -66, -47, -25, -365, -47, -100], [55, 147, 369, 12, 54, 785, 69]) should return [-365, -5, 12, 785]', () => {
  expect(minAndMax([-5, -66, -47, -25, -365, -47, -100], [55, 147, 369, 12, 54, 785, 69])).to.eql([12, 785]);
});

it('minAndMax([100, 0], [0, 100]) should return [0, 100, 0, 100]', () => {
  expect(minAndMax([100, 0], [0, 100])).to.eql([0, 100, 0, 100]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
