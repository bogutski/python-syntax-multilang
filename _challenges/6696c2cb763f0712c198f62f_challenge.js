// NAMEEN:
// NAMERU:Сортировка массива строк по длине

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortStringsByLength`, которая принимает массив строк и возвращает новый массив, где строки отсортированы по их длине в порядке возрастания.

Функция должна использовать метод `toSorted()` для обеспечения неизменности исходного массива.


Примеры запуска функции:
```javascript
sortStringsByLength(["apple", "banana", "cherry", "date"]); // [ 'date', 'apple', 'banana', 'cherry' ]
sortStringsByLength(["hello", "world", "!", "JavaScript"]); // [ '!', 'hello', 'world', 'JavaScript' ]
sortStringsByLength(["test", "testing", "tester", "tested"]); // [ 'test', 'tester', 'tested', 'testing' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortStringsByLength(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortStringsByLength(arr) {
  return arr.toSorted((a, b) => a.length - b.length);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSorted = function(compareFunction){
  const newArray = this.slice()
  if(compareFunction) return newArray.sort(compareFunction)
  else return newArray.sort()
}

it('Created function sortStringsByLength', () => {
  expect(sortStringsByLength).to.be.a('function');
});

it('Function sortStringsByLength should include method toSorted()', () => {
  const res = sortStringsByLength.toString()
  expect(res).to.include('.toSorted(')
});

it("sortStringsByLength(['apple', 'banana', 'cherry', 'date']) should return ['date', 'apple', 'banana', 'cherry']", () => {
  expect(sortStringsByLength(["apple", "banana", "cherry", "date"])).to.deep.equal(["date", "apple", "banana", "cherry"]);
});

it("sortStringsByLength(['hello', 'world', '!', 'JavaScript']) should return ['!', 'hello', 'world', 'JavaScript']", () => {
  expect(sortStringsByLength(["hello", "world", "!", "JavaScript"])).to.deep.equal(["!", "hello", "world", "JavaScript"]);
});

it("sortStringsByLength(['test', 'testing', 'tester', 'tested']) should return ['test', 'tester', 'tested', 'testing']", () => {
  expect(sortStringsByLength(["test", "testing", "tester", "tested"])).to.deep.equal(["test", "tester", "tested", "testing"]);
});

it("sortStringsByLength(['one', 'two', 'three', 'four']) should return ['one', 'two', 'four', 'three']", () => {
  expect(sortStringsByLength(["one", "two", "three", "four"])).to.deep.equal(["one", "two", "four", "three"]);
});

it("sortStringsByLength(['a', 'ab', 'abc']) should return ['a', 'ab', 'abc']", () => {
  expect(sortStringsByLength(["a", "ab", "abc"])).to.deep.equal(["a", "ab", "abc"]);
});

it("sortStringsByLength(['12345', '1234', '123', '12']) should return ['12', '123', '1234', '12345']", () => {
  expect(sortStringsByLength(["12345", "1234", "123", "12"])).to.deep.equal(["12", "123", "1234", "12345"]);
});

it("sortStringsByLength([]) should return []", () => {
  expect(sortStringsByLength([])).to.deep.equal([]);
});

it("sortStringsByLength(['same', 'same', 'same']) should return ['same', 'same', 'same']", () => {
  expect(sortStringsByLength(['same', 'same', 'same'])).to.deep.equal(['same', 'same', 'same']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
