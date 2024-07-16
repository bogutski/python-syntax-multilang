// NAMEEN:
// NAMERU:Фильтрация чисел и обращение порядка элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterNumbersAndReverse`, которая принимает массив, содержащий элементы разных типов данных.

Функция должна сначала фильтровать массив, оставляя только числовые значения, которые не равны `NaN`. После фильтрации, функция должна обратить порядок элементов и вернуть новый массив.


Примеры запуска функции:
```javascript
filterNumbersAndReverse([1, 'text', NaN, 2.5, undefined, 3, NaN, 4]); // [4, 3, 2.5, 1]
filterNumbersAndReverse(['100', 100, 'NaN', 101, NaN]); // [101, 100]
filterNumbersAndReverse(['string', true, NaN, false]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterNumbersAndReverse(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterNumbersAndReverse(array) {
  let result = []
  array.forEach(el => {
    if(typeof el === 'number' && !isNaN(el)) result.push(el)
  })

  return result.reverse();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterNumbersAndReverse', () => {
  expect(filterNumbersAndReverse).to.be.a('function');
});

it("Original array should not be modified", () => {
  const array  = ['100', 100, 'NaN', 101, NaN];
  filterNumbersAndReverse(array)
  expect(array).to.deep.equal(['100', 100, 'NaN', 101, NaN]);
});

it("filterNumbersAndReverse([1, 'text', NaN, 2.5, undefined, 3, NaN, 4]) should return [4, 3, 2.5, 1]", () => {
  expect(filterNumbersAndReverse([1, 'text', NaN, 2.5, undefined, 3, NaN, 4])).to.deep.equal([4, 3, 2.5, 1]);
});

it("filterNumbersAndReverse(['100', 100, 'NaN', 101, NaN]) should return [101, 100]", () => {
  expect(filterNumbersAndReverse(['100', 100, 'NaN', 101, NaN])).to.deep.equal([101, 100]);
});

it("filterNumbersAndReverse(['string', true, NaN, false]) should return []", () => {
  expect(filterNumbersAndReverse(['string', true, NaN, false])).to.deep.equal([]);
});

it("filterNumbersAndReverse([10, 20, NaN, 30]) should return [30, 20, 10]", () => {
  expect(filterNumbersAndReverse([10, 20, NaN, 30])).to.deep.equal([30, 20, 10]);
});

it("filterNumbersAndReverse([1.1, NaN, 2.2, NaN, 3.3]) should return [3.3, 2.2, 1.1]", () => {
  expect(filterNumbersAndReverse([1.1, NaN, 2.2, NaN, 3.3])).to.deep.equal([3.3, 2.2, 1.1]);
});

it("filterNumbersAndReverse([0, -1, 1, NaN]) should return [1, -1, 0]", () => {
  expect(filterNumbersAndReverse([0, -1, 1, NaN])).to.deep.equal([1, -1, 0]);
});

it("filterNumbersAndReverse([null, undefined, NaN, 0, 0, 0, 1]) should return [1, 0, 0, 0]", () => {
  expect(filterNumbersAndReverse([null, undefined, NaN, 0, 0, 0, 1])).to.deep.equal([1, 0, 0, 0]);
});

it("filterNumbersAndReverse([5, 5, 5]) should return [5, 5, 5]", () => {
  expect(filterNumbersAndReverse([5, 5, 5])).to.deep.equal([5, 5, 5]);
});

it("filterNumbersAndReverse([Infinity, -Infinity, NaN]) should return [-Infinity, Infinity]", () => {
  expect(filterNumbersAndReverse([Infinity, -Infinity, NaN])).to.deep.equal([-Infinity, Infinity]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
