// NAMEEN:
// NAMERU:Отбор и инверсия элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `selectAndReverse`, которая принимает массив и функцию условия `condition`.

Функция должна возвращать новый массив, содержащий только те элементы исходного массива, которые удовлетворяют условию, переданному в `condition`, с элементами, расположенными в обратном порядке.

Используйте методы `toReversed()` для инвертирования элементов массива.


Примеры запуска функции:
```javascript
selectAndReverse([1, 2, 3, 4, 5, 6], x => x % 2 === 0); // [6, 4, 2]
selectAndReverse([true, false, true, false], x => x === false); // [false, false]
selectAndReverse(['apple', 'banana', 'cherry'], word => word.length > 5); // ['cherry', 'banana']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function selectAndReverse(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function selectAndReverse(array, condition) {
  let res = []
  array.forEach(el => {if(condition(el)) res.push(el)})

  return res.toReversed();
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toReversed = function(){
  return this.slice().reverse()
}

it('Created function selectAndReverse', () => {
  expect(selectAndReverse).to.be.a('function');
});

it("Function selectAndReverse() should include toReversed method", () => {
  const result = selectAndReverse.toString();
  expect(result).to.include('.toReversed()');
});

it("Function selectAndReverse() should not modify the original array", () => {
  let originalArray = ['a', 'b', 'c'];
  selectAndReverse(originalArray, item => typeof item === 'string');
  expect(originalArray).to.deep.equal(['a', 'b', 'c']);
});

it("selectAndReverse([1, 2, 3, 4, 5, 6], x => x % 2 === 0) should return [6, 4, 2]", () => {
  expect(selectAndReverse([1, 2, 3, 4, 5, 6], x => x % 2 === 0)).to.deep.equal([6, 4, 2]);
});

it("selectAndReverse(['apple', 'banana', 'cherry'], word => word.length > 5) should return ['cherry', 'banana']", () => {
  expect(selectAndReverse(['apple', 'banana', 'cherry'], word => word.length > 5)).to.deep.equal(['cherry', 'banana']);
});

it("selectAndReverse([true, false, true, false], x => x === false) should return [false, false]", () => {
  expect(selectAndReverse([true, false, true, false], x => x === false)).to.deep.equal([false, false]);
});

it("selectAndReverse(['one', 'two', 'three', 'four', 'five'], x => x.includes('o')) should return ['four', 'two', 'one']", () => {
  expect(selectAndReverse(['one', 'two', 'three', 'four', 'five'], x => x.includes('o'))).to.deep.equal(['four', 'two', 'one']);
});

it("selectAndReverse([10, 20, 30, 40, 50], x => x > 25) should return [50, 40, 30]", () => {
  expect(selectAndReverse([10, 20, 30, 40, 50], x => x > 25)).to.deep.equal([50, 40, 30]);
});

it("selectAndReverse([100, 200, 300], x => x < 150) should return [100]", () => {
  expect(selectAndReverse([100, 200, 300], x => x < 150)).to.deep.equal([100]);
});

it("selectAndReverse([1, 2, 3, 4, 5], x => x > 5) should return []", () => {
  expect(selectAndReverse([1, 2, 3, 4, 5], x => x > 5)).to.deep.equal([]);
});

it("selectAndReverse(['react', 'angular', 'vue'], x => x.startsWith('a')) should return ['angular']", () => {
  expect(selectAndReverse(['react', 'angular', 'vue'], x => x.startsWith('a'))).to.deep.equal(['angular']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
