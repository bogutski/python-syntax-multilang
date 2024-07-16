// NAMEEN:
// NAMERU:Проверка наличия всех элементов в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `containsAllElements`, которая принимает два массива: `arr` и `elements`.

Функция должна возвращать `true`, если все элементы из массива `elements` содержатся в массиве `arr`, и `false` в противном случае.


Примеры запуска функции:
```javascript
containsAllElements(['apple', 'banana', 'mango'], ['banana', 'apple']); // true
containsAllElements([1, 2, 3, 4, 5], [2, 4, 6]);  // false
containsAllElements(['a', 'b', 'c'], ['a', 'd']); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function containsAllElements(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function containsAllElements(arr, elements) {
  for(let el of elements){
    if(!arr.includes(el)) return false
  }

  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function containsAllElements', () => {
  expect(containsAllElements).to.be.a('function');
});

it("Function containsAllElements should include includes method", () => {
  const result = containsAllElements.toString();
  expect(result).to.include('.includes(');
});

it('containsAllElements(["apple", "banana", "mango"], ["banana", "apple"]) should return true', function() {
  expect(containsAllElements(["apple", "banana", "mango"], ["banana", "apple"])).to.equal(true);
});

it('containsAllElements([1, 2, 3, 4, 5], [2, 4, 6]) should return false', function() {
  expect(containsAllElements([1, 2, 3, 4, 5], [2, 4, 6])).to.equal(false);
});

it('containsAllElements(["a", "b", "c"], ["a", "d"]) should return false', function() {
  expect(containsAllElements(["a", "b", "c"], ["a", "d"])).to.equal(false);
});

it('containsAllElements([true, false, true], [true, false]) should return true', function() {
  expect(containsAllElements([true, false, true], [true, false])).to.equal(true);
});

it('containsAllElements([null, undefined, null], [null]) should return true', function() {
  expect(containsAllElements([null, undefined, null], [null])).to.equal(true);
});

it('containsAllElements([NaN, 1, 2], [NaN]) should return true', function() {
  expect(containsAllElements([NaN, 1, 2], [NaN])).to.equal(true);
});

it('containsAllElements(["apple", "banana", "mango"], ["APPLE"]) should return false', function() {
  expect(containsAllElements(["apple", "banana", "mango"], ["APPLE"])).to.equal(false);
});

it('containsAllElements([], ["anything"]) should return false', function() {
  expect(containsAllElements([], ["anything"])).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
