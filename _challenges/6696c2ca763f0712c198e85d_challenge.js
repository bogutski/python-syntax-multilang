// NAMEEN:
// NAMERU:Копирование массива по элементам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `copyElements`, которая принимает два массива: `arrFrom` и `arrTo`.

Функция должна скопировать первый и последний элементы из `arrFrom` в `arrTo` и вернуть `arrTo`.

Похожая функция:
```javascript
function copyElements(arr1, arr2) {
  arr2.push(arr1[0]);
  arr2.push(arr1[1]);
  arr2.push(arr1[3]);
  return arr2;
}
```

Пример запуска функции:
```javascript
copyElements([1, 2, 3, 4, 5], []) // [1, 5]
copyElements(['string', 1, 2, 3, 'number'], []) // ['string', 'number']
copyElements(['Hello'], []) // ['Hello', 'Hello']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function copyElements(arrFrom, arrTo) {
  arrTo.push(arrFrom[0]);
  arrTo.push(arrFrom[arrFrom.length - 1]);
  return arrTo;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function copyElements', () => {
  expect(copyElements).to.be.a('function');
});

it('copyElements([1, 2, 3, 4, 5], []) should return [1, 5]', () => {
  expect(copyElements([1, 2, 3, 4, 5], [])).to.deep.equal([1, 5]);
});

it("copyElements(['string', 1, 2, 3, 'number'], []]) should return ['string', 'number']]", () => {
  expect(copyElements(['string', 1, 2, 3, 'number'], [])).to.deep.equal(['string', 'number']);
});

it('copyElements([true], []) should return [true, true]', () => {
  expect(copyElements([true], [])).to.deep.equal([true, true]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
