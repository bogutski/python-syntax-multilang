// NAMEEN:
// NAMERU:Проверка типов элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllElTypesTheSame`, которая принимает массив с элементами одного и/или разных типов данных.

Функция должна вернуть `true`, если все элементы массива имеют один и тот же тип данных, и `false` - если разные.

Если массив пустой, то вернуть строку `'Array is empty'`.


Примеры запуска функции:
```javascript
areAllElTypesTheSame([1, 2, 3]);                // true
areAllElTypesTheSame(['3', '4', '5']);          // true
areAllElTypesTheSame(['2', 3, '4', 5]);         // false
areAllElTypesTheSame([undefined, false, null]); // false
areAllElTypesTheSame([]);                       // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllElTypesTheSame(arr)
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllElTypesTheSame(arr){
  if(!arr.length) return 'Array is empty';
  const typeOfFirstEl= typeof arr[0]
  for(let i = 1; i < arr.length; i++){
    if(typeof arr[i] !== typeOfFirstEl) return false;
  }
  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllElTypesTheSame', () => {
  expect(areAllElTypesTheSame).to.be.a('function');
});

it("areAllElTypesTheSame([1, 2, 3, 4, 5]) should return true", () => {
  expect(areAllElTypesTheSame([1, 2, 3, 4, 5])).to.be.true;
});

it("areAllElTypesTheSame(['1', '2', '3', '4', '5']) should return true", () => {
  expect(areAllElTypesTheSame(['1', '2', '3', '4', '5'])).to.be.true;
});

it("areAllElTypesTheSame([1, '2', 3, '4', 5]) should return false", () => {
  expect(areAllElTypesTheSame([1, '2', 3, '4', 5])).to.be.false;
});

it("areAllElTypesTheSame([NaN, 1, 2, 3]) should return true", () => {
  expect(areAllElTypesTheSame([NaN, 1, 2, 3])).to.be.true;
});

it("areAllElTypesTheSame([undefined, 25, true, 'string']) should return false", () => {
  expect(areAllElTypesTheSame([undefined, 25, true, 'string'])).to.be.false;
});

it("areAllElTypesTheSame([null, null, null, 'null']) should return false", () => {
  expect(areAllElTypesTheSame([null, null, null, 'null'])).to.be.false;
});

it("areAllElTypesTheSame([]) should return 'Array is empty'", () => {
  expect(areAllElTypesTheSame([])).to.be.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
