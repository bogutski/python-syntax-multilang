// NAMEEN:
// NAMERU:Перевернуть массив с использованием метода reverse

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseArray`, которая принимает массив с разными типами данных.

Функция должна вернуть новый массив, в котором элементы будут расположены в обратном порядке.

Если массив пустой, то вернуть строку 'Array is empty'.

Используйте метод `reverse`, для решения этой задачи.


Примеры запуска функции:
```javascript
reverseArray([1, 2, 3]);       // [3, 2, 1]
reverseArray([10, 9, 8]);      // [8, 9, 10]
reverseArray(['a', 'b', 'c']); // ['c', 'b', 'a']
reverseArray([]);              // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseArray(arr){
  if(!arr.length) return 'Array is empty';
  return arr.reverse();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseArray', () => {
  expect(reverseArray).to.be.a('function');
});

it('Function reverseArray includes method ".reverse"', () => {
  expect(reverseArray.toString()).to.include('.reverse');
});

it('reverseArray([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1]', () => {
  expect(reverseArray([1, 2, 3, 4, 5])).to.deep.equal([5, 4, 3, 2, 1]);
});

it('reverseArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
  expect(reverseArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it("reverseArray(['a', 'b', 'c', 'd', 'e']) should return ['e', 'd', 'c', 'b', 'a']", () => {
  expect(reverseArray(['a', 'b', 'c', 'd', 'e'])).to.deep.equal(['e', 'd', 'c', 'b', 'a']);
});

it("reverseArray(['a', 1, 'b', 2, 'c', 3]) should return [3, 'c', 2, 'b', 1, 'a']", () => {
  expect(reverseArray(['a', 1, 'b', 2, 'c', 3])).to.deep.equal([3, 'c', 2, 'b', 1, 'a']);
});

it("reverseArray([]) should return 'Array is empty'", () => {
  expect(reverseArray([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
