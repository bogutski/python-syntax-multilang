// NAMEEN:
// NAMERU:Найти индекс первого повторяющегося элемента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findFirstRepeatingIndex`, которая принимает массив.

Функция должна вернуть индекс первого элемента, который повторяется в массиве.

Если таких элементов нет, функция должна вернуть строку "No repeating elements".


Примеры запуска функции:
```javascript
console.log(findFirstRepeatingIndex(['a', 'b', 'c', 'a', 'd', 'b'])); // 3
console.log(findFirstRepeatingIndex([1, 2, 3, 4, 2, 5]));             // 4
console.log(findFirstRepeatingIndex([1, 2, 3, 4, 5]));                // "No repeating elements"
console.log(findFirstRepeatingIndex([NaN, NaN, 0]));                  // 1
console.log(findFirstRepeatingIndex([5, NaN, 10, NaN, 100, NaN]));    // 3
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findFirstRepeatingIndex(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findFirstRepeatingIndex(arr) {
  const indexOfNaN = arr.findIndex(el => Number.isNaN(el))

  for(let i = 0; i <= arr.length - 2; i++){

    if(indexOfNaN === -1){
      const index = arr.indexOf(arr[i], i + 1)
      if(index !== -1) return index
    } else {
      if(Number.isNaN(arr[i]) && indexOfNaN !== i) return i
    }

  }

  return 'No repeating elements';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findFirstRepeatingIndex', () => {
  expect(findFirstRepeatingIndex).to.be.a('function');
});

it('findFirstRepeatingIndex(["a", "b", "c", "a", "d", "b"]) should return 3', function() {
  expect(findFirstRepeatingIndex(["a", "b", "c", "a", "d", "b"])).to.equal(3);
});

it('findFirstRepeatingIndex([1, 2, 3, 4, 5]) should return "No repeating elements"', function() {
  expect(findFirstRepeatingIndex([1, 2, 3, 4, 5])).to.equal("No repeating elements");
});

it('findFirstRepeatingIndex([1, 2, 3, 4, 2, 5]) should return 4', function() {
  expect(findFirstRepeatingIndex([1, 2, 3, 4, 2, 5])).to.equal(4);
});

it('findFirstRepeatingIndex(["apple", "banana", "cherry", "apple"]) should return 3', function() {
  expect(findFirstRepeatingIndex(["apple", "banana", "cherry", "apple"])).to.equal(3);
});

it('findFirstRepeatingIndex([true, false, true, false]) should return 2', function() {
  expect(findFirstRepeatingIndex([true, false, true, false])).to.equal(2);
});

it('findFirstRepeatingIndex(["a", "b", "c"]) should return "No repeating elements"', function() {
  expect(findFirstRepeatingIndex(["a", "b", "c"])).to.equal("No repeating elements");
});

it('findFirstRepeatingIndex([null, undefined, null]) should return 2', function() {
  expect(findFirstRepeatingIndex([null, undefined, null])).to.equal(2);
});

it('findFirstRepeatingIndex([NaN, NaN, 0]) should return 1', function() {
  expect(findFirstRepeatingIndex([NaN, NaN, 0])).to.equal(1);
});

it('findFirstRepeatingIndex([5, NaN, 10, NaN, 100, NaN]) should return 3', function() {
  expect(findFirstRepeatingIndex([5, NaN, 10, NaN, 100, NaN])).to.equal(3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
