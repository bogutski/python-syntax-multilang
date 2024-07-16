// NAMEEN:
// NAMERU:Разделение массива на чётные и нечётные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `splitEvenOdd`, которая принимает массив чисел.

Функция должна создать два новых массива: один для чётных чисел и другой для нечётных.

Используйте метод `shift()` для последовательного извлечения элементов из начала исходного массива и распределите их по двум новым массивам в зависимости от чётности.

Функция должна возвращать объект с двумя ключами: `even` для массива чётных чисел и `odd` для массива нечётных чисел.


Пример запуска функции:
```javascript
splitEvenOdd([12, 34, 55, 78, 91]); // { even: [ 12, 34, 78 ], odd: [ 55, 91 ] }
splitEvenOdd([1, 2, 3, 4, 5, 6]);   // { even: [ 2, 4, 6 ], odd: [ 1, 3, 5 ] }
splitEvenOdd([]); // { even: [], odd: [] }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function splitEvenOdd(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitEvenOdd(arr) {
  const even = []
  const odd = []

  while(arr.length){
    const el = arr.shift()

    if(el % 2 === 0) even.push(el)
    else odd.push(el)
  }

  return {even, odd};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitEvenOdd', () => {
  expect(splitEvenOdd).to.be.a('function');
});

it('Function splitEvenOdd should include method shift()', () => {
  const res = splitEvenOdd.toString()
  expect(res).to.include('.shift()')
});

it("splitEvenOdd([1, 2, 3, 4, 5, 6]) should return { even: [2, 4, 6], odd: [1, 3, 5] }", () => {
  expect(splitEvenOdd([1, 2, 3, 4, 5, 6])).to.deep.equal({ even: [2, 4, 6], odd: [1, 3, 5] });
});

it("splitEvenOdd([12, 34, 55, 78, 91]) should return { even: [12, 34, 78], odd: [55, 91] }", () => {
  expect(splitEvenOdd([12, 34, 55, 78, 91])).to.deep.equal({ even: [12, 34, 78], odd: [55, 91] });
});

it("splitEvenOdd([]) should return { even: [], odd: [] } for an empty input array", () => {
  expect(splitEvenOdd([])).to.deep.equal({ even: [], odd: [] });
});

it("splitEvenOdd([0, 1, 5, 8, 14]) should return { even: [0, 8, 14], odd: [1, 5] }", () => {
  expect(splitEvenOdd([0, 1, 5, 8, 14])).to.deep.equal({ even: [0, 8, 14], odd: [1, 5] });
});

it("splitEvenOdd([2, 4, 6, 8]) should return { even: [2, 4, 6, 8], odd: [] } when all numbers are even", () => {
  expect(splitEvenOdd([2, 4, 6, 8])).to.deep.equal({ even: [2, 4, 6, 8], odd: [] });
});

it("splitEvenOdd([1, 3, 5, 7]) should return { even: [], odd: [1, 3, 5, 7] } when all numbers are odd", () => {
  expect(splitEvenOdd([1, 3, 5, 7])).to.deep.equal({ even: [], odd: [1, 3, 5, 7] });
});

it("splitEvenOdd([-1, -2, -3, -4]) should return { even: [-2, -4], odd: [-1, -3] } for negative numbers", () => {
  expect(splitEvenOdd([-1, -2, -3, -4])).to.deep.equal({ even: [-2, -4], odd: [-1, -3] });
});

it("splitEvenOdd([0]) should return { even: [0], odd: [] } since 0 is considered even", () => {
  expect(splitEvenOdd([0])).to.deep.equal({ even: [0], odd: [] });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
