// NAMEEN:
// NAMERU:Проверка подмассивов на числа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllNumbers`, которая принимает массив массивов.

Функция должна возвращать массив массивов с булевыми значений, которые показывают, являются ли все элементы подмассива числами.

Например: `[ [1, 2], ['a', 'b'], [123, 741] ]` должен вернуть `[ [true], [false], [true] ]`.

Если внешний массив пустой, то функция должна вернуть строку 'Array is empty'.

Внутренние массивы не будут пустыми.


Примеры запуска функции:
```javascript
areAllNumbers([ ['1', '2'], [3, 5], [true, false] ]);           // [[false], [true], [false]]
areAllNumbers([ [5, 'true'], ['test', 7], [null, 'null'] ]);    // [[false], [false], [false]]
areAllNumbers([ [155, 0, 36], [-52, 5, 10], [1, -2, 3, -4] ]);  // [[true], [true], [true]]
areAllNumbers([ ]);                                             // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllNumbers(arr){
  if(!arr.length) return 'Array is empty';
  let result = [];

  for(let i = 0; i < arr.length; i++){

    for(let j = 0; j < arr[i].length; j++){
      if(typeof arr[i][j] !== 'number'){
        result.push([false]);
        break;
      } else if(j === arr[i].length - 1){
        result.push([true]);
      }
    }
  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllNumbers', () => {
  expect(areAllNumbers).to.be.a('function');
});

it("areAllNumbers([ [100, 639, 22147, 0], [3, NaN, 5], [6, 7, 8, 9] ]) should return [[true], [true], [true]]", () => {
  expect(areAllNumbers([ [100, 639, 22147, 0], [3, NaN, 5], [6, 7, 8, 9] ])).to.be.deep.equal([[true], [true], [true]]);
});

it("areAllNumbers([ [5 > 3, 'true'], ['test', 'b', 7], [null, 'null'] ]) should return [[false], [false], [false]]", () => {
  expect(areAllNumbers([ [5 > 3, 'true'], ['test', 'b', 7], [null, 'null'] ])).to.be.deep.equal([[false], [false], [false]]);
});

it("areAllNumbers([ ['true', false], [true, 5 > 10], [1, 2, 3, 4, undefined] ]) should return [[false], [false], [false]]", () => {
  expect(areAllNumbers([ ['true', false], [true, 5 > 10], [1, 2, 3, 4, undefined] ])).to.be.deep.equal([[false], [false], [false]]);
});

it("areAllNumbers([ ['a', 'b'], [1, NaN], [true, false], [null, null], [{}, []] ]) should return [[false], [true], [false], [false], [false]]", () => {
  expect(areAllNumbers([ ['a', 'b'], [1, NaN], [true, false], [null, null], [{}, []] ])).to.be.deep.equal([[false], [true], [false], [false], [false]]);
});

it("areAllNumbers([ [5, 'a'], [null, undefined], [100, false], [NaN, true]) should return [[false], [false], [false], [false]]", () => {
  expect(areAllNumbers([ [5, 'a'], [null, undefined], [100, false], [NaN, true] ])).to.be.deep.equal([[false], [false], [false], [false]]);
});

it("areAllNumbers([]) should return 'Array is empty'", () => {
  expect(areAllNumbers([])).to.be.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
