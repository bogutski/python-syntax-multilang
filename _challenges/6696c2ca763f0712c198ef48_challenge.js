// NAMEEN:
// NAMERU:Определить типы элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `typesOfElements`, которая принимает массив элементов произвольного типа.

Функция должна вернуть массив строк, в котором будут перечислены типы элементов исходного массива.

Например, массив `[1, 'a', true]` должен вернуть `['number', 'string', 'boolean']`.

Если массив пустой, то функция должна вернуть строку `'Array is empty'`.


Пример запуска функции:
```javascript
typesOfElements([123, 'test', true, null, undefined]); // ['number', 'string', 'boolean', 'object', 'undefined']
typesOfElements([[1, 2, 3], {a: 1, b: 2, c: 3}]);      // ['object', 'object']
typesOfElements([123, 'abc', false]);                  // ['number', 'string', 'boolean']
typesOfElements([true, false, true]);                  // ['boolean', 'boolean', 'boolean']
typesOfElements([]);                                   // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function typesOfElements(arr){
  if(!arr.length) return 'Array is empty';
  let types = [];
  for(let i = 0; i < arr.length; i++){
    types.push(typeof arr[i])
  }
  return types;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function typesOfElements', () => {
  expect(typesOfElements).to.be.a('function');
});

it("typesOfElements([123, 'test', true, null, undefined, {}, []]) should return ['number', 'string', 'boolean', 'object', 'undefined', 'object', 'object']", () => {
  expect(typesOfElements([123, 'test', true, null, undefined, {}, []])).to.eql(['number', 'string', 'boolean', 'object', 'undefined', 'object', 'object']);
});

it("typesOfElements([1, 2, 3, 'a', 'b', 'c']) should return ['number', 'number', 'number', 'string', 'string', 'string']", () => {
  expect(typesOfElements([1, 2, 3, 'a', 'b', 'c'])).to.eql(['number', 'number', 'number', 'string', 'string', 'string']);
});

it("typesOfElements([true, false, null, undefined, NaN]) should return ['boolean', 'boolean', 'object', 'undefined', 'number']", () => {
  expect(typesOfElements([true, false, null, undefined, NaN])).to.eql(['boolean', 'boolean', 'object', 'undefined', 'number']);
});

it("typesOfElements([[], {}, [1, 2, 3], {a: 1, b: 2, c: 3}]) should return ['object', 'object', 'object', 'object']", () => {
  expect(typesOfElements([[], {}, [1, 2, 3], {a: 1, b: 2, c: 3}])).to.eql(['object', 'object', 'object', 'object']);
});

it("typesOfElements([]) should return 'Array is empty'", () => {
  expect(typesOfElements([])).to.eql('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
