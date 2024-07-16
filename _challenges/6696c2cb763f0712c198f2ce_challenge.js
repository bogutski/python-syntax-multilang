// NAMEEN:
// NAMERU:Перечислить все элементы по типам данных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `elementListByType` принимает массив с разными типами данных и возвращает объект с тремя свойствами: `number`, `string` и `boolean`.

Элементы с другими типами данных не должны попасть в результирующий объект.

Каждое свойство содержит строку, в которой через пробел записаны все элементы массива соответствующего типа.

Если в массиве нет элементов соответствующего типа, то в свойстве должна быть пустая строка.

В конце каждой строки не должно быть пробела.

Примеры запуска функции:
```javascript
elementListByType([1, 2, 3, "a", "b", "c", true, false]) // {number: "1 2 3", string: "a b c", boolean: "true false"}
elementListByType([NaN, "", null, 2<1]) // {number: "NaN", string: "", boolean: "false"}
elementListByType([]) // {number: "", string: "", boolean: ""}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function elementListByType
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function elementListByType(arr) {
  const obj = {};
  obj.number = '';
  obj.string = '';
  obj.boolean = '';
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      obj.number += arr[i] + ' ';
    } else if (typeof arr[i] === 'string') {
      obj.string += arr[i] + ' ';
    } else if (typeof arr[i] === 'boolean') {
      obj.boolean += arr[i] + ' '
    }
  }
  obj.number = obj.number.trim();
  obj.string = obj.string.trim();
  obj.boolean = obj.boolean.trim();
  return obj;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function elementListByType', () => {
  expect(elementListByType).to.be.a('function');
});

it('elementListByType([1, 2, 3, "a", "b", "c", true, false]) should return {number: "1 2 3", string: "a b c", boolean: "true false"}', () => {
  expect(elementListByType([1, 2, 3, "a", "b", "c", true, false])).to.deep.equal({number: "1 2 3", string: "a b c", boolean: "true false"});
});

it('elementListByType([1, 2, 3, "a", "b", "c", true, false, 4, 5, 6, "d", "e", "f", true, false]) should return {number: "1 2 3 4 5 6", string: "a b c d e f", boolean: "true false true false"}', () => {
  expect(elementListByType([1, 2, 3, "a", "b", "c", true, false, 4, 5, 6, "d", "e", "f", true, false])).to.deep.equal({number: "1 2 3 4 5 6", string: "a b c d e f", boolean: "true false true false"});
});

it('elementListByType([NaN, "", null, 2<1]) should return {number: "NaN", string: "", boolean: "false"}', () => {
  expect(elementListByType([NaN, "", null, 2<1])).to.deep.equal({number: "NaN", string: "", boolean: "false"});
});

it('elementListByType([]) should return {number: "", string: "", boolean: ""}', () => {
  expect(elementListByType([])).to.deep.equal({number: "", string: "", boolean: ""});
});

it('elementListByType([2>1, 2<1, 2===2]) should return {number: "", string: "", boolean: "true false true"}', () => {
  expect(elementListByType([2>1, 2<1, 2===2])).to.deep.equal({number: "", string: "", boolean: "true false true"});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
