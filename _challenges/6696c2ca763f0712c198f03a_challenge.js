// NAMEEN:
// NAMERU:Найти минимальное и максимальное число

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `minAndMax`, которая принимает массив чисел и возвращает массив из двух чисел: минимального и максимального числа в массиве.

* Вычисление минимального числа должно быть от начала массива до середины, не включая середину.

* Вычисление максимального числа должно быть от середины массива до конца, включая середину.

* Если массив пустой, то верните строку `"Array is empty"`.

* Если в массиве только один элемент, то верните строку `"Array has only one element"`.

Используйте метод `Math.floor()` для вычисления середины массива.


Примеры запуска функции:
```javascript
minAndMax([20, -2, 123, 44, -55, -66]); // [-2, 44]
minAndMax([1, 2, 3, 4, 1]);             // [1, 4]
minAndMax([1]);                         // 'Array has only one element'
minAndMax([]);                          // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function minAndMax(arr){
  if(!arr.length) return 'Array is empty';
  if(arr.length === 1) return 'Array has only one element';
  const half = Math.floor(arr.length / 2);
  let min = arr[0];
  let max = arr[arr.length - 1];

  for(let i = 0; i < arr.length; i++){
    if(i < half){
      if(arr[i] < min) min = arr[i];
    } else {
      if(arr[i] > max) max = arr[i];
    }
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

it("minAndMax([1]) should return 'Array has only one element'", () => {
  expect(minAndMax([1])).to.deep.equal('Array has only one element');
});

it('minAndMax([1, 2, 3, 4, 5]) should return [1, 5]', () => {
  expect(minAndMax([1, 2, 3, 4, 5])).to.deep.equal([1, 5]);
});

it('minAndMax([5, 4, 3, 2, 1]) should return [4, 3]', () => {
  expect(minAndMax([5, 4, 3, 2, 1])).to.deep.equal([4, 3]);
});

it('minAndMax([-55, 12, -45, 88, 12, -63, 0, 99, 2, 12]) should return [-55, 99]', () => {
  expect(minAndMax([-55, 12, -45, 88, 12, -63, 0, 99, 2, 12])).to.deep.equal([-55, 99]);
});

it('minAndMax([]) should return "Array is empty"', () => {
  expect(minAndMax([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
