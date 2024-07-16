// NAMEEN:
// NAMERU:Подсчет количества элементов разных типов в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countByType` принимает массив с разными типами данных.

Необходимо посчитать количество вхождений каждого элемента для трех типов данных `number`, `string` и `boolean`.

Элементы других типов данных не учитываются.

Функция должна вернуть массив с 4 элементами:
* объект
* массив всех чисел из первоначального массива,
* массив всех строк,
* массив всех boolean

Объект должен иметь следующую структуру:
* number: количество всех элементов чисел,
* string: количество всех элементов строк,
* boolean: количество всех элементов boolean

Исправьте ошибки в коде, чтобы функция работала правильно.

Постарайтесь понять код и повторить его.

Пример запуска функции:
```javascript
countByType([1, 2, 3, "a", "b", "c", true, false, true]) // [{number: 3, string: 3, boolean: 3}, [1, 2, 3], ["a", "b", "c"], [true, false, true]]
countByType([undefined, undefined, undefined]) // [{number: 0, string: 0, boolean: 0}, [], [], []]
countByType([1, 2, 3, false, true]) // [{number: 3, string: 0, boolean: 2}, [1, 2, 3], [], [false, true]]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function countByType([arr]) {
  const number=[empty];
  const string=[empty];
  const boolean=[empty];
  const obj = {};
  obj.number = 0;
  obj.string = 0;
  obj.boolean = 0;

  for (let i = 0, i <= arr.length, i+1) {

    if (typeof arr[i] = 'number') {
      number.push(arr[i]); obj[typeof arr[i]]++;
    } else if (typeof arr[i] = 'string') {
     obj[typeof arr[i]]++; string.push(arr[i])
    } else if (typeof arr[i] = 'boolean') {
    obj[typeof arr[i]]++; boolean.push(arr[i])
    }
  }
  return [obj, number, string, boolean];
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countByType(arr) {
  const number=[];
  const string=[];
  const boolean=[];
  const obj = {};
  obj.number = 0;
  obj.string = 0;
  obj.boolean = 0;

  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'number') {
      number.push(arr[i]); obj[typeof arr[i]]++;
    } else if (typeof arr[i] === 'string') {
      obj[typeof arr[i]]++; string.push(arr[i])
    } else if (typeof arr[i] === 'boolean') {
      obj[typeof arr[i]]++; boolean.push(arr[i])
    }
  }
  return [obj, number, string, boolean];
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countByType', () => {
  expect(countByType).to.be.a('function');
});

it('countByType([1, 2, 3, "a", "b", "c", true, false, true]) should return [{"boolean": 3, "number": 3, "string": 3}, [1, 2, 3], ["a", "b", "c"], [true, false, true]]', () => {
  expect(countByType([1, 2, 3, "a", "b", "c", true, false, true])).to.deep.equal([{"boolean": 3, "number": 3, "string": 3}, [1, 2, 3], ["a", "b", "c"], [true, false, true]]);
});

it('countByType([undefined, undefined, undefined]) should return [{number: 0, string: 0, boolean: 0}, [], [], []] ', () => {
  expect(countByType([undefined, undefined, undefined])).to.deep.equal([{number: 0, string: 0, boolean: 0}, [], [], []]);
});

it('countByType([]) should return [{number: 0, string: 0, boolean: 0}, [], [], []]', () => {
  expect(countByType([])).to.deep.equal([{number: 0, string: 0, boolean: 0}, [], [], []]);
});

it('countByType([1, 2, 3, false, true]) should return [{number: 3, string: 0, boolean: 2}, [1, 2, 3], [], [false, true]]', () => {
  expect(countByType([1, 2, 3, false, true])).to.deep.equal([{number: 3, string: 0, boolean: 2}, [1, 2, 3], [], [false, true]]);
});

it('countByType(["a", "b", "c"]) should return [{number: 0, string: 3, boolean: 0}, [], ["a", "b", "c"], []]', () => {
  expect(countByType(["a", "b", "c"])).to.deep.equal([{number: 0, string: 3, boolean: 0}, [], ["a", "b", "c"], []]);
});

it('countByType([true, false, true]) should return [{number: 0, string: 0, boolean: 3}, [], [], [true, false, true]]', () => {
  expect(countByType([true, false, true])).to.deep.equal([{number: 0, string: 0, boolean: 3}, [], [], [true, false, true]]);
});

it('countByType([1, 2, 3]) should return [{number: 3, string: 0, boolean: 0}, [1, 2, 3], [], []]', () => {
  expect(countByType([1, 2, 3])).to.deep.equal([{number: 3, string: 0, boolean: 0}, [1, 2, 3], [], []]);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
