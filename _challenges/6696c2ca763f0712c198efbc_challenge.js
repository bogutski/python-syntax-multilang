// NAMEEN:
// NAMERU:Сумма чисел в массиве с разными типами данных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumOfNumbers`, которая принимает массив.

Элементы массива могут быть числами, строками и т.д.

Функция должна вернуть сумму всех чисел, которые есть в массиве.

Если массив пустой, то функция должна вернуть строку 'Empty array'.


Примеры запуска функции:
```javascript
sumOfNumbers([1, 2, true, 3, 'false']); // 6
sumOfNumbers([1, 2, 3, 4, 5]);          // 15
sumOfNumbers(['1', '2', '3']);          // 0
sumOfNumbers([]);                       // 'Empty array'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumOfNumbers(arr){
  if(!arr.length) return 'Empty array';
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number') sum += arr[i];
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumOfNumbers', () => {
  expect(sumOfNumbers).to.be.a('function');
});

it("sumOfNumbers([1, 2, true, 3, false, 4, 5, 'hello', (5 < 7)]) should return 15", () => {
  expect(sumOfNumbers([1, 2, true, 3, false, 4, 5, 'hello', (5 < 7)])).to.equal(15);
});

it("sumOfNumbers([1, 2, 3, 4, 5, 10]) should return 25", () => {
  expect(sumOfNumbers([1, 2, 3, 4, 5, 10])).to.equal(25);
});

it("sumOfNumbers(['1', '2', '3', '4', '5', '10']) should return 0", () => {
  expect(sumOfNumbers(['1', '2', '3', '4', '5', '10'])).to.equal(0);
});

it("sumOfNumbers([-50, 100, 'some', 74, 'text', 91, 'here']) should return 215", () => {
  expect(sumOfNumbers([-50, 100, 'some', 74, 'text', 91, 'here'])).to.equal(215);
});

it("sumOfNumbers([]) should return 'Empty array'", () => {
  expect(sumOfNumbers([])).to.equal('Empty array');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
