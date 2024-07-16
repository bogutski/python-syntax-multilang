// NAMEEN:
// NAMERU:Найди дробные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fixTheNumbers`, которая принимает массив дробных и целых чисел.

Функция должна найти все дробные числа в массиве, округлить их до ближайшего целого и добавить в новый массив.

Функция должна вернуть новый массив с округленными числами.

Если массив пустой или в нем нет дробных чисел, то функция должна вернуть `false`.

Hint: для проверки является ли число дробным, можно перевести его в строку и проверить включает ли она точку.


Примеры запуска функции:
```javascript
fixTheNumbers([1.5, 25, 36.6, 41.695, 45, 2]); // [2, 37, 42]
fixTheNumbers([0, 0.0001, -52, -42.52, -7.5]); // [0, -43, -7]
fixTheNumbers([1, 2, 3, 4, 5]);                // false
fixTheNumbers([]);                             // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fixTheNumbers(arr) {
  if (!arr.length) return false;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().includes('.')) newArr.push(Math.round(arr[i]));
  }
  if(!newArr.length) return false;
  else return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fixTheNumbers', () => {
  expect(fixTheNumbers).to.be.a('function');
});

it("Function fixTheNumbers does not include 'isInteger' method", () => {
  expect(fixTheNumbers.toString()).to.not.include('isInteger');
});

it("fixTheNumbers([1.5, 2, 3.6, 4.1, 5, 6.2, 7, 8.2, 9.9, 10.1]) should return [-1, 4, -4, 6, -8, 10, 10]", () => {
  expect(fixTheNumbers([-1.5, 2, 3.6, -4.1, 5, 6.2, 7, -8.2, 9.9, 10.1])).to.deep.equal([-1, 4, -4, 6, -8, 10, 10]);
});

it("fixTheNumbers([22, 226.365, 0.00000000, 563, 7.654, 3.2, 1.1, 0]) should return [226, -8, 3, 1]", () => {
  expect(fixTheNumbers([22, 226.365, -0.00000000, 563, -7.654, 3.2, 1.1, 0])).to.deep.equal([226, -8, 3, 1]);
});

it("fixTheNumbers([0.000001, 9999, 1.000000001, 1.0000000000000, 0.95412]) should return [0, 1, 1]", () => {
  expect(fixTheNumbers([0.000001, 9999, 1.000000001, -1.0000000000000, 0.95412])).to.deep.equal([0, 1, 1]);
});

it("fixTheNumbers([0, 9, 10, 99, 100, 999, 1000]) should return false", () => {
  expect(fixTheNumbers([0, 9, 10, -99, 100, 999, -1000])).to.deep.equal(false);
});

it("fixTheNumbers([]) should return false", () => {
  expect(fixTheNumbers([])).to.deep.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
