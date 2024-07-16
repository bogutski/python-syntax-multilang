// NAMEEN:
// NAMERU:Найти строку или булево значение в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findStringOrBoolean`, которая принимает массив.

Функция должна вернуть индекс последнего встречающегося в массиве элемента, который является строкой или булевым значением.

Если такого элемента нет, то функция должна вернуть строку `No string or boolean found`.

Пример запуска функции:
```javascript
findStringOrBoolean([true, 2, '3', 4, false]) // 4
findStringOrBoolean(['dev', 132, 'abc', 345]) // 2
findStringOrBoolean([1, 2, 3, 4, 5]) // 'No string or boolean found'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findStringOrBoolean(arr){
  for(let i = arr.length - 1; i >= 0; i--){
    if(typeof arr[i] === 'string' || typeof arr[i] === 'boolean') return i;
  }
  return 'No string or boolean found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findStringOrBoolean', () => {
  expect(findStringOrBoolean).to.be.a('function');
});

it('findStringOrBoolean([true, 2, 3, 4, false]) should return 4', () => {
  expect(findStringOrBoolean([true, 2, 3, 4, false])).to.be.equal(4);
});

it("findStringOrBoolean(['dev', 132, 'abc', 345]) should return 2", () => {
  expect(findStringOrBoolean(['dev', 132, 'abc', 345])).to.be.equal(2);
});

it("findStringOrBoolean([false, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return 0", () => {
  expect(findStringOrBoolean([false, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.equal(0);
});

it("findStringOrBoolean([11, 22, 33, 44, 55, 66, 77, 88, 99, 100]) should return 'No string or boolean found'", () => {
  expect(findStringOrBoolean([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])).to.be.equal('No string or boolean found');
});

it("findStringOrBoolean([]) should return 'No string or boolean found'", () => {
  expect(findStringOrBoolean([])).to.be.equal('No string or boolean found');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
