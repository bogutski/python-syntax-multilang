// NAMEEN:
// NAMERU:Фильтрация и сортировка массива с разнообразными типами данных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterAndSortNumbers`, которая принимает массив, содержащий элементы различных типов (строки, числа, NaN, undefined, null и другие).

Функция должна извлекать из этого массива только те элементы, которые могут быть корректно преобразованы в числа (исключая NaN, undefined и null), преобразовывать их в числовой тип и возвращать новый массив, отсортированный по убыванию.


Примеры запуска функции:
```javascript
const arr = ['2', NaN, 'sd', 'NaN', 100, '-100', undefined, null];
console.log(filterAndSortNumbers(arr)); // [100, 2, -100]

const arr1 = ['004', 3.14159, '0.01', '100.5', 'NaN', 200];
console.log(filterAndSortNumbers(arr1)); // [200, 100.5, 4, 3.14159, 0.01]

const arr2 = ['1e2', '-2.5e2', 50, '0003'];
console.log(filterAndSortNumbers(arr2)); // [100, 50, 3, -250]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterAndSortNumbers(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterAndSortNumbers(arr) {
  const onlyNumbers = []
  arr.forEach(el => {
    if(typeof +el === 'number' && !isNaN(+el) && el !== null) onlyNumbers.push(+el)
  })

  return onlyNumbers.sort((a, b) => b - a);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSorted = function(compareFunction){
  const newArray = this.slice()
  if(compareFunction) return newArray.sort(compareFunction)
  else return newArray.sort()
}

it('Created function filterAndSortNumbers', () => {
  expect(filterAndSortNumbers).to.be.a('function');
});

it("filterAndSortNumbers(['2', NaN, 'sd', 'NaN', 100, '-100', undefined, null]) should return [100, 2, -100]", () => {
  expect(filterAndSortNumbers(['2', NaN, 'sd', 'NaN', 100, '-100', undefined, null])).to.deep.equal([100, 2, -100]);
});

it("filterAndSortNumbers should not modify the original array", () => {
  const originalArray = ['2', NaN, 'sd', 'NaN', 100, '-100', undefined, null];
  filterAndSortNumbers(originalArray);
  expect(originalArray).to.deep.equal(['2', NaN, 'sd', 'NaN', 100, '-100', undefined, null]);
});

it("filterAndSortNumbers handles empty array correctly", () => {
  expect(filterAndSortNumbers([])).to.deep.equal([]);
});

it("filterAndSortNumbers filters and sorts an array with positive and negative numbers and numeric strings", () => {
  expect(filterAndSortNumbers(['-1', '1', 0, '0', '100', '-100', 'NaN', NaN, undefined, null])).to.deep.equal([100, 1, 0, 0, -1, -100]);
});

it("filterAndSortNumbers ignores non-numeric strings and non-convertible types", () => {
  expect(filterAndSortNumbers(['apple', '20', 'banana', undefined, '30', null])).to.deep.equal([30, 20]);
});

it("filterAndSortNumbers correctly sorts a mix of integers and floating point numbers", () => {
  expect(filterAndSortNumbers([1.5, '2.5', 3, '0.5'])).to.deep.equal([3, 2.5, 1.5, 0.5]);
});

it("filterAndSortNumbers handles scientific notation and sorts correctly", () => {
  expect(filterAndSortNumbers(['1e3', '1e2', 5, '10'])).to.deep.equal([1000, 100, 10, 5]);
});

it("filterAndSortNumbers returns an empty array when no convertible numbers are present", () => {
  expect(filterAndSortNumbers(['apple', 'banana', NaN, undefined, null])).to.deep.equal([]);
});

it("filterAndSortNumbers treats zero and negative zero as equal and maintains their order", () => {
  expect(filterAndSortNumbers(['-0', 0, '0', '-0'])).to.deep.equal([-0, 0, 0, -0]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
