// NAMEEN:
// NAMERU:Проверка вложенных массивов на наличие отрицательных чисел

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllSubArraysNonNegative`, которая принимает массив.

Функция должна проверить только каждый подмассив на наличие негативных числ. Если негативные числа не были найдены, внутри подмассива, то функция возвращает строку вида: `No negative in subArrays` и 'Negative number was found' - в обратном случае.


Примеры запуска функции:
```javascript
areAllSubArraysNonNegative([[1, 2, 3], [-4, 5, 6], [7, 8, 9]]); // 'Negative number was found'
areAllSubArraysNonNegative([true, [6, 7, 8], 1, undefined, 4, 22, false]); // 'No negative in subArrays'
areAllSubArraysNonNegative([[1, 2, 3], NaN, ['Hello JS'], -7, [7, 8, 9], 10]); // 'No negative in subArrays'
areAllSubArraysNonNegative([-5, [1, NaN, 2, 3], null, 1, [4, 5, 6], [7, 8, 9]]); // 'No negative in subArrays'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllSubArraysNonNegative(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllSubArraysNonNegative(arr) {
  const result = arr.every(el => {

    if(Array.isArray(el)){

      for(let num of el){
        if(typeof num === 'number' && !isNaN(num)){
          if(num < 0) return false
        }
      }

    }

    return true
  })

  return result ? 'No negative in subArrays': 'Negative number was found';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllSubArraysNonNegative', () => {
  expect(areAllSubArraysNonNegative).to.be.a('function');
});

it('areAllSubArraysNonNegative([-5, [1, NaN, 2, 3], null, 1, [4, 5, 6], [7, 8, 9]]) should return "No negative in subArrays"', function() {
  expect(areAllSubArraysNonNegative([-5, [1, NaN, 2, 3], null, 1, [4, 5, 6], [7, 8, 9]])).to.equal('No negative in subArrays');
});

it('areAllSubArraysNonNegative([[1, 2, 3], [-4, 5, 6], [7, 8, 9]]) should return "Negative number was found"', function() {
  expect(areAllSubArraysNonNegative([[1, 2, 3], [-4, 5, 6], [7, 8, 9]])).to.equal('Negative number was found');
});

it('areAllSubArraysNonNegative([true, [6, 7, 8], 1, undefined, 4, 22, false]) should return "No negative in subArrays"', function() {
  expect(areAllSubArraysNonNegative([true, [6, 7, 8], 1, undefined, 4, 22, false])).to.equal('No negative in subArrays');
});

it('areAllSubArraysNonNegative([[1, 2, 3], NaN, ["Hello JS"], -7, [7, 8, 9], 10]) should return "No negative in subArrays"', function() {
  expect(areAllSubArraysNonNegative([[1, 2, 3], NaN, ["Hello JS"], -7, [7, 8, 9], 10])).to.equal('No negative in subArrays');
});

it('areAllSubArraysNonNegative([[], [0, 0, 0], [1, 2, 3]]) should return "No negative in subArrays"', function() {
  expect(areAllSubArraysNonNegative([[], [0, 0, 0], [1, 2, 3]])).to.equal('No negative in subArrays');
});

it('areAllSubArraysNonNegative([[1, 2, -3], [4, 5, 6], [7, 8, 9]]) should return "Negative number was found"', function() {
  expect(areAllSubArraysNonNegative([[1, 2, -3], [4, 5, 6], [7, 8, 9]])).to.equal('Negative number was found');
});

it('areAllSubArraysNonNegative([[0, 1, 2], [3, 4, 5], [6, 7, 8], []]) should return "No negative in subArrays"', function() {
  expect(areAllSubArraysNonNegative([[0, 1, 2], [3, 4, 5], [6, 7, 8], []])).to.equal('No negative in subArrays');
});

it('areAllSubArraysNonNegative([1, 2, 3, 4, 5, [], [NaN, undefined, false, null], null]) should return "No negative in subArrays"', function() {
  expect(areAllSubArraysNonNegative([1, 2, 3, 4, 5, [], [NaN, undefined, false, null], null])).to.equal('No negative in subArrays');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
