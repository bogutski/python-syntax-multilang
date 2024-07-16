// NAMEEN:
// NAMERU:Индексация элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `indexElements`, которая принимает массив произвольных значений и возвращает объект, где ключами будут значения массива, а значениями — их индексы в исходном массиве.

Используйте метод `forEach` для реализации этой задачи.


Пример запуска функции:
```javascript
indexElements(['a', 'b', 'c', 'd', 'e']); // { a: 0, b: 1, c: 2, d: 3, e: 4 }
indexElements(['apple', 'banana', 'apple', 'cherry']); // { apple: 2, banana: 1, cherry: 3 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function indexElements(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function indexElements(arr) {
  let res = {}
  arr.forEach((el, index) => res[el] = index)

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function indexElements', () => {
  expect(indexElements).to.be.a('function');
});

it('Function indexElements should include method forEach()', () => {
  const res = indexElements.toString()
  expect(res).to.include('.forEach(')
});

it("indexElements(['apple', 'banana', 'apple', 'cherry']) should return { 'apple': 2, 'banana': 1, 'cherry': 3 }", () => {
  expect(indexElements(["apple", "banana", "apple", "cherry"])).to.deep.equal({ "apple": 2, "banana": 1, "cherry": 3 });
});

it("indexElements(['a', 'b', 'c', 'd']) should return { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }", () => {
  expect(indexElements(["a", "b", "c", "d"])).to.deep.equal({ "a": 0, "b": 1, "c": 2, "d": 3 });
});

it("indexElements([]) should return {}", () => {
  expect(indexElements([])).to.deep.equal({});
});

it("indexElements(['hello', 'world']) should return { 'hello': 0, 'world': 1 }", () => {
  expect(indexElements(["hello", "world"])).to.deep.equal({ "hello": 0, "world": 1 });
});

it("indexElements([10, 20, 10, 30]) should return { '10': 2, '20': 1, '30': 3 }", () => {
  expect(indexElements([10, 20, 10, 30])).to.deep.equal({ "10": 2, "20": 1, "30": 3 });
});

it("indexElements(['same', 'same', 'same']) should return { 'same': 2 }", () => {
  expect(indexElements(["same", "same", "same"])).to.deep.equal({ "same": 2 });
});

it("indexElements(['one']) should return { 'one': 0 }", () => {
  expect(indexElements(["one"])).to.deep.equal({ "one": 0 });
});

it("indexElements(['first', 'second']) should return { 'first': 0, 'second': 1 }", () => {
  expect(indexElements(["first", "second"])).to.deep.equal({ "first": 0, "second": 1 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
