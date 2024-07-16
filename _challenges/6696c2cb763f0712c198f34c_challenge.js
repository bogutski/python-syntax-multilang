// NAMEEN:
// NAMERU:Разделение чисел на четные и нечетные

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `separateNumbersByParity`, которая принимает массив чисел.

Функция должна вернуть новый массив с двумя подмассивами: первый с четными числами, второй - с нечетными.

При добавлении четных чисел используйте метод `push`, при добавлении нечетных чисел используйте метод `unshift`.

Пример запуска функции:
```javascript
separateNumbersByParity([3, 2, 4, 1, 5]); /// [ [2, 4], [5, 1, 3] ]
separateNumbersByParity([2, 8, 22, 46, 88]) // [ [2, 8, 22, 46, 88], [] ]
separateNumbersByParity([27, 1, 99, 67, 13, 21]) // [ [], [21, 13, 67, 99, 1, 27] ]
separateNumbersByParity([55, 10, 47, 7, 0, 68, 100]) // [ [10, 0, 68, 100], [7, 47, 55] ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function separateNumbersByParity(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function separateNumbersByParity(arr) {
  const even = [];
  const odd = [];

  for(let num of arr){
    if(num % 2 === 0) even.push(num)
    else odd.unshift(num)
  }

  return [even, odd];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function separateNumbersByParity', () => {
  expect(separateNumbersByParity).to.be.a('function');
});

it("separateNumbersByParity([3, 2, 4, 1, 5]) should return [[2, 4], [5, 1, 3]]", () => {
  expect(separateNumbersByParity([3, 2, 4, 1, 5])).to.deep.equal([[2, 4], [5, 1, 3]]);
});

it("separateNumbersByParity([1, 3, 5]) should return [[], [5, 3, 1]]", () => {
  expect(separateNumbersByParity([1, 3, 5])).to.deep.equal([[], [5, 3, 1]]);
});

it("separateNumbersByParity([2, 4, 6]) should return [[2, 4, 6], []]", () => {
  expect(separateNumbersByParity([2, 4, 6])).to.deep.equal([[2, 4, 6], []]);
});

it("separateNumbersByParity([]) should return [[], []]", () => {
  expect(separateNumbersByParity([])).to.deep.equal([[], []]);
});

it("separateNumbersByParity([0]) should return [[0], []]", () => {
  expect(separateNumbersByParity([0])).to.deep.equal([[0], []]);
});

it("should verify that separateNumbersByParity function is defined and is a function", () => {
  expect(separateNumbersByParity).to.be.a('function');
});

it("separateNumbersByParity([0, 1, 2, 3, 4, 5]) should place even numbers in the first array and odd numbers in reverse order in the second array", () => {
  expect(separateNumbersByParity([0, 1, 2, 3, 4, 5])).to.deep.equal([[0, 2, 4], [5, 3, 1]]);
});

it("separateNumbersByParity([7, -2, -3, 4, -1, 6]) should correctly handle negative numbers", () => {
  expect(separateNumbersByParity([7, -2, -3, 4, -1, 6])).to.deep.equal([[-2, 4, 6], [-1, -3, 7]]);
});

it("separateNumbersByParity([11, 22, 33, 44, 55, 66]) should group all even and odd numbers correctly", () => {
  expect(separateNumbersByParity([11, 22, 33, 44, 55, 66])).to.deep.equal([[22, 44, 66], [55, 33, 11]]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
