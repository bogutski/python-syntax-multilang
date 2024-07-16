// NAMEEN:
// NAMERU:Удвоить числа и вернуть их в виде строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `doubleNumbers` принимает массив чисел и возвращает строку, в которой каждое число удвоено.

Если в массиве есть нечисловые элементы, они должны быть проигнорированы.

Пример запуска функции:
```javascript
doubleNumbers([1, 2, 3]) // "2 4 6"
doubleNumbers([1, 2, 3, "a", "b", "c"]) // "2 4 6"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleNumbers(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') newArr.push(arr[i] * 2);
  }
  return newArr.join(' ');
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleNumbers', () => {
  expect(doubleNumbers).to.be.a('function');
});

it('doubleNumbers([1, 2, 3]) returns "2 4 6"', () => {
  expect(doubleNumbers([1, 2, 3])).to.equal('2 4 6');
});

it('doubleNumbers([1, 2, 3, "a", "b", "c"]) returns "2 4 6"', () => {
  expect(doubleNumbers([1, 2, 3, 'a', 'b', 'c'])).to.equal('2 4 6');
});

it('doubleNumbers(["a", "b", "c"]) returns ""', () => {
  expect(doubleNumbers(['a', 'b', 'c'])).to.equal('');
});

it('doubleNumbers([]) returns ""', () => {
  expect(doubleNumbers([])).to.equal('');
});

it('doubleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) returns "2 4 6 8 10 12 14 16 18 20"', () => {
  expect(doubleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal('2 4 6 8 10 12 14 16 18 20');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
