// NAMEEN:
// NAMERU:Записать удвоенные числа в массив строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `doubleNumbers` принимает массив в качестве параметра.

Массив может состоять из чисел и строк.

Если массив пустой, то функция должна вернуть строку "Array is empty".

Если в массиве нет чисел, то функция должна вернуть строку "Array doesn't contain numbers".

Если в массиве есть числа, то функция должна вернуть массив из двух строк:
["удвоенные четные числа", "удвоенные нечетные числа"]

Каждая строка должна содержать числа, разделенные пробелом. В конце строки пробела быть не должно.

Числа также могут быть написаны в виде строк. Их тоже нужно удвоить.

Если в массиве есть пустые строки, то их нужно игнорировать.

Пример запуска функции:
```javascript
doubleNumbers([1, 2, 3, 4, 5]); // ["4 8", "2 6 10"]
doubleNumbers([1, 2, 3, 4, 5, "a", "b", "c"]); // ["4 8", "2 6 10"]
doubleNumbers(["a", "b", "c", ""]); // "Array doesn't contain numbers"
doubleNumbers([]); // "Array is empty"
doubleNumbers([1, 2, 3, 4, 5, "a", "b", "c", ""]); // ["4 8", "2 6 10"]
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
  if (!arr.length) return "Array is empty";
  let even = '';
  let odd = '';
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i]) && arr[i] !== '') {
      if (arr[i] % 2 === 0) {
        even += arr[i] * 2 + ' ';
      } else {
        odd += arr[i] * 2 + ' ';
      }
    }
  }
  if (!even.length && !odd.length) return 'Array doesn\'t contain numbers';
  return [even.trim(), odd.trim()];
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleNumbers', () => {
  expect(doubleNumbers).to.be.a('function');
});

it('doubleNumbers([1, 2, 3, 4, 5]) should returns ["4 8", "2 6 10"]', () => {
  expect(doubleNumbers([1, 2, 3, 4, 5])).to.deep.equal(["4 8", "2 6 10"]);
});

it('doubleNumbers([1, 2, 3, 4, 5, "a", "b", "c"]) should returns ["4 8", "2 6 10"]', () => {
  expect(doubleNumbers([1, 2, 3, 4, 5, "a", "b", "c"])).to.deep.equal(["4 8", "2 6 10"]);
})

it('doubleNumbers([1, "2", "3", 4, 5, "a", "b", "c"]) should returns ["4 8", "2 6 10"]', () => {
  expect(doubleNumbers([1, "2", "3", 4, 5, "a", "b", "c"])).to.deep.equal(["4 8", "2 6 10"]);
});

it('doubleNumbers(["a", "b", "c", ""]) should returns "Array doesn\'t contain numbers"', () => {
  expect(doubleNumbers(["a", "b", "c", ""])).to.deep.equal("Array doesn\'t contain numbers");
});

it('doubleNumbers([]) should returns "Array is empty"', () => {
  expect(doubleNumbers([])).to.deep.equal("Array is empty");
});

it('doubleNumbers([1, 2, 3, 4, 5, "a", "b", "c", ""]) should returns ["4 8", "2 6 10"]', () => {
  expect(doubleNumbers([1, 2, 3, 4, 5, "a", "b", "c", ""])).to.deep.equal(["4 8", "2 6 10"]);
});

it('doubleNumbers([ "", ""]) should returns "Array doesn\'t contain numbers"', () => {
  expect(doubleNumbers(["", ""])).to.deep.equal("Array doesn\'t contain numbers");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
