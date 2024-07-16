// NAMEEN:
// NAMERU:Первый и последний элемент

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `firstAndLastElement`, которая принимает строку.

Функция должна подсчитать количество элементов равных первому и последнему элементу строки, включая их самих.

Верните строку в формате `Count of first element: <countOfFirst>, count of last element: <countOfLast>`.

Если строка пустая, верните: `String is empty`.


Примеры запуска функции:
```javascript
firstAndLastElement('abracadabra'); // "Count of first element: 5, count of last element: 5"
firstAndLastElement('aaaaaab');     // "Count of first element: 6, count of last element: 1"
firstAndLastElement('');            // "String is empty"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function firstAndLastElement(string) {
  if (string.length === 0) return "String is empty";
  let countOfFirst = 0;
  let countOfLast = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[0]) countOfFirst++;
    if (string[i] === string[string.length - 1]) countOfLast++;
  }
  return `Count of first element: ${countOfFirst}, count of last element: ${countOfLast}`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function firstAndLastElement', () => {
  expect(firstAndLastElement).to.be.a('function');
});

it("firstAndLastElement('abracadabra') should return 'Count of first element: 5, count of last element: 5'", () => {
  expect(firstAndLastElement('abracadabra')).to.equal('Count of first element: 5, count of last element: 5');
});

it("firstAndLastElement('octopus') should return 'Count of first element: 2, count of last element: 1'", () => {
  expect(firstAndLastElement('octopus')).to.equal('Count of first element: 2, count of last element: 1');
});

it("firstAndLastElement('aaaaaab') should return 'Count of first element: 6, count of last element: 1'", () => {
  expect(firstAndLastElement('aaaaaab')).to.equal('Count of first element: 6, count of last element: 1');
});

it("firstAndLastElement('abbbbbbbb') should return 'Count of first element: 1, count of last element: 8'", () => {
  expect(firstAndLastElement('abbbbbbbb')).to.equal('Count of first element: 1, count of last element: 8');
});

it("firstAndLastElement('a') should return 'Count of first element: 1, count of last element: 1'", () => {
  expect(firstAndLastElement('a')).to.equal('Count of first element: 1, count of last element: 1');
});

it("firstAndLastElement('') should return 'String is empty'", () => {
  expect(firstAndLastElement('')).to.equal('String is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
