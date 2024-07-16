// NAMEEN:
// NAMERU:Найти минимальное и максимальное число среди разных типов данных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `minAndMax`, которая принимает два массива.

Массивы могут включать в себя числа, числа в строковом формате, строки с текстом и пустые строки.

Пример массива: `[5, '-10', 'abc', '']`.

Функция должна найти минимальное и максимальное число, включая числа в строковом формате, и вернуть их в виде массива: `[min, max]`.

В возвращаемом массиве числа должны быть в числовом формате.

* Если оба массива пустые, то вернуть строку `'Both arrays are empty'`.

* Если числа не найдены, то вернуть массив: `[undefined, undefined]`.


В коде три ошибки и все они до цикла. Разберитесь в функции и перепишите код самостоятельно.


Примеры запуска функции:
```javascript
minAndMax([1, 2, 3], [1, '22', '0', '', 'ssss']);      // [0, 22]
minAndMax([], [-14, '-2', '000', '', 'text', '-515']); // [-515, 0]
minAndMax(['', 'word'], ['', 'text', 'test']);         // [undefined, undefined]
minAndMax([], []);                                     // 'Both arrays are empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function minAndMax(arr1, arr2){
  const newArr = [...arr1, ...arr2];
  if(!newArr.length) 'Both arrays are empty';
  let min = 0;
  let max = 0;

  for(let i = 0; i < newArr.length; i++){
    if ( newArr[i] !== '' && !isNaN(newArr[i]) ) {
      if(min === undefined) {
        min = +newArr[i];
        max = +newArr[i];
      } else {
        if(newArr[i] < min) min = +newArr[i];
        if(newArr[i] > max) max = +newArr[i];
      }
    }
  }
  return [min, max];
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function minAndMax(arr1, arr2){
  const newArr = [...arr1, ...arr2];
  if(!newArr.length) return 'Both arrays are empty';
  let min;
  let max;

  for(let i = 0; i < newArr.length; i++){
    if ( newArr[i] !== '' && !isNaN(newArr[i]) ) {
      if(min === undefined) {
        min = +newArr[i];
        max = +newArr[i];
      } else {
        if(newArr[i] < min) min = +newArr[i];
        if(newArr[i] > max) max = +newArr[i];
      }
    }
  }
  return [min, max];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function minAndMax', () => {
  expect(minAndMax).to.be.a('function');
});

it('Function minAndMax does not include Math.min', () => {
  expect(minAndMax.toString()).to.not.include('Math.min');
});

it('Function minAndMax does not include Math.max', () => {
  expect(minAndMax.toString()).to.not.include('Math.max');
});

it("minAndMax([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, '2', '000', '', 'ss']) should return [0, 9]", () => {
  expect(minAndMax([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, '2', '000', '', 'ss'])).to.deep.equal([0, 9]);
});

it("minAndMax([], [14, '2', '000', '', 'text', '-55']) should return [-55, 14]", () => {
  expect(minAndMax([], [14, '2', '000', '', 'text', '-55'])).to.deep.equal([-55, 14]);
});

it("minAndMax(['test', 5, -25, '', 78, '-41', 0], []) should return [-41, 78]", () => {
  expect(minAndMax(['test', 5, -25, '', 78, '-41', 0], [])).to.deep.equal([-41, 78]);
});

it("minAndMax([236, '555', 12, 89, ''], [11, '22', 69, '']) should return [11, 555]", () => {
  expect(minAndMax([236, '555', 12, 89, ''], [11, '22', 69, ''])).to.deep.equal([11, 555]);
});

it("minAndMax(['test','',], ['', 'text', '']) should return [undefined, undefined]", () => {
  expect(minAndMax(['test','',], ['', 'text', ''])).to.deep.equal([undefined, undefined]);
});

it("minAndMax([], []) should return 'Both arrays are empty'", () => {
  expect(minAndMax([], [])).to.deep.equal('Both arrays are empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
