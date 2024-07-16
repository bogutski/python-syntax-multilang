// NAMEEN:
// NAMERU:Посчитать сумму всех чисел в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumPositiveAndNegative`, которая принимает строку, состоящую из чисел, символов и букв.

Каждый элемент строки разделен запятой и пробелом.

Функция должна вернуть сумму всех чисел.


Примеры запуска функции:
```javascript
sumPositiveAndNegative('abc, 55, -13, @#, a5, 8o9'); // 42
sumPositiveAndNegative('1, -3, 5'); // 3
sumPositiveAndNegative('a, b, c'); // 0
sumPositiveAndNegative(''); // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumPositiveAndNegative(str){
  let sum = 0;
  let arr = str.split(', ');
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(+arr[i])) sum += Number(arr[i]);
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumPositiveAndNegative', () => {
  expect(sumPositiveAndNegative).to.be.a('function');
});

it("sumPositiveAndNegative('-1, fun, 5, 7, 2, -3, abc, 7') should return 17", () => {
  expect(sumPositiveAndNegative('-1, fun, 5, 7, 2, -3, abc, 7')).to.equal(17);
});

it("sumPositiveAndNegative('1, 2, -3, 4, 5') should return 9", () => {
  expect(sumPositiveAndNegative('1, 2, -3, 4, 5')).to.equal(9);
});

it("sumPositiveAndNegative('abc, 55, -13, @#, a5, 8o9') should return 42", () => {
  expect(sumPositiveAndNegative('abc, 55, -13, @#, a5, 8o9')).to.equal(42);
});

it("sumPositiveAndNegative('a, b, c, d, e, f, g') should return 0", () => {
  expect(sumPositiveAndNegative('a, b, c, d, e, f, g')).to.equal(0);
});

it("sumPositiveAndNegative('') should return 0", () => {
  expect(sumPositiveAndNegative('')).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
