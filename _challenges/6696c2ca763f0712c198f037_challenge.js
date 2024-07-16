// NAMEEN:
// NAMERU:Найти минимальное и максимальное отрицательное число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `minAndMaxOfNegatives`, которая принимает массив целых чисел.

Функция должна вернуть массив из двух чисел, где первое число - `минимальное отрицательное` число, а второе - `максимальное отрицательное` число.

Если массив пустой или нет отрицательных чисел, то верните массив: `[undefined, undefined]`.

Методы использовать нельзя.


Примеры запуска функции:
```javascript
minAndMaxOfNegatives([1, 2, 3, 4, -1, -1, 2, 3, 4]) // [-1, -1]
minAndMaxOfNegatives([-3, 2, 3, -10])               // [-10, -3]
minAndMaxOfNegatives([-5, -2, -1])                  // [-5, -1]
minAndMaxOfNegatives([1, 2, 3])                     // [undefined, undefined]
minAndMaxOfNegatives([])                            // [undefined, undefined]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function minAndMaxOfNegatives(arr){
  let min;
  let max;

  for (let i = 0; i < arr.length; i++){
    if(arr[i] < 0) {
      if(min === undefined) {
        min = arr[i];
        max = arr[i];
      }
      else {
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];
      }
    }
  }

  return [min, max];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function minAndMaxOfNegatives', () => {
  expect(minAndMaxOfNegatives).to.be.a('function');
});

it('Function minAndMaxOfNegatives should not include Math.min', () => {
  expect(minAndMaxOfNegatives.toString()).to.not.include('Math.min');
});

it('Function minAndMaxOfNegatives should not include Math.max', () => {
  expect(minAndMaxOfNegatives.toString()).to.not.include('Math.max');
});

it('minAndMaxOfNegatives([-1, 2, 3, -9]) should return [-9, -1]', () => {
  expect(minAndMaxOfNegatives([-1, 2, 3, -9])).to.deep.equal([-9, -1]);
});

it('minAndMaxOfNegatives([9, 8, 7, 6, -5, -5, 4, 3, 2, 1, 0]) should return [-5, -5]', () => {
  expect(minAndMaxOfNegatives([9, 8, 7, 6, -5, -5, 4, 3, 2, 1, 0])).to.deep.equal([-5, -5]);
});

it('minAndMaxOfNegatives([1, 2, 3]) should return [undefined, undefined]', () => {
  expect(minAndMaxOfNegatives([1, 2, 3])).to.deep.equal([undefined, undefined]);
});

it('minAndMaxOfNegatives([-1, -2, -3]) should return [-3, -1]', () => {
  expect(minAndMaxOfNegatives([-1, -2, -3])).to.deep.equal([-3, -1]);
});

it('minAndMaxOfNegatives([0, 0, 0]) should return [undefined, undefined]', () => {
  expect(minAndMaxOfNegatives([0, 0, 0])).to.deep.equal([undefined, undefined]);
});

it('minAndMaxOfNegatives([]) should return [undefined, undefined]', () => {
  expect(minAndMaxOfNegatives([])).to.deep.equal([undefined, undefined]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
