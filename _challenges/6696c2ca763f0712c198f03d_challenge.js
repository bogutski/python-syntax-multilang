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

Если оба массива пустые, то функция должна вернуть `null`.


Примеры запуска функции:
```javascript
minAndMax([-5, -3, 25], [3, 65, -5]); // [-5, 65]
minAndMax([0, 1, 2, 3], [8, 9, 10]);  // [0, 10]
minAndMax([-55, 0, 6], []);           // [-55, 6]
minAndMax([], [5, 6, 7]);             // [5, 7]
minAndMax([], []);                    // null
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
  if(!newArr.length) return null;
  let min = newArr[0];
  let max = newArr[0];

  for(let i = 0; i < newArr.length; i++){
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

it('Function minAndMax does not include method Math.min', () => {
  expect(minAndMax.toString()).to.not.include('Math.min');
});

it('Function minAndMax does not include method Math.max', () => {
  expect(minAndMax.toString()).to.not.include('Math.max');
});

it('minAndMax([0, 1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10]) should return [0, 10]', () => {
  expect(minAndMax([0, 1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10])).to.deep.equal([0, 10]);
});

it('minAndMax([-5, -3, 25, 0, 10], [3, 65, -5, 45, 14, 0]) should return [-5, 65]', () => {
  expect(minAndMax([-5, -3, 25, 0, 10], [3, 65, -5, 45, 14, 0])).to.deep.equal([-5, 65]);
});

it('minAndMax([-55, 0, 6, 47-, 12, 5, 55], [] should return [-55, 55]', () => {
  expect(minAndMax([-55, 55], [])).to.deep.equal([-55, 55]);
})

it('minAndMax([], [5, 6, 7, 8, 9, 10]) should return [5, 10]', () => {
  expect(minAndMax([], [5, 6, 7, 8, 9, 10])).to.deep.equal([5, 10]);
});

it('minAndMax([], []) should return null', () => {
  expect(minAndMax([], [])).to.equal(null);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
