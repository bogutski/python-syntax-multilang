// NAMEEN:
// NAMERU:Использование объекта с заготовленными значениями

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numToWord`, которая принимает массив чисел от `10` до `19`.

Функция должна вернуть массив строк, где каждая строка - это слово, соответствующее числу из массива.

Массив пустым не будет.

Примеры запуска функции:
```javascript
numToWord([10, 11, 12, 13]); // ['ten', 'eleven', 'twelve', 'thirteen']
numToWord([15, 17, 19]);     // ['fifteen', 'seventeen', 'nineteen']
numToWord([18, 11, 16, 17]); // ['eighteen', 'eleven', 'sixteen', 'seventeen']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function numToWord(arr){
  const objFrom10to19 = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', }

  <code here...>;

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numToWord(arr){
  const objFrom10to19 = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', }

  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(objFrom10to19[arr[i]]);
  }
  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numToWord', () => {
  expect(numToWord).to.be.a('function');
});

it("numToWord([10, 12, 13, 14, 15]) should return ['ten', 'twelve', 'thirteen', 'fourteen', 'fifteen']", () => {
  expect(numToWord([10, 12, 13, 14, 15])).to.deep.equal(['ten', 'twelve', 'thirteen', 'fourteen', 'fifteen']);
});

it("numToWord([16, 17, 18, 19]) should return ['sixteen', 'seventeen', 'eighteen', 'nineteen']", () => {
  expect(numToWord([16, 17, 18, 19])).to.deep.equal(['sixteen', 'seventeen', 'eighteen', 'nineteen']);
});

it("numToWord('19, 15, 10, 13, 14, 17, 18, 11, 12, 16]') should return ['nineteen', 'fifteen', 'ten', 'thirteen', 'fourteen', 'seventeen', 'eighteen', 'eleven', 'twelve', 'sixteen']", () => {
  expect(numToWord([19, 15, 10, 13, 14, 17, 18, 11, 12, 16])).to.deep.equal(['nineteen', 'fifteen', 'ten', 'thirteen', 'fourteen', 'seventeen', 'eighteen', 'eleven', 'twelve', 'sixteen']);
});

it("numToWord([10, 11, 10, 19, 18, 11, 19, 14, 18, 11]) should return ['ten', 'eleven', 'ten', 'nineteen', 'eighteen', 'eleven', 'nineteen', 'fourteen', 'eighteen', 'eleven']", () => {
  expect(numToWord([10, 11, 10, 19, 18, 11, 19, 14, 18, 11])).to.deep.equal(['ten', 'eleven', 'ten', 'nineteen', 'eighteen', 'eleven', 'nineteen', 'fourteen', 'eighteen', 'eleven']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
