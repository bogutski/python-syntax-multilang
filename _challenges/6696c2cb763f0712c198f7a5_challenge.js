// NAMEEN:
// NAMERU:Проверка наличия подмассива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `containsSubarray`, которая принимает два массива: `arr` и `subArr`.

Функция должна возвращать `true`, если все элементы из массива `subArr` появляются в массиве `arr` в той же последовательности (не обязательно подряд), и `false` в противном случае.


Примеры запуска функции:
```javascript
containsSubarray([1, 2, 3, 4, 5], [2, 4, 3]); // false
containsSubarray(['a', 'b', 'c', 'd', 'e'], ['b', 'c', 'd']); // true
containsSubarray(['apple', 'banana', 'mango'], ['banana', 'apple']); // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function containsSubarray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function containsSubarray(arr, subArray) {
  let currentIndex = 0
  for(let i = 0; i < subArray.length; i++){
    if(arr.includes(subArray[i], currentIndex)) currentIndex = arr.indexOf(subArray[i])
    else return false
  }

  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function containsSubarray', () => {
  expect(containsSubarray).to.be.a('function');
});

it("Function containsAllElements should include includes method", () => {
  const result = containsSubarray.toString();
  expect(result).to.include('.includes(');
});

it('containsSubarray(["a", "b", "c", "d", "e"], ["b", "c", "d"]) should return true', function() {
  expect(containsSubarray(["a", "b", "c", "d", "e"], ["b", "c", "d"])).to.equal(true);
});

it('containsSubarray([1, 2, 3, 4, 5], [2, 4, 3]) should return false', function() {
  expect(containsSubarray([1, 2, 3, 4, 5], [2, 4, 3])).to.equal(false);
});

it('containsSubarray(["apple", "banana", "mango"], ["banana", "apple"]) should return false', function() {
  expect(containsSubarray(["apple", "banana", "mango"], ["banana", "apple"])).to.equal(false);
});

it('containsSubarray([true, false, true, false], [false, true]) should return true', function() {
  expect(containsSubarray([true, false, true, false], [false, true])).to.equal(true);
});

it('containsSubarray([null, undefined, null], [undefined, null]) should return true', function() {
  expect(containsSubarray([null, undefined, null], [undefined, null])).to.equal(true);
});

it('containsSubarray(["a", "b", "c"], ["b", "c", "d"]) should return false', function() {
  expect(containsSubarray(["a", "b", "c"], ["b", "c", "d"])).to.equal(false);
});

it('containsSubarray(["apple", "banana", "mango"], ["apple", "banana"]) should return true', function() {
  expect(containsSubarray(["apple", "banana", "mango"], ["apple", "banana"])).to.equal(true);
});

it('containsSubarray([1, 2, 3, 4, 5], [5]) should return true', function() {
  expect(containsSubarray([1, 2, 3, 4, 5], [5])).to.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
