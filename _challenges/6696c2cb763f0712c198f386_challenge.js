// NAMEEN:
// NAMERU:Последовательное удаление до максимального элемента

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeUntilMax`, которая принимает массив чисел.

Функция должна последовательно удалять элементы с конца массива с использованием метода `pop()`, пока не будет удален максимальный элемент в массиве.

Функция должна возвращать измененный исходный массив.

* Если максимальный элемент находится в конце массива, то он также должен быть удален.
* Если в массиве повторяется максимальный элемент, то удаление должно остановится после удаления первого максимального элемента.
* Если массив пустой, функция должна возвращать пустой массив.


Пример запуска функции:
```javascript
removeUntilMax([3, 5, 2, 4]); // [3]
removeUntilMax([10, 20, 5, 20]); // [10, 20, 5]
removeUntilMax([]); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeUntilMax(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeUntilMax(arr){
  if(!arr.length) return arr
  const maxNum = Math.max(...arr)

  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] === maxNum) {
      arr.pop()
      break
    }
    arr.pop()
  }

  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeUntilMax', () => {
  expect(removeUntilMax).to.be.a('function');
});

it("removeUntilMax([3, 5, 2, 4]) should return [3]", () => {
  expect(removeUntilMax([3, 5, 2, 4])).to.deep.equal([3]);
});

it("removeUntilMax([10, 20, 5, 20]) should return [10, 20, 5]", () => {
  expect(removeUntilMax([10, 20, 5, 20])).to.deep.equal([10, 20, 5]);
});

it("removeUntilMax([]) should return []", () => {
  expect(removeUntilMax([])).to.deep.equal([]);
});

it("removeUntilMax([1, 3, 5, 7]) should return [1, 3, 5]", () => {
  expect(removeUntilMax([1, 3, 5, 7])).to.deep.equal([1, 3, 5]);
});

it("removeUntilMax([10]) should return []", () => {
  expect(removeUntilMax([10])).to.deep.equal([]);
});

it("should modify the original array", () => {
  let originalArray = [1, 2, 3, 4, 5];
  removeUntilMax(originalArray);
  expect(originalArray).to.deep.equal([1, 2, 3, 4]);
});

it("removeUntilMax([5, 3, 5, 1]) should return [5, 3]", () => {
  expect(removeUntilMax([5, 3, 5, 1])).to.deep.equal([5, 3]);
});

it("removeUntilMax([2, 2, 2]) should return [2, 2]", () => {
  expect(removeUntilMax([2, 2, 2])).to.deep.equal([2, 2]);
});

it("removeUntilMax([5, 4, 3, 2, 1]) should return []", () => {
  expect(removeUntilMax([5, 4, 3, 2, 1])).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
