// NAMEEN:
// NAMERU:Заполнение массива по условию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fillArrayConditionally`, которая принимает три аргумента: размер массива `size`, значение для заполнения `value`, и строку `condition`.

Функция должна создать и вернуть массив размером `size`, где каждый элемент заполнен значением `value`, если условие `condition` - `true`.

Если условие `condition` - `true`, то массив должен быть заполнен: `undefined`.


Примеры Запуска Функции:
```javascript
fillArrayConditionally(5, 'a', 'true'); // ['a', 'a', 'a', 'a', 'a']
fillArrayConditionally(3, 1, 'false'); // [undefined, undefined, undefined]
fillArrayConditionally(4, 'yes', 'true'); // ['yes', 'yes', 'yes', 'yes']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function fillArrayConditionally(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fillArrayConditionally(size, value, isTrue) {
  let res = new Array(size)

  if(isTrue === 'true') res.fill(value)
  else if(isTrue === 'false') res.fill()

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fillArrayConditionally', () => {
  expect(fillArrayConditionally).to.be.a('function');
});

it('Function fillArrayConditionally should include method fill()', () => {
  const res = fillArrayConditionally.toString()
  expect(res).to.include('.fill(')
});

it("fillArrayConditionally(5, 'a', 'true') should return ['a', 'a', 'a', 'a', 'a']", function() {
  expect(fillArrayConditionally(5, 'a', 'true')).to.deep.equal(['a', 'a', 'a', 'a', 'a']);
});

it("fillArrayConditionally(3, 1, 'false') should return [undefined, undefined, undefined]", function() {
  expect(fillArrayConditionally(3, 1, 'false')).to.deep.equal([undefined, undefined, undefined]);
});

it("fillArrayConditionally(4, 'yes', 'true') should return ['yes', 'yes', 'yes', 'yes']", function() {
  expect(fillArrayConditionally(4, 'yes', 'true')).to.deep.equal(['yes', 'yes', 'yes', 'yes']);
});

it("fillArrayConditionally(2, 'even', 'false') should return [undefined, undefined]", function() {
  expect(fillArrayConditionally(2, 'even', 'false')).to.deep.equal([undefined, undefined]);
});

it("fillArrayConditionally(0, 'none', 'true') should return an empty array", function() {
  expect(fillArrayConditionally(0, 'none', 'true')).to.deep.equal([]);
});

it("fillArrayConditionally(6, 2, 'true') should return an array filled with 2s", function() {
  expect(fillArrayConditionally(6, 2, 'true')).to.deep.equal([2, 2, 2, 2, 2, 2]);
});

it("fillArrayConditionally(3, 'first', 'false') should return an array filled with undefined", function() {
  expect(fillArrayConditionally(3, 'first', 'false')).to.deep.equal([undefined, undefined, undefined]);
});

it("fillArrayConditionally(4, 'last', 'false') should return an array filled with undefined", function() {
  expect(fillArrayConditionally(4, 'last', 'false')).to.deep.equal([undefined, undefined, undefined, undefined]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
