// NAMEEN:
// NAMERU:Найти минимальное и максимальное число из двух массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `minAndMax`, которая принимает два массива чисел.

Функция должна вернуть массив из двух чисел, где:
 * первое число - это `минимальное` число из двух массивов,
 * второе число - это `максимальное` число из двух массивов.

Если оба массива пустые, то функция должна вернуть массив из двух `undefined`.


Примеры запуска функции:
```javascript
minAndMax([-125, -75, -45], [15, 12, 36]); // [-125, 36]
minAndMax([11, 2, 3, 4, 5 ,-22], []);      // [-22, 11]
minAndMax([1,2,3], [4,5,6]);               // [1,6]
minAndMax([0], [0]);                       // [0, 0]
minAndMax([], []);                         // [undefined, undefined]
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
  const newArr = [...arr1, ...arr2];
  let min = newArr[0];
  let max = newArr[0];

  for (let i = 1; i < newArr.length; i++){
    if(newArr[i] < min) min = newArr[i];
    if(newArr[i] > max) max = newArr[i];
  }

  return [min, max];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function minAndMax', () => {
  expect(minAndMax).to.be.a('function');
});

it('Function minAndMax should not include Math.min', () => {
  expect(minAndMax.toString()).to.not.include('Math.min');
});

it('Function minAndMax should not include Math.max', () => {
  expect(minAndMax.toString()).to.not.include('Math.max');
});

it('minAndMax([1,2,3], [4,5,6]) should return [1,6]', () => {
  expect(minAndMax([1,2,3], [4,5,6])).to.eql([1,6]);
});

it('minAndMax([-125, -75, -365, -4745, -1], [15, 423, 541, 12, 36, 888]) should return [-4745, 888]', () => {
  expect(minAndMax([-125, -75, -365, -4745, -1], [15, 423, 541, 12, 36, 888])).to.eql([-4745, 888]);
});

it('minAndMax([111, 2, 3, 4, 5 ,-222], []) should return [-222, 111]', () => {
  expect(minAndMax([111, 2, 3, 4, 5 ,-222], [])).to.eql([-222, 111]);
});

it('minAndMax([0], [0]) should return [0, 0]', () => {
  expect(minAndMax([0], [0])).to.eql([0, 0]);
});

it('minAndMax([], []) should return [undefined, undefined]', () => {
  expect(minAndMax([], [])).to.eql([undefined, undefined]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
