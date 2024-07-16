// NAMEEN:
// NAMERU: Развертывание массива - 'spread' operator

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `spread`, которая принимает два массива и возвращает новый массив, состоящий из элементов первого и второго массива.

Используйте оператор `spread` для решения этой задачи.

Пример запуска функции:
```javascript
spread([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function spread(arr1, arr2) {
  return [...arr1, ...arr2];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function spread', () => {
  expect(spread).to.be.a('function');
});

it('spread([55, 66, 77], [88, 99, 100]) should return [55, 66, 77, 88, 99, 100]', () => {
  expect(spread([55, 66, 77], [88, 99, 100])).to.deep.equal([55, 66, 77, 88, 99, 100]);
});

it("spread(['Hello'], ['World']) should return ['Hello', 'World']", () => {
  expect(spread(['Hello'], ['World'])).to.deep.equal(['Hello', 'World']);
});

it('spread([1, 2, 3], [true, false, true]) should return [1, 2, 3, true, false, true]', () => {
  expect(spread([1, 2, 3], [true, false, true])).to.deep.equal([1, 2, 3, true, false, true]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
