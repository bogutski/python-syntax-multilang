// NAMEEN:
// NAMERU:Заполнение массива статическим значением

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `fillArray` которая принимает три параметра: размер массива `size`, значение для заполнения `value`, и необязательный параметр `start` с начальным индексом заполнения (по умолчанию 0).

Функция должна возвращать новый массив указанного размера, заполненный заданным значением начиная с индекса `start` до конца массива.


Примеры Запуска Функции:
```javascript
fillArray(4, 0); // [0, 0, 0, 0]
fillArray(5, 'a'); // ['a', 'a', 'a', 'a', 'a']
fillArray(3, true, 1); // [undefined, true, true]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function fillArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillArray(size, value, start = 0) {
  return new Array(size).fill(value, start);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fillArray', () => {
  expect(fillArray).to.be.a('function');
});

it('Function fillArray should include method fill()', () => {
  const res = fillArray.toString()
  expect(res).to.include('.fill(')
});

it("fillArray(5, 'a') should return ['a', 'a', 'a', 'a', 'a']", function() {
  expect(fillArray(5, 'a')).to.deep.equal(['a', 'a', 'a', 'a', 'a']);
});

it("fillArray(4, 0) should return [0, 0, 0, 0]", function() {
  expect(fillArray(4, 0)).to.deep.equal([0, 0, 0, 0]);
});

it("fillArray(3, true, 1) should return [undefined, true, true]", function() {
  expect(fillArray(3, true, 1)).to.deep.equal([undefined, true, true]);
});

it("fillArray(2, 'start', 0) should return ['start', 'start']", function() {
  expect(fillArray(2, 'start')).to.deep.equal(['start', 'start']);
});

it("fillArray(3, false) should return [false, false, false]", function() {
  expect(fillArray(3, false)).to.deep.equal([false, false, false]);
});

it("fillArray(1, 5, 1) should return [undefined]", function() {
  expect(fillArray(1, 5, 1)).to.deep.equal([undefined]);
});

it("fillArray(6, 'x', 2) should return [undefined, undefined, 'x', 'x', 'x', 'x']", function() {
  expect(fillArray(6, 'x', 2)).to.deep.equal([undefined, undefined, 'x', 'x', 'x', 'x']);
});

it("fillArray(0, 'empty') should return []", function() {
  expect(fillArray(0, 'empty')).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
