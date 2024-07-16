// NAMEEN:
// NAMERU:Сортировка чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дан массив, содержащий как положительные, так и отрицательные числа.

Напишите функцию `sortNumbers`, которая перемещает все отрицательные числа в начало массива, а положительные — в его конец.

Число 0 считается положительным для этой задачи.

Функция должна возвращать новый отсортированный массив с числами.

Пример запуска функции:
```javascript
sortNumbers([-7, -1]); // [-7, -1]
sortNumbers([2, 0, 1]); // [2, 0, 1]
sortNumbers([3, -2, 1, -5, 0, -3]); // [-2, -5, -3, 3, 1, 0]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortNumbers(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortNumbers(arr){
  const neg = [];
  const pos = [];

  for(let num of arr){
    if(num < 0) neg.push(num)
    else pos.push(num)
  }

  return [...neg, ...pos];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortNumbers', () => {
  expect(sortNumbers).to.be.a('function');
});

it("sortNumbers([3, -2, 1, -5, 0, -3]) should return [-2, -5, -3, 3, 1, 0]", () => {
  expect(sortNumbers([3, -2, 1, -5, 0, -3])).to.deep.equal([-2, -5, -3, 3, 1, 0]);
});

it("sortNumbers([-7, -1]) should return [-7, -1]", () => {
  expect(sortNumbers([-7, -1])).to.deep.equal([-7, -1]);
});

it("sortNumbers([2, 0, 1]) should return [2, 0, 1]", () => {
  expect(sortNumbers([2, 0, 1])).to.deep.equal([2, 0, 1]);
});

it("sortNumbers([]) should return an empty array", () => {
  expect(sortNumbers([])).to.deep.equal([]);
});

it("sortNumbers([0, 0, 0]) should return [0, 0, 0]", () => {
  expect(sortNumbers([0, 0, 0])).to.deep.equal([0, 0, 0]);
});

it("sortNumbers([-5, -1, -3]) should return all negative numbers in the same order", () => {
  expect(sortNumbers([-5, -1, -3])).to.deep.equal([-5, -1, -3]);
});

it("sortNumbers([3, 1, 2]) should return all positive numbers including 0 in the same order", () => {
  expect(sortNumbers([3, 1, 2])).to.deep.equal([3, 1, 2]);
});

it("should verify that sortNumbers function is defined and is a function", () => {
  expect(sortNumbers).to.be.a('function');
});

it("sortNumbers([-2, 3, -1, 0]) should start with negative numbers followed by positive and 0", () => {
  expect(sortNumbers([-2, 3, -1, 0])).to.deep.equal([-2, -1, 3, 0]);
});

it("sortNumbers([1, -2, 3, -4, 5]) should return negative numbers followed by positive numbers", () => {
  expect(sortNumbers([1, -2, 3, -4, 5])).to.deep.equal([-2, -4, 1, 3, 5]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
