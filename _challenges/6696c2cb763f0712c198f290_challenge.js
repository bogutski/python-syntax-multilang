// NAMEEN:
// NAMERU:Проверка типов в каждом подмассиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `typeOfEachInnerArray`, которая принимает массив массивов.

Функция должна возвращать массив подмассивов с булевыми значениями, где каждый подмассив соответствует вложенному массиву и указывает, содержит ли он элементы одного типа.

Если внешний массив пустой, то функция должна вернуть строку 'Array is empty'.

Например: `[ [1, 2], ['a', 'b'], [123, 'abc'] ]` должен вернуть `[ [true], [true], [false] ]`.

Потому что первый и второй подмассивы содержат элементы одного типа, а третий подмассив содержит элементы разных типов.

В функции три ошибки до цикла, которые нужно исправить.

Разберитесь в коде и перепишите его самостоятельно.


Примеры запуска функции:
```javascript
typeOfEachInnerArray([ ['1', '2'], [3, 5], [true, false] ]);                      // [[true], [true], [true]]
typeOfEachInnerArray([ [5, 'true'], ['test', 7], [null, 'null'] ]);               // [[false], [false], [false]]
typeOfEachInnerArray([ ['true', 'false'], [true, 5 > 10], [1, 2, 3, 4, null] ]);  // [[true], [true], [false]]
typeOfEachInnerArray([ ]);                                                        // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function typeOfEachInnerArray(arr){
  if(arr.length !== 0) 'Array is empty';
  let result = {};

  for(let i = 0; i < arr.length; i++){         // loop through outer array
    const type = typeof arr[i][0];             // get type of the first element in inner array

    for(let j = 1; j < arr[i].length; j++){    // loop through inner array
      if(typeof arr[i][j] !== type){           // if type of current element is not equal to type of the first element
        result.push([false]);                  // push [false] to result array
        break;                                 // break inner loop
      } else if(j === arr[i].length - 1){      // if we are on the last element in inner array
        result.push([true]);                   // push [true] to result array
      }
    }
  }

  return result;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function typeOfEachInnerArray(arr){
  if(arr.length === 0) return 'Array is empty';
  let result = [];

  for(let i = 0; i < arr.length; i++){
    const type = typeof arr[i][0];
    
    for(let j = 1; j < arr[i].length; j++){
      if(typeof arr[i][j] !== type){
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
it('Created function typeOfEachInnerArray', () => {
  expect(typeOfEachInnerArray).to.be.a('function');
});

it("typeOfEachInnerArray([ ['0', '1', '2'], [3, NaN, 5], [6, 7, 8, 9] ]) should return [[true], [true], [true]]", () => {
  expect(typeOfEachInnerArray([ ['0', '1', '2'], [3, NaN, 5], [6, 7, 8, 9] ])).to.be.deep.equal([[true], [true], [true]]);
});

it("typeOfEachInnerArray([ [5 > 3, 'true'], ['test', 'b', 7], [null, 'null'] ]) should return [[false], [false], [false]]", () => {
  expect(typeOfEachInnerArray([ [5 > 3, 'true'], ['test', 'b', 7], [null, 'null'] ])).to.be.deep.equal([[false], [false], [false]]);
});

it("typeOfEachInnerArray([ ['true', false], [true, 5 > 10], [1, 2, 3, 4, undefined] ]) should return [[false], [true], [false]]", () => {
  expect(typeOfEachInnerArray([ ['true', false], [true, 5 > 10], [1, 2, 3, 4, undefined] ])).to.be.deep.equal([[false], [true], [false]]);
});

it("typeOfEachInnerArray([ ['a', 'b'], [1, NaN], [true, false], [null, null], [{}, []] ]) should return [[true], [true], [true], [true], [true]]", () => {
  expect(typeOfEachInnerArray([ ['a', 'b'], [1, NaN], [true, false], [null, null], [{}, []] ])).to.be.deep.equal([[true], [true], [true], [true], [true]]);
});

it("typeOfEachInnerArray([ [5, 'a'], [null, undefined], [100, false], [NaN, true]) should return [[false], [false], [false], [false]]", () => {
  expect(typeOfEachInnerArray([ [5, 'a'], [null, undefined], [100, false], [NaN, true] ])).to.be.deep.equal([[false], [false], [false], [false]]);
});

it("typeOfEachInnerArray([]) should return 'Array is empty'", () => {
  expect(typeOfEachInnerArray([])).to.be.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
