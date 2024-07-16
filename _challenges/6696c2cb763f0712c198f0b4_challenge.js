// NAMEEN:
// NAMERU:Удвоенные числа записать в объект

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `doubleNumbers` принимает массив чисел и строк.

Она должна вернуть объект, в котором ключами будут числа из массива, а значениями - удвоенные значения этих чисел, но число в объекте должно встречаться только один раз.

Пример запуска функции:
```javascript
doubleNumbers([1, 1, 1, 4, "hello", "test"]); // {1: 2, 4: 8}
doubleNumbers(["hello", "test"]); // {}
doubleNumbers([0, 0, 0, 10, 10, 0, 5]); // {0: 0, 10: 20, 5: 10}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleNumbers(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if(!obj[arr[i]] && typeof arr[i] === 'number'){
      obj[arr[i]] = arr[i] * 2;
    }
  }
  return obj
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleNumbers', () => {
  expect(doubleNumbers).to.be.a('function');
});

it('doubleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should returns {1: 2, 2: 4, 3: 6, 4: 8, 5: 10}', () => {
  expect(doubleNumbers([1, 2, 3, 4, 5])).to.deep.equal({1: 2, 2: 4, 3: 6, 4: 8, 5: 10});
});
it('doubleNumbers([1, 1, 1, 4, "hello", "test"]) should returns {1: 2, 4: 8}', () => {
  expect(doubleNumbers([1, 1, 1, 4, "hello", "test"])).to.deep.equal({1: 2, 4: 8});
});

it('doubleNumbers(["hello", "test"]) should returns {}}', () => {
  expect(doubleNumbers(["hello", "test"])).to.deep.equal({});
});

it('doubleNumbers([0, 0, 0, 10, 10, 0, 5]) should returns {0: 0, 10: 20, 5: 10}', () => {
  expect(doubleNumbers([0, 0, 0, 10, 10, 0, 5])).to.deep.equal({0: 0, 10: 20, 5: 10});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
