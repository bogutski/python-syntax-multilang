// NAMEEN:
// NAMERU:Проверить тип данных в двух массивах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sameTypeForAll`, которая принимает два массива.

Функция должна вернуть `true`, если все элементы обоих массивов имеют одинаковый тип данных. Иначе вернуть `false`.

Количество элементов в массивах не имеет значения, проверка должна быть только по типу данных.

Если оба массива пустые, то вернуть строку `'Both arrays are empty'`.


Примеры запуска функции:
```javascript
sameTypeForAll([true, false, true], [true, false, true]);         // true
sameTypeForAll([1, true, 3, false, 5], [1, 'true', 3, false, 5]); // false
sameTypeForAll([1, 2, 3], [-6, 0, 4]);                            // true
sameTypeForAll([], []);                                           // 'Both arrays are empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sameTypeForAll(arr1, arr2)
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sameTypeForAll(arr1, arr2){
  if(!arr1.length && !arr2.length) return 'Both arrays are empty';

  const bothArrays = [...arr1, ...arr2];
  const firstType = typeof bothArrays[0];
  
  for(let i = 1; i < bothArrays.length; i++){
    if(typeof bothArrays[i] !== firstType) return false;
  }

  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sameTypeForAll', () => {
  expect(sameTypeForAll).to.be.a('function');
});

it("sameTypeForAll([true, false, true], [true, false, true]) should return true", () => {
  expect(sameTypeForAll([true, false, true], [true, false, true])).to.be.true;
});

it("sameTypeForAll([1, true, 3, false, 5], [1, true, 3, false, 5]) should return false", () => {
  expect(sameTypeForAll([1, true, 3, false, 5], [1, true, 3, false, 5])).to.be.false;
});

it("sameTypeForAll([1, 2, 3], [NaN, 5, 0, 503, -69]) should return true", () => {
  expect(sameTypeForAll([1, 2, 3], [NaN, 5, 0, 503, -69])).to.be.true;
});

it("sameTypeForAll(['undefined', 'null', 'NaN'], ['string', 'here', '555']) should return true", () => {
  expect(sameTypeForAll(['undefined', 'null', 'NaN'], ['string', 'here', '555'])).to.be.true;
});

it("sameTypeForAll([false, 25 + 5 === 30, true, typeof 100 === 'number'], [true]) should return true", () => {
  expect(sameTypeForAll([false, 25 + 5 === 30, true, typeof 100 === 'number'], [true])).to.be.true;
});

it("sameTypeForAll([1, 10, 100], [0, 9, 99, null]) should return false", () => {
  expect(sameTypeForAll([1, 10, 100], [0, 9, 99, null])).to.be.false;
});

it("sameTypeForAll([], []) should return 'Both arrays are empty'", () => {
  expect(sameTypeForAll([], [])).to.be.equal('Both arrays are empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
