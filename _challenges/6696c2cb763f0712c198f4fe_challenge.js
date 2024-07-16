// NAMEEN:
// NAMERU:Безопасное обновление элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию, которая обновляет элементы в массиве на основе массива индексов и массива новых элементов, используя метод `with()` для обеспечения неизменности исходного массива.

Функция принимает:

* `array`: Массив, элементы которого требуется обновить.
* `indexArray`: Массив индексов элементов, которые нужно обновить.
* `elementsArray`: Массив новых элементов для замены.

Функция должна вернуть новый массив с обновленными элементами.


* Функция должна проверить, что массивы индексов и элементов для замены имеют одинаковую длину. Если нет, вернуть копию исходного массива.
* Для каждого индекса из indexArray, функция должна использовать метод `with()` для вставки соответствующего элемента из `elementsArray` в новый массив.
* Если индекс за пределами допустимого диапазона для массива, этот индекс пропускается.


Пример использования:
```javascript
const originalArray = ['a', 'b', 'c', 'd'];


const updatedArray1 = updateArrayWith(originalArray, [1, 3], ['x', 'y']);
console.log(updatedArray1); // ['a', 'x', 'c', 'y']

const updatedArray2 = updateArrayWith(originalArray, [0, 5], ['hello', 'world']);
console.log(updatedArray2); // ['hello', 'b', 'c', 'd']

const updatedArray3 = updateArrayWith(originalArray, [0, 1, 2, 3], ['hello']);
console.log(updatedArray3); // ['a', 'b', 'c', 'd']


console.log(originalArray); // ['a', 'b', 'c', 'd']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function updateArrayWith(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function updateArrayWith(arr, indexes, elements) {
  let res = [...arr]
  if(indexes.length !== elements.length) return res

  indexes.forEach((el, index) => {
    if(el < res.length) res = res.with(el, elements[index])
  })
  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.with = function(index, value){
  const newArray = this.slice();
  newArray.splice(index, 1, value);
  return newArray;
}

it('Created function updateArrayWith', () => {
  expect(updateArrayWith).to.be.a('function');
});

it('Function updateArrayWith should include method with()', () => {
  const res = updateArrayWith.toString()
  expect(res).to.include('.with(')
});

it('should correctly update elements given valid index and elements arrays', function() {
  const originalArray = ['January', 'February', 'April'];
  const result = updateArrayWith(originalArray, [2], ['March']);
  expect(result).to.deep.equal(['January', 'February', 'March']);
});

it('should return a new array with the same elements if indexes are out of bounds', function() {
  const originalArray = ['a', 'b', 'c'];
  const result = updateArrayWith(originalArray, [3], ['d']);
  expect(result).to.deep.equal(['a', 'b', 'c']);
});

it('should handle negative indexes correctly', function() {
  const originalArray = ['first', 'second', 'fourth'];
  const result = updateArrayWith(originalArray, [-1], ['third']);
  expect(result).to.deep.equal(['first', 'second', 'third']);
});

it('should return the original array (copy) if indexes and elements arrays have different lengths', function() {
  const originalArray = ['x', 'y', 'z'];
  const result = updateArrayWith(originalArray, [1], ['a', 'b']);
  expect(result).to.deep.equal(['x', 'y', 'z']);
});

it('should not modify the original array', function() {
  const originalArray = ['one', 'two', 'three'];
  updateArrayWith(originalArray, [1], ['new']);
  expect(originalArray).to.deep.equal(['one', 'two', 'three']);
});

it('should correctly update multiple elements', function() {
  const originalArray = [1, 2, 3, 4];
  const result = updateArrayWith(originalArray, [1, 3], [8, 9]);
  expect(result).to.deep.equal([1, 8, 3, 9]);
});

it('should skip invalid indexes', function() {
  const originalArray = ['start', 'middle', 'end'];
  const result = updateArrayWith(originalArray, [4], ['newStart']);
  expect(result).to.deep.equal(['start', 'middle', 'end']);
});

it('should work with empty arrays and return a copy of the original array', function() {
  const originalArray = [];
  const result = updateArrayWith(originalArray, [], []);
  expect(result).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
