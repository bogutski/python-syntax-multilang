// NAMEEN:
// NAMERU:Отфильтровать и преобразовать массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterAndTransform`, которая принимает массив чисел, фильтрует из него все четные числа, а затем преобразует оставшиеся нечетные числа, умножая их на 2.

Используйте метод `forEach` для реализации этой задачи и возвращайте новый массив с результатами преобразования нечетных чисел.


Пример запуска функции:
```javascript
filterAndTransform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [ 2, 6, 10, 14, 18 ]
filterAndTransform([2, 40, 86, 100]); // []
filterAndTransform([-7, -1, 3, 9]); // [ -14, -2, 6, 18 ]
filterAndTransform([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterAndTransform(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterAndTransform(arr) {
  let res = [];
  arr.forEach(n => {
    if(n % 2) res.push(n * 2)
  })

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterAndTransform', () => {
  expect(filterAndTransform).to.be.a('function');
});

it('Function filterAndTransform should include method forEach()', () => {
  const res = filterAndTransform.toString()
  expect(res).to.include('.forEach(')
});

it("filterAndTransform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return [2, 6, 10, 14, 18]", () => {
  expect(filterAndTransform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal([2, 6, 10, 14, 18]);
});

it("filterAndTransform([2, 4, 6, 8, 10]) should return []", () => {
  expect(filterAndTransform([2, 4, 6, 8, 10])).to.deep.equal([]);
});

it("filterAndTransform([11, 13, 15, 17, 19]) should return [22, 26, 30, 34, 38]", () => {
  expect(filterAndTransform([11, 13, 15, 17, 19])).to.deep.equal([22, 26, 30, 34, 38]);
});

it("filterAndTransform([]) should return []", () => {
  expect(filterAndTransform([])).to.deep.equal([]);
});

it("filterAndTransform([1, 3, 5, 7, 9, 11]) should return [2, 6, 10, 14, 18, 22]", () => {
  expect(filterAndTransform([1, 3, 5, 7, 9, 11])).to.deep.equal([2, 6, 10, 14, 18, 22]);
});

it("filterAndTransform([21, 22, 23, 24, 25]) should return [42, 46, 50]", () => {
  expect(filterAndTransform([21, 22, 23, 24, 25])).to.deep.equal([42, 46, 50]);
});

it("filterAndTransform([-1, -3, -5, -2, -4]) should return [-2, -6, -10]", () => {
  expect(filterAndTransform([-1, -3, -5, -2, -4])).to.deep.equal([-2, -6, -10]);
});

it("filterAndTransform([0, 33, 50, 99, 100]) should return [66, 198]", () => {
  expect(filterAndTransform([0, 33, 50, 99, 100])).to.deep.equal([66, 198]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
