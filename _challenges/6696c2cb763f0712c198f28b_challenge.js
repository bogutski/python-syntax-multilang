// NAMEEN:
// NAMERU:Булевые значения

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `allBoolean`, которая принимает массив с элементами одного и/или разных типов данных.

Функция должна вернуть `true`, если все элементы массива имеют тип `boolean`, иначе вернуть `false`.

Если массив пустой, то вернуть строку `'Array is empty'`.


Примеры запуска функции:
```javascript
allBoolean([1, true, 3, false, 5]); // false
allBoolean([true, false, true]);    // true
allBoolean([true, undefined, NaN]); // false
allBoolean([0 < 5, false, 9 <= 1]); // true
allBoolean([]);                     // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function allBoolean(arr){
  if(!arr.length) return 'Array is empty';
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'boolean') return false;
  }
  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function allBoolean', () => {
  expect(allBoolean).to.be.a('function');
});

it("allBoolean([1, true, 3, false, 5]) should return false", () => {
  expect(allBoolean([1, true, 3, false, 5])).to.be.false;
});

it("allBoolean([true, false, true]) should return true", () => {
  expect(allBoolean([true, false, true])).to.be.true;
});

it("allBoolean([true, false, undefined, null]) should return false", () => {
  expect(allBoolean([true, false, undefined, null])).to.be.false;
});

it("allBoolean([NaN, 1, 2, 3]) should return false", () => {
  expect(allBoolean([NaN, 1, 2, 3])).to.be.false;
});

it("allBoolean([false, 25 + 5 === 30, true, typeof 100 === 'number']) should return true", () => {
  expect(allBoolean([false, 25 + 5 === 30, true, typeof 100 === 'number'])).to.be.true;
});

it("allBoolean([5 < 6]) should return true", () => {
  expect(allBoolean([5 < 6])).to.be.true;
});

it("allBoolean([]) should return 'Array is empty'", () => {
  expect(allBoolean([])).to.be.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
