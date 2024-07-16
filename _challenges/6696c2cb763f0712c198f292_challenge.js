// NAMEEN:
// NAMERU:Проверка на строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте функцию `areAllElementsString`, которая принимает массив массивов.

Функция должна возвращать массив с булевыми значениями, где каждый элемент массива и/или внутреннего массива заменяется на тип данных boolean.

Возвращается `true` - если тип данных элемента `string`, `false` - в противном случае.

Например: `[ 'a', ['b', 'c'], 555 ]` =>  должно вернуть `[true, true, true, false]`.

Подмассив не создается отдельно, даже если элемент во внутреннем массиве.

Если внешний массив пустой, то функция должна вернуть строку 'Array is empty'.

В коде три ошибки, которые нужно исправить, все они до цикла.


Примеры запуска функции:
```javascript
areAllElementsString([ 'a', ['1', '2'], [3, 5], [true, false] ]); // [true, true, true false, false, false, false]
areAllElementsString([5, 'true', 'test', 7, [null, 'null'] ]);    // [false, true, true, false, false, true]
areAllElementsString([ [155, 0], [-52, 5, 10], [1, -2, -4] ]);    // [false, false, false, false, false, false, false]
areAllElementsString([ ]);                                        // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllElementsString(){
  if(arr.length === 1) return 'Array is empty';
  let result = {};

  for(let i = 0; i < arr.length; i++){                        // loop through the array
    if(typeof arr[i] === 'string') result.push(true)          // if element is string, push true to result array
    else if(typeof arr[i] !== 'object') result.push(false)    // if element is not an object, push false to result array
    else {                                                    // if element is an object

      for(let j = 0; j < arr[i].length; j++){                 // loop through the inner array
        if(typeof arr[i][j] === 'string') result.push(true);  // if element is string, push true to result array
        else result.push(false);                              // if element is not a string, push false to result array
      }

    }

  }

  return result;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllElementsString(arr){
  if(arr.length === 0) return 'Array is empty';
  let result = [];

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'string') result.push(true)
    else if(typeof arr[i] !== 'object') result.push(false)
    else {

      for(let j = 0; j < arr[i].length; j++){
        if(typeof arr[i][j] === 'string') result.push(true);
        else result.push(false);
      }

    }
    
  }

  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllElementsString', () => {
  expect(areAllElementsString).to.be.a('function');
});

it("areAllElementsString(['a', ['22147', '0'], ['3', 'NaN'], 'b', ['6', '7'], 'c']) should return [true, true, true, true, true, true, true, true, true]", () => {
  expect(areAllElementsString(['a', ['22147', '0'], ['3', 'NaN'], 'b', ['6', '7'], 'c'])).to.be.deep.equal([true, true, true, true, true, true, true, true, true]);
});

it("areAllElementsString([true, [5 > 3, true], 55, [null, undefined], 136]) should return [false, false, false, false, false, false, false]", () => {
  expect(areAllElementsString([true, [5 > 3, true], 55, [null, undefined], 136])).to.be.deep.equal([false, false, false, false, false, false, false]);
});

it("areAllElementsString([['true', false], 'abc', ['true', 5 > 10], [1, 2, 3, 4, undefined]]) should return [true, false, true, true, false, false, false, false, false, false]", () => {
  expect(areAllElementsString([['true', false], 'abc', ['true', 5 > 10], [1, 2, 3, 4, undefined]])).to.be.deep.equal([true, false, true, true, false, false, false, false, false, false]);
  });

it("areAllElementsString(['a', 'b', [1, NaN], [{}, []], 'test js']) should return [true, true, false, false, false, false, true]", () => {
  expect(areAllElementsString(['a', 'b', [1, NaN], [{}, []], 'test js'])).to.be.deep.equal([true, true, false, false, false, false, true]);
});

it("areAllElementsString([ [5, 'a'], [null, undefined], [100, false], [NaN, true]) should return [false, true, false, false, false, false, false, false]", () => {
  expect(areAllElementsString([ [5, 'a'], [null, undefined], [100, false], [NaN, true]])).to.be.deep.equal([false, true, false, false, false, false, false, false]);
});

it("areAllElementsString([]) should return 'Array is empty'", () => {
  expect(areAllElementsString([])).to.be.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
