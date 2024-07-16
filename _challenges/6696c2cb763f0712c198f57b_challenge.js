// NAMEEN:
// NAMERU:Группировка и сглаживание массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `groupAndFlatten`, которая принимает два аргумента:

 * массив `arrays`, содержащий несколько массивов (возможно, с подмассивами),
 * функцию `groupFunction`, которая определяет критерий группировки элементов.

Функция должна сначала "выпрямить" все массивы в один уровень, затем сгруппировать элементы в соответствии с критерием, заданным `groupFunction`, и вернуть объект, где ключи — это результаты `groupFunction`, а значения — массивы элементов, соответствующие этим ключам.


Примеры Запуска Функции:
```javascript
const arrays = [[1, 2, 3], [4, 5], [6, [7, 8]]];
const isOdd = num => num % 2 !== 0 ? 'odd' : 'even';
console.log(groupAndFlatten(arrays, isOdd));
// Вывод: { odd: [1, 3, 5, 7], even: [2, 4, 6, 8] }

const arrays2 = [['apple', 'banana'], ['cherry', 'date']];
const startsWith = str => str[0];
console.log(groupAndFlatten(arrays2, startsWith));
// Вывод: { a: ['apple'], b: ['banana'], c: ['cherry'], d: ['date'] }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function groupAndFlatten(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function groupAndFlatten(arr, func) {
  arr = arr.flat(Infinity)
  let res = {}

  arr.forEach(el => {
    const temp = func(el)
    if(temp in res) res[temp].push(el)
    else res[temp] = [el]
  })

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function groupAndFlatten', () => {
  expect(groupAndFlatten).to.be.a('function');
});

it('Function groupAndFlatten should include method flat()', () => {
  const res = groupAndFlatten.toString()
  expect(res).to.include('.flat(')
});

it("groupAndFlatten([[1, 2, 3], [4, 5], [6, [7, 8]]], num => num % 2 !== 0 ? 'odd' : 'even') should return { odd: [1, 3, 5, 7], even: [2, 4, 6, 8] }", function() {
  expect(groupAndFlatten([[1, 2, 3], [4, 5], [6, [7, 8]]], num => num % 2 !== 0 ? 'odd' : 'even')).to.deep.equal({ odd: [1, 3, 5, 7], even: [2, 4, 6, 8] });
});

it("groupAndFlatten([['apple', 'banana'], ['cherry', 'date']], str => str[0]) should return { a: ['apple'], b: ['banana'], c: ['cherry'], d: ['date'] }", function() {
  expect(groupAndFlatten([['apple', 'banana'], ['cherry', 'date']], str => str[0])).to.deep.equal({ a: ['apple'], b: ['banana'], c: ['cherry'], d: ['date'] });
});

it("groupAndFlatten([['one', 'two'], ['three']], str => str.length) should return { 3: ['one', 'two'], 5: ['three'] }", function() {
  expect(groupAndFlatten([['one', 'two'], ['three']], str => str.length)).to.deep.equal({ 3: ['one', 'two'], 5: ['three'] });
});

it("groupAndFlatten([[10, 20], [30, 40, 50]], num => num < 30 ? 'low' : 'high') should return { low: [10, 20], high: [30, 40, 50] }", function() {
  expect(groupAndFlatten([[10, 20], [30, 40, 50]], num => num < 30 ? 'low' : 'high')).to.deep.equal({ low: [10, 20], high: [30, 40, 50] });
});

it("groupAndFlatten([[true, false], [false, true]], bool => bool) should return { true: [true, true], false: [false, false] }", function() {
  expect(groupAndFlatten([[true, false], [false, true]], bool => bool)).to.deep.equal({ true: [true, true], false: [false, false] });
});

it("groupAndFlatten([[null, undefined], [null, 5]], value => value == null ? 'nullish' : 'valid') should return { nullish: [null, undefined, null], valid: [5] }", function() {
  expect(groupAndFlatten([[null, undefined], [null, 5]], value => value == null ? 'nullish' : 'valid')).to.deep.equal({ nullish: [null, undefined, null], valid: [5] });
});

it("groupAndFlatten([[1.5, 2.5], [1.1, 2.2]], num => Math.floor(num)) should return { 1: [1.5, 1.1], 2: [2.5, 2.2] }", function() {
  expect(groupAndFlatten([[1.5, 2.5], [1.1, 2.2]], num => Math.floor(num))).to.deep.equal({ 1: [1.5, 1.1], 2: [2.5, 2.2] });
});

it("groupAndFlatten([['short', 'longer'], ['medium', 'tiny']], str => str.length) should return { 4: ['tiny'], 5: ['short'], 6: ['longer', 'medium'] }", function() {
  expect(groupAndFlatten([['short', 'longer'], ['medium', 'tiny']], str => str.length)).to.deep.equal({ 4: ['tiny'], 5: ['short'], 6: ['longer', 'medium'] });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
