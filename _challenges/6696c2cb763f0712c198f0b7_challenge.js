// NAMEEN:
// NAMERU:Удвоить и вернуть цифры в массиве строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `doubleNumbers` принимает массив строк.

Необходимо вернуть новый массив строк, в котором будут только удвоенные цифры из первоначального массива.

Буквы и знаки не должны попасть в новый массив. Если в строке нет цифр, то она не должна попасть в новый массив.

Пример запуска функции:
```javascript
doubleNumbers(["a1", "b2", "c3"]) // ["2", "4", "6"]
doubleNumbers(["a1", "b", "c3", "d", "e"]) // ["2", "6"]
doubleNumbers(["d", "e", "f"]) // []
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
  const newArr = []
  const numbers = '123456789'
  for (let i = 0; i < arr.length; i++) {
    let str = ''
    for (let j = 0; j < arr[i].length; j++) {
      if (numbers.includes(arr[i][j])) str += +arr[i][j] * 2;
    }
    if (str.length) newArr.push(str)
  }
  return newArr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleNumbers', () => {
  expect(doubleNumbers).to.be.a('function');
});

it('doubleNumbers(["a1", "b2", "c3"]) should returns ["2", "4", "6"]', () => {
  expect(doubleNumbers(["a1", "b2", "c3"])).to.eql(["2", "4", "6"]);
});

it('doubleNumbers(["a1", "b2", "c3", "d4"]) should returns ["2", "4", "6", "8"]', () => {
  expect(doubleNumbers(["a1", "b2", "c3", "d4"])).to.eql(["2", "4", "6", "8"]);
});

it('doubleNumbers(["a1", "b", "c3", "d", "e"]) should returns ["2", "6"]', () => {
  expect(doubleNumbers(["a1", "b", "c3", "d", "e"])).to.eql(["2", "6"]);
});

it('doubleNumbers(["d", "e", "f"]) should returns []', () => {
  expect(doubleNumbers(["d", "e", "f"])).to.eql([]);
});

it('doubleNumbers([]) should returns []', () => {
  expect(doubleNumbers([])).to.eql([]);
});

it('doubleNumbers(["a1", "", "c3", "", "e", "f"]) should returns ["2", "6"]', () => {
  expect(doubleNumbers(["a1", "", "c3", "", "e", "f"])).to.eql(["2", "6"]);
});

it('doubleNumbers(["5"]) should returns ["10"]', () => {
  expect(doubleNumbers(["5"])).to.eql(["10"]);
});

it('doubleNumbers(["a"]) should returns []', () => {
  expect(doubleNumbers(["a"])).to.eql([]);
});

it('doubleNumbers(["", "", ""]) should returns []', () => {
  expect(doubleNumbers(["", "", ""])).to.eql([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
