// NAMEEN:
// NAMERU:Трансформация и инверсия данных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `transformAndReverse`, которая принимает массив строк и возвращает новый массив, в котором каждая строка переведена в верхний регистр и массив расположен в обратном порядке.

Используйте метод `map()` для трансформации строк и `toReversed()` для их инвертирования.


Примеры запуска функции:
```javascript
transformAndReverse(["apple", "banana", "cherry"]); // ["CHERRY", "BANANA", "APPLE"]
transformAndReverse(["hello", "world"]);            // ["WORLD", "HELLO"]
transformAndReverse([]);                           // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function transformAndReverse(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function transformAndReverse(array) {
  const res = array.map(el => el.toUpperCase())
  return res.toReversed();
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toReversed = function(){
  return this.slice().reverse()
}

it('Created function transformAndReverse', () => {
  expect(transformAndReverse).to.be.a('function');
});

it("Function transformAndReverse() should include toReversed method", () => {
  const result = transformAndReverse.toString();
  expect(result).to.include('.toReversed()');
});

it("Function transformAndReverse() should not modify the original array", () => {
  let originalArray = ['a', 'b', 'c'];
  transformAndReverse(originalArray);
  expect(originalArray).to.deep.equal(['a', 'b', 'c']);
});

it("transformAndReverse(['apple', 'banana', 'cherry']) should return ['CHERRY', 'BANANA', 'APPLE']", () => {
  expect(transformAndReverse(['apple', 'banana', 'cherry'])).to.deep.equal(['CHERRY', 'BANANA', 'APPLE']);
});

it("transformAndReverse(['hello', 'world']) should return ['WORLD', 'HELLO']", () => {
  expect(transformAndReverse(['hello', 'world'])).to.deep.equal(['WORLD', 'HELLO']);
});

it("transformAndReverse([]) should return []", () => {
  expect(transformAndReverse([])).to.deep.equal([]);
});

it("transformAndReverse(['one', 'two', 'three']) should return ['THREE', 'TWO', 'ONE']", () => {
  expect(transformAndReverse(['one', 'two', 'three'])).to.deep.equal(['THREE', 'TWO', 'ONE']);
});

it("transformAndReverse(['Java', 'C++', 'Python']) should return ['PYTHON', 'C++', 'JAVA']", () => {
  expect(transformAndReverse(['Java', 'C++', 'Python'])).to.deep.equal(['PYTHON', 'C++', 'JAVA']);
});

it("transformAndReverse(['single']) should return ['SINGLE']", () => {
  expect(transformAndReverse(['single'])).to.deep.equal(['SINGLE']);
});

it("transformAndReverse(['123', '456']) should return ['456', '123']", () => {
  expect(transformAndReverse(['123', '456'])).to.deep.equal(['456', '123']);
});

it("transformAndReverse(['UpperCase']) should return ['UPPERCASE']", () => {
  expect(transformAndReverse(['UpperCase'])).to.deep.equal(['UPPERCASE']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
