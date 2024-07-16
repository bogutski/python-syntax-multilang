// NAMEEN:
// NAMERU:Удаление элементов до баланса сумм

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `balanceSums`, которая принимает массив чисел в качестве аргумента.

Функция должна последовательно удалять элементы с конца массива с использованием метода `pop()`, пока сумма удалённых элементов не станет равной или большей сумме оставшихся элементов в массиве.

Функция должна возвращать изменённый массив, в котором остаются элементы, не превышающие суммарно сумму удалённых элементов.


Пример запуска функции:
```javascript
balanceSums([1, 2, 3, 4, 5, 6]); // [ 1, 2, 3, 4 ] - так как сумма удалённых (6+5=11) >= сумма оставшихся (1+2+3+4=10)
balanceSums([5, 3, 2, 7, 8]);  // [ 5, 3, 2 ] - так как сумма удалённых (8+7=15) >= сумма оставшихся (5+3+2=10)
balanceSums([10, 5, 3, 2]);  // [ 10 ] - так как сумма удалённых (2+3+5=10) >= сумма оставшихся (10)
balanceSums([10, 10]);     // [ 10 ]
balanceSums([5]);        // []
balanceSums([]);       // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function balanceSums(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function balanceSums(arr) {
  let originalSum = arr.reduce((acc, val) => acc + val, 0)
  let deletedSum = 0

  while(originalSum > deletedSum && arr.length > 0) {
    let int = arr.pop()
    deletedSum += int
    originalSum -= int
  }

  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function balanceSums', () => {
  expect(balanceSums).to.be.a('function');
});

it("balanceSums([5, 3, 2, 7, 8]) should return [5, 3, 2]", () => {
  expect(balanceSums([5, 3, 2, 7, 8])).to.deep.equal([5, 3, 2]);
});

it("balanceSums([1, 2, 3, 4, 5, 6]) should return [1, 2, 3, 4]", () => {
  expect(balanceSums([1, 2, 3, 4, 5, 6])).to.deep.equal([1, 2, 3, 4]);
});

it("balanceSums([10]) should return []", () => {
  expect(balanceSums([10])).to.deep.equal([]);
});

it("balanceSums([]) should return [] for an initially empty array", () => {
  expect(balanceSums([])).to.deep.equal([]);
});

it("balanceSums([20, 15, 5, 10]) should return [20]", () => {
  expect(balanceSums([20, 15, 5, 10])).to.deep.equal([20]);
});

it("should modify the original array", () => {
  let originalArray = [1, 2, 3, 4];
  balanceSums(originalArray);
  expect(originalArray.length).to.be.below(4); // Checking if the array has been modified
});

it("balanceSums([2, 2, 2, 2]) should return [2, 2]", () => {
  expect(balanceSums([2, 2, 2, 2])).to.deep.equal([2, 2]);
});

it("balanceSums([180, 698, 14, 999, 103, 782, 167, 500]) should return [180, 698, 14]", () => {
  expect(balanceSums([180, 698, 14, 999, 103, 782, 167, 500])).to.deep.equal([180, 698, 14]);
});

it("balanceSums([100, 0, 0, 50, 50, 0]) should return [100, 0, 0]", () => {
  expect(balanceSums([100, 0, 0, 50, 50, 0])).to.deep.equal([100, 0, 0]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
