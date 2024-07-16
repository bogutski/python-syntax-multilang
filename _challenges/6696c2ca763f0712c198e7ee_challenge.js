// NAMEEN:
// NAMERU:Добавление объекта в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addObject`, которая принимает массив `array`, содержащий 3 примитивных значения.

Функция должна создать объект с тремя свойствами `elm1`, `elm2`, `elm3`, которые будут равны соответствующим значениям из полученного массива, и добавить этот объект в конец массива `array`.

Функция должна вернуть измененный массив `array`.

Пример добавления объекта в массив:

```javascript
const array = [1, 3];
const obj = { elm1: array[0],
              elm2: array[1],
              sum: array[0] + array[1] };
array.push(obj);
console.log(array); // [1, 3, { elm1: 1, elm2: 3, sum: 4 }]
```

Примеры запуска функции:

```javascript
addObject([1, 2, 3]);           // [1, 2, 3, { elm1: 1, elm2: 2, elm3: 3 }]
addObject([5, true, 'color']);  // [5, true, 'color', { elm1: 5, elm2: true, elm3: 'color' }]
addObject(['', 'a', 'bb']);     // ['', 'a', 'bb', { elm1: '', elm2: 'a', elm3: 'bb' }]
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
functio
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addObject(array) {
  const obj = { elm1: array[0],
                elm2: array[1],
                elm3: array[2] };
  array.push(obj);
  return array;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function addObject', () => {
  expect(addObject).to.be.a('function');
});

it('Function addObject([1, 2, 3]) should return [1, 2, 3, { elm1: 1, elm2: 2, elm3: 3 }]', () => {
  expect(addObject([1, 2, 3])).eql([1, 2, 3, { elm1: 1, elm2: 2, elm3: 3 }]);
});

it('Function addObject([8, 104, -65]) should return [8, 104, -65, { elm1: 8, elm2: 104, elm3: -65 }]', () => {
  expect(addObject([8, 104, -65])).eql([8, 104, -65, { elm1: 8, elm2: 104, elm3: -65 }]);
});

it('Function addObject([true, 2.75, -3]) should return [true, 2.75, -3, { elm1: true, elm2: 2.75, elm3: -3 }]', () => {
  expect(addObject([true, 2.75, -3])).eql([true, 2.75, -3, { elm1: true, elm2: 2.75, elm3: -3 }]);
});

it("Function addObject([false, '0', true]) should return [false, '0', true, { elm1: false, elm2: '0', elm3: true }]", () => {
  expect(addObject([false, '0', true])).eql([false, '0', true, { elm1: false, elm2: '0', elm3: true }]);
});

it("Function addObject(['abc', '', undefined]) should return ['abc', '', undefined, { elm1: 'abc', elm2: '', elm3: undefined }]", () => {
  expect(addObject(['abc', '', undefined])).eql(['abc', '', undefined, { elm1: 'abc', elm2: '', elm3: undefined }]);
});

it("Function addObject(['abcdefg', 'cc', 'zero']) should return ['abcdefg', 'cc', 'zero', { elm1: 'abcdefg', elm2: 'cc', elm3: 'zero' }]", () => {
  expect(addObject(['abcdefg', 'cc', 'zero'])).eql(['abcdefg', 'cc', 'zero', { elm1: 'abcdefg', elm2: 'cc', elm3: 'zero' }]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
