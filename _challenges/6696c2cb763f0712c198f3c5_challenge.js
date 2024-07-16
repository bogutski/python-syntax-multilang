// NAMEEN:
// NAMERU:Очистка массива от ложных значений

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterFalsy`, которая принимает массив с различными типами данных.

Функция должна использовать метод `shift()` для последовательного удаления и проверки каждого элемента массива.

Если элемент является "ложным" значением (`false, 0, "", null, undefined, NaN`), он не должен включаться в возвращаемый массив.

Функция должна возвращать новый массив, содержащий только "истинные" значения из исходного массива.


Пример запуска функции:
```javascript
filterFalsy([0, 1, false, 2, '', 3]);  // [ 1, 2, 3 ]
filterFalsy([NaN, true, false, true]); // [ true, true ]
filterFalsy(['a', 'b', null, 'c', undefined, '']); // [ 'a', 'b', 'c' ]
filterFalsy([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterFalsy(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterFalsy(arr) {
  let res = []

  while(arr.length){
    const el = arr.shift()
    if(el) res.push(el)
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterFalsy', () => {
  expect(filterFalsy).to.be.a('function');
});

it('Function filterFalsy includes method shift() ', () => {
  const res = filterFalsy.toString()
  expect(res).to.include('.shift()');
});

it("filterFalsy([0, 1, false, 2, '', 3]) should return [1, 2, 3]", () => {
  expect(filterFalsy([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3]);
});

it("filterFalsy(['a', 'b', null, 'c', undefined, '']) should return ['a', 'b', 'c']", () => {
  expect(filterFalsy(['a', 'b', null, 'c', undefined, ''])).to.deep.equal(['a', 'b', 'c']);
});

it("filterFalsy([NaN, true, false, true]) should return [true, true]", () => {
  let result = filterFalsy([NaN, true, false, true]);
  expect(result).to.deep.equal([true, true]);
  expect(result.length).to.equal(2);
});

it("filterFalsy([]) should return an empty array for an initially empty array", () => {
  expect(filterFalsy([])).to.deep.equal([]);
});

it("filterFalsy([undefined, 0, null, '', NaN]) should return an empty array", () => {
  expect(filterFalsy([undefined, 0, null, '', NaN])).to.deep.equal([]);
});

it("should correctly process an array with mixed 'truthy' and 'falsy' values", () => {
  expect(filterFalsy([1, 'test', 0, '0', false, true, null])).to.deep.equal([1, 'test', '0', true]);
});

it("filterFalsy([false, 0, '', null, undefined, NaN, 'NaN']) should return ['NaN']", () => {
  expect(filterFalsy([false, 0, '', null, undefined, NaN, 'NaN'])).to.deep.equal(['NaN']);
});

it("filterFalsy([1, 2, 3, 'false', 'null', 'undefined']) should return [1, 2, 3, 'false', 'null', 'undefined']", () => {
  expect(filterFalsy([1, 2, 3, 'false', 'null', 'undefined'])).to.deep.equal([1, 2, 3, 'false', 'null', 'undefined']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
