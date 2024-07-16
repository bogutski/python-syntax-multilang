// NAMEEN:
// NAMERU:Удвоить все числа, включая строки с числами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `doubleAllNumbers` принимает массив в качестве параметра.

Массив может содержать строки, числа, NaN а также числа в виде строк.

Функция должна удвоить все числа, включая числа в виде строк и вернуть массив с удвоенными числами.

Если элемент массива не является числом, то он должен остаться неизменным.

Пример запуска функции:
```javascript
doubleAllNumbers([1, 2, "3"]) // [2, 4, 6]
doubleAllNumbers([1, "hello", "true", "5"]) // [2, "hello", "true", 10]
doubleAllNumbers(["hello", "35a", NaN]) // ["hello", "35a", NaN]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleAllNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' || !isNaN(arr[i]))
    arr[i] *= 2;
  }
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleAllNumbers', () => {
  expect(doubleAllNumbers).to.be.a('function');
});

it('doubleAllNumbers([1, 2, 3]) should returns [2, 4, 6]', () => {
  expect(doubleAllNumbers([1, 2, 3])).to.deep.equal([2, 4, 6]);
});

it('doubleAllNumbers([1, "hello", "true", "5"]) should returns [2, "hello", "true", 10]', () => {
  expect(doubleAllNumbers([1, "hello", "true", "5"])).to.deep.equal([2, "hello", "true", 10]);
});

it('doubleAllNumbers(["hello", "35a", NaN]) should returns ["hello", "35a", NaN]', () => {
  expect(doubleAllNumbers(["hello", "35a", NaN])).to.deep.equal(["hello", "35a", NaN]);
});

it('doubleAllNumbers([1, 2, "10", "greeting", "js"]) should returns [2, 4, 20, "greeting", "js"]', () => {
  expect(doubleAllNumbers([1, 2, "10", "greeting", "js"])).to.deep.equal([2, 4, 20, "greeting", "js"]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
