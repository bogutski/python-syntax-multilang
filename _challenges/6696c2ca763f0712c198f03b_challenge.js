// NAMEEN:
// NAMERU:Найти минимальное и максимальное число в двух массивах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `minAndMax`, которая принимает два массива чисел.

Функция должна найти минимальное число в первом массиве и максимальное во втором.

Функция должна вернуть массив из двух чисел: минимальное число из первого массива, а второе - максимальное число из
 второго массива.

Массивы не будут пустыми.


Примеры запуска функции:
```javascript
minAndMax([1,2,3], [1,2,3]);                 // [1, 3]
minAndMax([55, 74, 47], [9, 14, 7]);         // [47, 14]
minAndMax([-5, 5, -15], [25, 78, 5]);        // [-15, 78]
minAndMax([555, 741, 547], [963, 147, 369]); // [547, 963]
minAndMax([1], [1]);                         // [1, 1]
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
  let min = arr1[0];
  let max = arr2[0];
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;

  for(let i = 0; i < length; i++){
    if(arr1[i] < min) min = arr1[i];
    if(arr2[i] > max) max = arr2[i];
  }

  return [min, max];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function minAndMax', () => {
  expect(minAndMax).to.be.a('function');
});

it('minAndMax([1,2,3,4,5,6,7,8,9,0], [1,2,3,4,5,6,7,8,9,0]) should return [0, 9]', () => {
  expect(minAndMax([1,2,3,4,5,6,7,8,9,0], [1,2,3,4,5,6,7,8,9,0])).to.deep.equal([0, 9]);
});

it('minAndMax([-1, -55, 74, 23, 45, 358, -56], [55, 485, -36, -789, 147]) should return [-56, 485]', () => {
  expect(minAndMax([-1, -55, 74, 23, 45, 358, -56], [55, 485, -36, -789, 147])).to.deep.equal([-56, 485]);
});

it('minAndMax([0], [0]) should return [0, 0]', () => {
  expect(minAndMax([0], [0])).to.deep.equal([0, 0]);
});

it('minAndMax([555, 789, 3654, -1475, -369], [-963, 547, 5884, -698, 4231, 7892, 441]) should return [-1475, 7892]', () => {
  expect(minAndMax([555, 789, 3654, -1475, -369], [-963, 547, 5884, -698, 4231, 7892, 441])).to.deep.equal([-1475, 7892]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
