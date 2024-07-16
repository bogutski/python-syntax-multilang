// NAMEEN:
// NAMERU:Удаление и возврат первых N элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `removeAndReturnFirstN`, которая принимает массив и число n.

Функция должна удалить первые n элементов из массива и вернуть их в новом массиве.

Если n больше длины массива, функция должна вернуть копию исходного массива.

Исходный массив после выполнения функции должен содержать оставшиеся элементы или быть пустым, если все элементы были удалены.

Используйте метод `shift()` для удаления элементов из массива и `push()` - для добавление элементов в новый.


Пример запуска функции:
```javascript
removeAndReturnFirstN([1, 2, 3, 4, 5], 2);      // [ 1, 2 ]
removeAndReturnFirstN(['a', 'b', 'c', 'd'], 3); // [ 'a', 'b', 'c' ]
removeAndReturnFirstN([true, false, true], 5);  // [ true, false, true ]
removeAndReturnFirstN([], 1); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function removeAndReturnFirstN(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function removeAndReturnFirstN(arr, n) {
  let res = []

  while(arr.length > 0 && n > 0){
    res.push(arr.shift())
    n--
  }

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function removeAndReturnFirstN', () => {
  expect(removeAndReturnFirstN).to.be.a('function');
});

it("removeAndReturnFirstN should include methods shift and push", () => {
  const res = removeAndReturnFirstN.toString()
  expect(res).to.include('.shift()');
  expect(res).to.include('.push(');
});

it("removeAndReturnFirstN([1, 2, 3, 4, 5], 2) should return [1, 2]", () => {
  expect(removeAndReturnFirstN([1, 2, 3, 4, 5], 2)).to.deep.equal([1, 2]);
});

it("removeAndReturnFirstN(['a', 'b', 'c', 'd'], 3) should return ['a', 'b', 'c']", () => {
  expect(removeAndReturnFirstN(['a', 'b', 'c', 'd'], 3)).to.deep.equal(['a', 'b', 'c']);
});

it("removeAndReturnFirstN([true, false, true], 5) should return [true, false, true]", () => {
  expect(removeAndReturnFirstN([true, false, true], 5)).to.deep.equal([true, false, true]);
});

it("removeAndReturnFirstN([], 1) should return []", () => {
  expect(removeAndReturnFirstN([], 1)).to.deep.equal([]);
});

it("removeAndReturnFirstN([1, 2, 3], 0) should return []", () => {
  expect(removeAndReturnFirstN([1, 2, 3], 0)).to.deep.equal([]);
});

it("removeAndReturnFirstN([1, 2, 3, 4], 2) should modify the original array to [3, 4]", () => {
  let originalArray = [1, 2, 3, 4];
  removeAndReturnFirstN(originalArray, 2);
  expect(originalArray).to.deep.equal([3, 4]);
});

it("removeAndReturnFirstN(['x', 'y', 'z'], 1) should return ['x']", () => {
  expect(removeAndReturnFirstN(['x', 'y', 'z'], 1)).to.deep.equal(['x']);
});

it("removeAndReturnFirstN([1, 2], 3) should return [1, 2] and leave the original array empty", () => {
  let shortArray = [1, 2];
  expect(removeAndReturnFirstN(shortArray, 3)).to.deep.equal([1, 2]);
  expect(shortArray).to.deep.equal([]);
});

it("removeAndReturnFirstN([1, 2, 3], -1) should return []", () => {
  expect(removeAndReturnFirstN([1, 2, 3], -1)).to.deep.equal([]);
});

it("removeAndReturnFirstN([{ id: 1 }, { id: 2 }, { id: 3 }], 2) should return [{ id: 1 }, { id: 2 }]", () => {
  let objectsArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
  expect(removeAndReturnFirstN(objectsArray, 2)).to.deep.equal([{ id: 1 }, { id: 2 }]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
