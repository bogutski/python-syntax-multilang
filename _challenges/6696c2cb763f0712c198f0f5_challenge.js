// NAMEEN:
// NAMERU:Найти только отрицательные нечетные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `onlyNegativeAndOdd`, которая принимает массив положительных, отрицательных чисел и строки.

Функция должна вернуть новый массив, в котором будут только отрицательные нечетные числа из исходного массива, строки игнорируются.

* Если в исходном массиве нет подходящих чисел, то функция должна вернуть строку 'No matches found'.

* Если передан пустой массив, то функция должна вернуть строку 'Array is empty'.


Примеры запуска функции:
```javascript
onlyNegativeAndOdd([-56, 40, 8, 'hello', 142, '46', -74, 0]); // 'No matches found'
onlyNegativeAndOdd([-47, '-34', 59, '-72', -90]);             // [ -47 ]
onlyNegativeAndOdd([-1, -3, -5, -7, -9]);                     // [ -1, -3, -5, -7, -9 ]
onlyNegativeAndOdd([]);                                       // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function onlyNegativeAndOdd(arr){
  if(!arr.length) return 'Array is empty';
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number' && arr[i] < 0 && arr[i] % 2) newArr.push(arr[i]);
  }
  if(!newArr.length) return 'No matches found';
  else return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function onlyNegativeAndOdd', () => {
  expect(onlyNegativeAndOdd).to.be.a('function');
});

it("Function onlyNegativeAndOdd doesn't include method filter", () => {
  expect(onlyNegativeAndOdd.toString()).to.not.include('filter');
});

it("onlyNegativeAndOdd([1, 2, -3, -4, -5, -6, 7, 8, 9, 10]) should return [-3, -5]", () => {
  expect(onlyNegativeAndOdd([1, 2, -3, -4, -5, -6, 7, 8, 9, 10])).to.deep.equal([-3, -5]);
});

it("onlyNegativeAndOdd([-56, 400, 88, 693, 142, 46, -74, 0]) should return 'No matches found'", () => {
  expect(onlyNegativeAndOdd([-56, 400, 88, 693, 142, 46, -74, 0])).to.deep.equal('No matches found');
});

it("onlyNegativeAndOdd([-47, -34, 5-6, -78, -900]) should return [-47, -1]", () => {
  expect(onlyNegativeAndOdd([-47, -34, 5-6, -78, -900])).to.deep.equal([-47, -1]);
});

it("onlyNegativeAndOdd(['-87', -45, 85, 45, '31', -71, '0', 'text']) should return [-45, -71]", () => {
  expect(onlyNegativeAndOdd(['-87', -45, 85, 45, '31', -71, '0', 'text'])).to.deep.equal([-45, -71]);
});

it("onlyNegativeAndOdd([1, 3, 5, 7, 9]) should return 'No matches found'", () => {
  expect(onlyNegativeAndOdd([1, 3, 5, 7, 9])).to.deep.equal('No matches found');
});

it("onlyNegativeAndOdd([]) should return 'Array is empty'", () => {
  expect(onlyNegativeAndOdd([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
