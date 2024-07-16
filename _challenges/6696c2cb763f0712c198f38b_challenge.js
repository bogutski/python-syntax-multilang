// NAMEEN:
// NAMERU:Разделение массива на положительные и отрицательные числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `splitPositivesAndNegatives`, которая принимает массив чисел.

Функция должна создать два новых массива: один для положительных чисел (включая ноль), а другой для отрицательных.

Используйте метод `pop()` для извлечения элементов из исходного массива и методы `push()` для добавления элементов в соответствующие новые массивы.

Функция должна возвращать объект с двумя свойствами: `positives` и `negatives`, каждое из которых ссылается на соответствующий массив.

Если в исходном массиве нет положительных или отрицательных чисел, соответствующий массив должен быть пустым.


Пример запуска функции:
```javascript
splitPositivesAndNegatives([3, -1, 0, -3, 5, -2]);// { positives: [ 5, 0, 3 ], negatives: [ -2, -3, -1 ] }
splitPositivesAndNegatives([-5, -4, -3]);   // { positives: [], negatives: [ -3, -4, -5 ] }
splitPositivesAndNegatives([1, 2, 3]);  // { positives: [ 3, 2, 1 ], negatives: [] }
splitPositivesAndNegatives([]);   // { positives: [], negatives: [] }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function splitPositivesAndNegatives(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitPositivesAndNegatives(arr) {
  let pos = []
  let neg = []

  while(arr.length > 0){
    const num = arr.pop()
    num < 0 ? neg.push(num) : pos.push(num)
  }

  return {positives: pos, negatives: neg};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitPositivesAndNegatives', () => {
  expect(splitPositivesAndNegatives).to.be.a('function');
});

it('Function splitPositivesAndNegatives includes methods pop() and push()', () => {
  const result = splitPositivesAndNegatives.toString()
  expect(result).to.include('.pop()')
  expect(result).to.include('.push(')
});

it("splitPositivesAndNegatives([3, -1, 0, -3, 5, -2]) should return {'negatives': [-2, -3, -1], 'positives': [5, 0, 3]}", () => {
  expect(splitPositivesAndNegatives([3, -1, 0, -3, 5, -2])).to.deep.equal({'negatives': [-2, -3, -1], 'positives': [5, 0, 3]});
});

it("splitPositivesAndNegatives([-5, -4, -3]) should return {positives: [], negatives: [-3, -4, -5]}", () => {
  expect(splitPositivesAndNegatives([-5, -4, -3])).to.deep.equal({positives: [], negatives: [-3, -4, -5]});
});

it("splitPositivesAndNegatives([1, 2, 3]) should return {positives: [3, 2, 1], negatives: []}", () => {
  expect(splitPositivesAndNegatives([1, 2, 3])).to.deep.equal({positives: [3, 2, 1], negatives: []});
});

it("should handle an empty array", () => {
  expect(splitPositivesAndNegatives([])).to.deep.equal({positives: [], negatives: []});
});

it("splitPositivesAndNegatives([-2, 0, 2]) should return {positives: [2, 0], negatives: [-2]}", () => {
  expect(splitPositivesAndNegatives([-2, 0, 2])).to.deep.equal({positives: [2, 0], negatives: [-2]});
});

it("should correctly identify single positive number as positive", () => {
  expect(splitPositivesAndNegatives([100])).to.deep.equal({positives: [100], negatives: []});
});

it("should correctly identify single negative number as negative", () => {
  expect(splitPositivesAndNegatives([-100])).to.deep.equal({positives: [], negatives: [-100]});
});

it("should correctly handle array with mixed positive and negative numbers including zero", () => {
  expect(splitPositivesAndNegatives([0, -1, 1, -2, 2, -3, 3])).to.deep.equal({positives: [3, 2, 1, 0], negatives: [-3, -2, -1]});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
