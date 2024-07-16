// NAMEEN:
// NAMERU:Инвертирование массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseArray`, которая принимает массив в качестве аргумента.

Функция возвращает новый массив, элементы которого расположены в обратном порядке.

Для создания нового массива используйте метод `pop()` для извлечения элементов из исходного массива и метод `push()` для добавления их в новый массив.

Пример запуска функции:
```javascript
reverseArray([1, 2, 3, 4, 5]); // [ 5, 4, 3, 2, 1 ]
reverseArray(['a', 'b', 'c']); // [ 'c', 'b', 'a' ]
reverseArray([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function reverseArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseArray(arr){
  let result = []

  while(arr.length !== 0){
    result.push(arr.pop())
  }

  return result
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseArray', () => {
  expect(reverseArray).to.be.a('function');
});

it("reverseArray([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1]", () => {
  expect(reverseArray([1, 2, 3, 4, 5])).to.deep.equal([5, 4, 3, 2, 1]);
});

it("reverseArray(['a', 'b', 'c']) should return ['c', 'b', 'a']", () => {
  expect(reverseArray(['a', 'b', 'c'])).to.deep.equal(['c', 'b', 'a']);
});

it("reverseArray([]) should return []", () => {
  expect(reverseArray([])).to.deep.equal([]);
});

it("reverseArray([true, false, true]) should return [true, false, true]", () => {
  expect(reverseArray([true, false, true])).to.deep.equal([true, false, true]);
});

it("reverseArray(['one', 'two', 'three']) should return ['three', 'two', 'one']", () => {
  expect(reverseArray(['one', 'two', 'three'])).to.deep.equal(['three', 'two', 'one']);
});

it("reverseArray([null, undefined, '']) should return ['', undefined, null]", () => {
  expect(reverseArray([null, undefined, ''])).to.deep.equal(['', undefined, null]);
});

it("reverseArray(['single']) should return ['single']", () => {
  expect(reverseArray(['single'])).to.deep.equal(['single']);
});

it("reverseArray([1, -1, 2, -2, 3, -3]) should return [-3, 3, -2, 2, -1, 1]", () => {
  expect(reverseArray([1, -1, 2, -2, 3, -3])).to.deep.equal([-3, 3, -2, 2, -1, 1]);
});

it("reverseArray should include methods pop() and push()", () => {
  const result = reverseArray.toString()
  expect(result).to.include('.pop()')
  expect(result).to.include('.push(')
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
