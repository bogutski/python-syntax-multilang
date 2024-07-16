// NAMEEN:
// NAMERU:Исправьте ошибки в коде

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `stopAt7` принимает один параметр - массив чисел `arr`.

Массив `arr` состоит как минимум из двух чисел.

Функция будет возвращать заполненный массив `arr2`.

Новый массив заполняется от `arr[0]` до `arr[arr.length - 1]`, включая эти значения.

Заполнение массива `arr2` должно прерваться если встречается цифра `7`.
Обратите внимание, что цифра `7` должна быть включена в массив `arr2` и после цикл должен быть прерван.

Например,

* если `arr = [2, 15]`, то `arr2 = [2, 3, 4, 5, 6, 7]`.

* если `arr = [0, 10, 15, 5]`, то `arr2 = [0, 1, 2, 3, 4, 5]`.


Исправьте ошибки в коде, чтобы он соответствовал условиям задачи.


Примеры запуска функции:
```javascript
stopAt7([2, 10, 15, 3]);     // [2, 3]
stopAt7([2, 15]);            // [2, 3, 4, 5, 6, 7]
stopAt7([2, 5, 34, 107, 8]); // [2, 3, 4, 5, 6, 7]
stopAt7([-2, 15]);           // [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
stopAt7([30, 20, 40]);       // [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function StopAt7(arr); {
  Let arr2 = [];
  for (let i = arr[1]; i = arr[arr.length - 1]; i++) {
    arr.push(i)
    if (i = 7) break[arr2];
  }
  return arr
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stopAt7(arr) {
  let arr2 = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    arr2.push(i)
    if (i === 7) break;
  }
  return arr2
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stopAt7', () => {
  expect(stopAt7).to.be.a('function');
});

it('stopAt7([2, 15]) should return [2, 3, 4, 5, 6, 7]', () => {
  expect(stopAt7([2, 15])).to.eql([2, 3, 4, 5, 6, 7]);
});

it('stopAt7([2, 10, 15, 3]) should return [2, 3]', () => {
  expect(stopAt7([2, 10, 15, 3])).to.eql([2, 3]);
});

it('stopAt7([2, 5, 34, 107, 8]) should return [2, 3, 4, 5, 6, 7]', () => {
  expect(stopAt7([2, 5, 34, 107, 8])).to.eql([2, 3, 4, 5, 6, 7]);
});

it('stopAt7([30, 20, 40]) should return [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]', () => {
  expect(stopAt7([30, 20, 40])).to.eql([30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]);
});

it('stopAt7([-2, 15]) should return [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]', () => {
  expect(stopAt7([-2, 15])).to.eql([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]);
});

it('stopAt7([-2, 0, 3, 7]) should return [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]', () => {
  expect(stopAt7([-2, 0, 3, 7])).to.eql([-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]);
});

it('stopAt7([1, -5]) should return []', () => {
  expect(stopAt7([1, -5])).to.eql([]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
