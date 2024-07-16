// NAMEEN:
// NAMERU:Создание ступенчатого массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `createStaircaseArray`, которая принимает два аргумента: количество ступеней `n` и булево значение `ascending`.

Если `ascending` равно `true`, функция должна создать и вернуть массив, где каждый элемент представляет собой массив, начиная с одного элемента в первом и увеличивая количество на один в каждом следующем, до `n` элементов в последнем.

Если `ascending` равно `false`, порядок должен быть обратным: от `n` элементов в первом до одного в последнем.

Все элементы вложенных массивов должны быть заполнены значением индекса вложенного массива, используя метод `Array.prototype.fill()`.


Примеры запуска функции:
```javascript
console.log(createStaircaseArray(3, true));
// [
//   [0],
//   [1, 1],
//   [2, 2, 2]
// ]

console.log(createStaircaseArray(3, false));
// [
//   [0, 0, 0],
//   [1, 1],
//   [2]
// ]

console.log(createStaircaseArray(0, true));
// []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function createStaircaseArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function createStaircaseArray(n, isTrue) {
  let res = []

  if(isTrue){
    let start = 1

    while(start <= n){
      let chunk = new Array(start).fill(start -1)
      res.push(chunk)

      start++
    }
  } else {
    let start = n

    while(start > 0){
      let chunk = new Array(start).fill(n - start)
      res.push(chunk)

      start--
    }
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function createStaircaseArray', () => {
  expect(createStaircaseArray).to.be.a('function');
});

it('Function createStaircaseArray should include method fill()', () => {
  const res = createStaircaseArray.toString()
  expect(res).to.include('.fill(')
});

it("createStaircaseArray(3, true) should return a staircase array ascending", function() {
  expect(createStaircaseArray(3, true)).to.deep.equal([[0], [1, 1], [2, 2, 2]]);
});

it("createStaircaseArray(3, false) should return a staircase array descending", function() {
  expect(createStaircaseArray(3, false)).to.deep.equal([[0, 0, 0], [1, 1], [2]]);
});

it("createStaircaseArray(1, true) should return an array with a single element", function() {
  expect(createStaircaseArray(1, true)).to.deep.equal([[0]]);
});

it("createStaircaseArray(0, true) should return an empty array", function() {
  expect(createStaircaseArray(0, true)).to.deep.equal([]);
});

it("createStaircaseArray(4, false) should return a staircase array descending from 4", function() {
  expect(createStaircaseArray(4, false)).to.deep.equal([[0, 0, 0, 0], [1, 1, 1], [2, 2], [3]]);
});

it("createStaircaseArray(2, true) should have arrays of increasing length", function() {
  const array = createStaircaseArray(2, true);
  expect(array[0].length < array[1].length).to.be.true;
});

it("createStaircaseArray(5, true) should have last array filled with '4'", function() {
  const array = createStaircaseArray(5, true);
  expect(array[4]).to.satisfy(lastArray => lastArray.every(val => val === 4));
});

it("createStaircaseArray(4, false) should start with an array filled with '0'", function() {
  const array = createStaircaseArray(4, false);
  expect(array[0]).to.satisfy(firstArray => firstArray.every(val => val === 0));
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
