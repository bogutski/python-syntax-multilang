// NAMEEN:
// NAMERU:Вернуть массив удвоенных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `doubleAndReturnNumbers` принимает массив, состоящий из элементов с разными типами данных.

Функция возвращает массив чисел, умноженных на 2.

Пример запуска функции:
```javascript
doubleAndReturnNumbers([1, 2, 3]) // [2, 4, 6]
doubleAndReturnNumbers([1, 2, 3, "4"]) // [2, 4, 6]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function doubleAndReturnNumbers
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleAndReturnNumbers(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      arr[i] = arr[i] * 2;
      newArr.push(arr[i])
    }
  }
  return newArr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleAndReturnNumbers', () => {
  expect(doubleAndReturnNumbers).to.be.a('function');
});

it('doubleAndReturnNumbers([1, 2, 3]) should returns [2, 4, 6]', () => {
  expect(doubleAndReturnNumbers([1, 2, 3])).to.deep.equal([2, 4, 6]);
});

it('doubleAndReturnNumbers([]) should returns []', () => {
  expect(doubleAndReturnNumbers([])).to.deep.equal([]);
});

it('doubleAndReturnNumbers([1, 2, 3, "4"]) should returns [2, 4, 6]', () => {
  expect(doubleAndReturnNumbers([1, 2, 3, "4"])).to.deep.equal([2, 4, 6]);
});

it('doubleAndReturnNumbers(["4", "5"]) should returns []', () => {
  expect(doubleAndReturnNumbers(["4", "5"])).to.deep.equal([]);
});

it('doubleAndReturnNumbers([1, 2, 3, "4", "5"]) should returns [2, 4, 6]', () => {
  expect(doubleAndReturnNumbers([1, 2, 3, "4", "5"])).to.deep.equal([2, 4, 6]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
