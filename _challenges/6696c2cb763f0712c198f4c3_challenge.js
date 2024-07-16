// NAMEEN:
// NAMERU:Изменение элементов массива на основе их индекса

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `modifyBasedOnIndex`, которая принимает массив и модифицирует каждый его элемент, добавляя к его значению его индекс в массиве.

Функция возвращает измененный массив.

Используйте метод `forEach` для итерации по массиву и включения индекса в обработку элементов.


Пример запуска функции:
```javascript
modifyBasedOnIndex([10, 20, 30, 40]); // [ 10, 21, 32, 43 ]
modifyBasedOnIndex([-5, -4, -3, -2, -1]); // [ -5, -3, -1, 1, 3 ]
modifyBasedOnIndex(['a', 'b', 'c']) // [ 'a0', 'b1', 'c2' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function modifyBasedOnIndex(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function modifyBasedOnIndex(arr) {
  arr.forEach((n, i) => arr[i] = n + i)
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function modifyBasedOnIndex', () => {
  expect(modifyBasedOnIndex).to.be.a('function');
});

it('Function modifyBasedOnIndex should include method forEach()', () => {
  const res = modifyBasedOnIndex.toString()
  expect(res).to.include('.forEach(')
});

it("modifyBasedOnIndex([10, 20, 30, 40]) should modify array to [10, 21, 32, 43]", () => {
  const numbers = [10, 20, 30, 40];
  modifyBasedOnIndex(numbers);
  expect(numbers).to.deep.equal([10, 21, 32, 43]);
});

it("modifyBasedOnIndex([0, 1, 2, 3]) should modify array to [0, 2, 4, 6]", () => {
  const sequence = [0, 1, 2, 3];
  modifyBasedOnIndex(sequence);
  expect(sequence).to.deep.equal([0, 2, 4, 6]);
});

it("modifyBasedOnIndex([-3, -2, -1, 0]) should modify array to [-3, -1, 1, 3]", () => {
  const negatives = [-3, -2, -1, 0];
  modifyBasedOnIndex(negatives);
  expect(negatives).to.deep.equal([-3, -1, 1, 3]);
});

it("modifyBasedOnIndex([]) should keep the array unchanged", () => {
  const emptyArray = [];
  modifyBasedOnIndex(emptyArray);
  expect(emptyArray).to.deep.equal([]);
});

it("modifyBasedOnIndex([0, 0, 0]) should return [0, 1, 2]", () => {
  const numbers = [0, 0, 0];
  expect(modifyBasedOnIndex(numbers)).to.deep.equal([0, 1, 2]);
});

it("modifyBasedOnIndex([100, 200, 300]) should modify array to [100, 201, 302]", () => {
  const largeNumbers = [100, 200, 300];
  modifyBasedOnIndex(largeNumbers);
  expect(largeNumbers).to.deep.equal([100, 201, 302]);
});

it("modifyBasedOnIndex(['0', '1', '2', '3']) should concatenate index to each string", () => {
  const strings = ['0', '1', '2', '3'];
  modifyBasedOnIndex(strings);
  expect(strings).to.deep.equal(['00', '11', '22', '33']);
});

it("modifyBasedOnIndex([1]) should modify single-element array to [1]", () => {
  const singleElement = [1];
  modifyBasedOnIndex(singleElement);
  expect(singleElement).to.deep.equal([1]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
