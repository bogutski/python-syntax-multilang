// NAMEEN:
// NAMERU:Добавление порядкового номера

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addOrdinalIndicator`, которая принимает массив целых чисел и возвращает новый массив, содержащий эти числа с добавленным порядковым индикатором ('st' для 1, 'nd' для 2, 'rd' для 3 и 'th' для 4 и т.д.).

Используйте метод `map()` для этого преобразования.

Проверка будет от 0 до 110.


Пример запуска функции:
```javascript
addOrdinalIndicator([1, 2, 3, 4, 11, 12, 13, 21]); // ['1st', '2nd', '3rd', '4th', '11th', '12th', '13th', '21st']
addOrdinalIndicator([0, 21, 32, 81, 95]); // [0th, '21st', '32nd', '81st', '95th']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addOrdinalIndicator(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addOrdinalIndicator(arr) {
  return arr.map(n => {
    const str = n.toString()

    if(str[str.length - 1] === '1' && str !== '11') return str + 'st'
    else if(str[str.length - 1] === '2' && str !== '12') return str + 'nd'
    else if(str[str.length - 1] === '3' && str !== '13') return str + 'rd'
    else return str + 'th'
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addOrdinalIndicator', () => {
  expect(addOrdinalIndicator).to.be.a('function');
});

it('Function addOrdinalIndicator should include method map()', () => {
  const res = addOrdinalIndicator.toString()
  expect(res).to.include('.map(')
});

it("addOrdinalIndicator([1, 2, 3, 4, 11, 12, 13, 21]) should return ['1st', '2nd', '3rd', '4th', '11th', '12th', '13th', '21st']", () => {
  expect(addOrdinalIndicator([1, 2, 3, 4, 11, 12, 13, 21])).to.deep.equal(["1st", "2nd", "3rd", "4th", "11th", "12th", "13th", "21st"]);
});

it("addOrdinalIndicator([99, 77, 55, 22]) should return ['99th', '77th', '55th', '22nd']", () => {
  expect(addOrdinalIndicator([99, 77, 55, 22])).to.deep.equal(['99th', '77th', '55th', '22nd']);
});

it("addOrdinalIndicator([20, 30, 40]) should return ['20th', '30th', '40th']", () => {
  expect(addOrdinalIndicator([20, 30, 40])).to.deep.equal(["20th", "30th", "40th"]);
});

it("addOrdinalIndicator([5, 6, 7, 8, 9, 10]) should return ['5th', '6th', '7th', '8th', '9th', '10th']", () => {
  expect(addOrdinalIndicator([5, 6, 7, 8, 9, 10])).to.deep.equal(['5th', '6th', '7th', '8th', '9th', '10th']);
});

it("addOrdinalIndicator([]) should return []", () => {
  expect(addOrdinalIndicator([])).to.deep.equal([]);
});

it("addOrdinalIndicator([0]) should return ['0th']", () => {
  expect(addOrdinalIndicator([0])).to.deep.equal(['0th']);
});

it("addOrdinalIndicator([110, 105, 101]) should return ['110th', '105th', '101st']", () => {
  expect(addOrdinalIndicator([110, 105, 101])).to.deep.equal(['110th', '105th', '101st']);
});

it("addOrdinalIndicator([22, 23, 24]) should return ['22nd', '23rd', '24th']", () => {
  expect(addOrdinalIndicator([22, 23, 24])).to.deep.equal(['22nd', '23rd', '24th']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
