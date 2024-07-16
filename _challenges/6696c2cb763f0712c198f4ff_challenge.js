// NAMEEN:
// NAMERU:Добавление или замена элемента в массиве с условием

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `modifyArray`, которая принимает исходный массив, позицию для добавления/замены элемента, сам элемент, и строку, указывающую действие ('add' или 'replace').

Для добавления элемента можете использовать любой метод (которые не изменяет исходный массив), а для замены - метод `with()`.

Функция должна возвращать новый массив с учётом указанного действия, не изменяя исходный массив.

Если в строке было передано другое значение, функция должна вернуть строку вида: `String is not recognized`


Примеры Запуска Функции:
```javascript
// Добавление элемента
console.log(modifyArray(['a', 'b', 'd'], 2, 'c', 'add')); // Вывод: ['a', 'b', 'c', 'd']

// Замена элемента
console.log(modifyArray(['a', 'b', 'd'], 2, 'c', 'replace')); // Вывод: ['a', 'b', 'c']

// Добавление элемента в начало
console.log(modifyArray(['b', 'c'], 0, 'a', 'add')); // Вывод: ['a', 'b', 'c']

// Замена элемента в начале
console.log(modifyArray(['x', 'b', 'c'], 0, 'a', 'replace')); // Вывод: ['a', 'b', 'c']

// Строка не распознана
console.log(modifyArray([1, 2, 3], 0, 5, 'delete')); // Вывод: "String is not recognized"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function modifyArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function modifyArray(arr, i, el, toDo) {
  if(toDo === 'add'){
    let res = arr.slice()
    res.splice(i, 0, el)
    return res
  } else if(toDo === 'replace') return arr.with(i, el)
  else return 'String is not recognized';
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.with = function(index, value){
  const newArray = this.slice();
  newArray.splice(index, 1, value);
  return newArray;
}

it('Created function modifyArray', () => {
  expect(modifyArray).to.be.a('function');
});

it('Function modifyArray should include method with()', () => {
  const res = modifyArray.toString()
  expect(res).to.include('.with(')
});

it("modifyArray([1, 2, 4], 2, 3, 'add') should return [1, 2, 3, 4]", function() {
  expect(modifyArray([1, 2, 4], 2, 3, 'add')).to.deep.equal([1, 2, 3, 4]);
});

it("modifyArray(['a', 'b', 'd'], 2, 'c', 'add') should return ['a', 'b', 'c', 'd']", function() {
  expect(modifyArray(['a', 'b', 'd'], 2, 'c', 'add')).to.deep.equal(['a', 'b', 'c', 'd']);
});

it("modifyArray(['a', 'b', 'd'], 2, 'c', 'replace') should return ['a', 'b', 'c']", function() {
  expect(modifyArray(['a', 'b', 'd'], 2, 'c', 'replace')).to.deep.equal(['a', 'b', 'c']);
});

it("modifyArray(['b', 'c'], 0, 'a', 'add') should return ['a', 'b', 'c']", function() {
  expect(modifyArray(['b', 'c'], 0, 'a', 'add')).to.deep.equal(['a', 'b', 'c']);
});

it("modifyArray(['x', 'b', 'c'], 0, 'a', 'replace') should return ['a', 'b', 'c']", function() {
  expect(modifyArray(['x', 'b', 'c'], 0, 'a', 'replace')).to.deep.equal(['a', 'b', 'c']);
});

it("modifyArray([1, 2, 3], 1, 4, 'unknown') should return 'String is not recognized'", function() {
  expect(modifyArray([1, 2, 3], 1, 4, 'unknown')).to.equal('String is not recognized');
});

it("modifyArray([1, 2, 3], 1, 4, 'add') should not modify the original array", function() {
  const originalArray = [1, 2, 3];
  modifyArray(originalArray, 1, 4, 'add');
  expect(originalArray).to.deep.equal([1, 2, 3]);
});

it("modifyArray([], 0, 'a', 'add') should handle an empty array correctly", function() {
  expect(modifyArray([], 0, 'a', 'add')).to.deep.equal(['a']);
});

it("modifyArray(['a', 'b'], -1, 'c', 'replace') should return ['a', 'c']", function() {
  expect(modifyArray(['a', 'b'], -1, 'c', 'replace')).to.deep.equal(['a', 'c']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
