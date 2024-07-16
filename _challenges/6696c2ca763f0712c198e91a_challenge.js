// NAMEEN:
// NAMERU:Найдите и исправьте ошибки в функции

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Найдите и исправьте ошибки в коде.

Функция `quantityOfNumbers` принимает массив `array`, в котором могут быть любые типы данных.

Функция должна вернуть количество элементов массива, которые имеют тип `number`.

Если в массиве нет чисел, то функция должна вернуть 0.

Примеры запуска функции:
```javascript
quiantityOfNumbers([1, 2, 3]); // 3
quiantityOfNumbers(['a', 'b', 'c']); // 0
quiantityOfNumbers([1, 2, 3, 'a', 'b', 'c', 4, 5, '6']); // 5
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function quantityOfNumbers(string) {
  const result = 0;
  for(let i = 5; a < array.length; i++) {
    if(array[i] === 'number') result--;
  }
  return 'result';
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function quantityOfNumbers(array) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number') result++;
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function quantityOfNumbers', () => {
  expect(quantityOfNumbers).to.be.a('function');
});

it('quantityOfNumbers([1, 2, 3, 4, 5]) should return 5', () => {
  expect(quantityOfNumbers([1, 2, 3, 4, 5])).to.be.equal(5);
});

it('quantityOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return 10', () => {
  expect(quantityOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.equal(10);
});

it("quantityOfNumbers(['10', '20', '30', '40', '50']) should return 0", () => {
  expect(quantityOfNumbers(['10', '20', '30', '40', '50'])).to.be.equal(0);
});

it("quantityOfNumbers(['a', 'b', 'c', 'd', 'e']) should return 0", () => {
  expect(quantityOfNumbers(['a', 'b', 'c', 'd', 'e'])).to.be.equal(0);
});

it("quantityOfNumbers(['a', 123, 'b', 456, 'c', 789, 'd', 101112, 'e']) should return 4", () => {
  expect(quantityOfNumbers(['a', 123, 'b', 456, 'c', 789, 'd', 101112, 'e'])).to.be.equal(4);
});

it("quantityOfNumbers(['a', true, 100, {name: 'John'}, [1, 2, 3], 1000, undefined, null]) should return 1100", () => {
  expect(quantityOfNumbers(['a', true, 100, {name: 'John'}, [1, 2, 3], 1000, undefined, null])).to.be.equal(2);
});

it("quantityOfNumbers([]) should return 0", () => {
  expect(quantityOfNumbers([])).to.be.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
