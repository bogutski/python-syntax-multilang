// NAMEEN:
// NAMERU:Найти длину массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `arrayLength`, которая принимает один параметр:
* `array` - массив элементов.

Используя свойство `length`, найдите длину массива.

Функция должна вернуть число, которое равно длине массива.

Пример запуска функции:
```javascript
arrayLength([1, 2, 3]) //3
```

Похожий пример:
```javascript
strLength('Hello, world!');// 13
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arrayLength(array) {
  return array.length;
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function arrayLength', () => {
  expect(arrayLength).to.be.a('function');
});

it('arrayLength([3, 4, 3]) should return 3', () => {
  expect(arrayLength([3, 4, 3])).to.equal(3);
});

it('arrayLength([5, 6, 7, 8, 9, 0, 3, 4, 1, 2]) should return 10', () => {
  expect(arrayLength([5, 6, 7, 8, 9, 0, 3, 4, 1, 2])).to.equal(10);
});

it('arrayLength([]) should return 0', () => {
  expect(arrayLength([])).to.equal(0);
});

it('arrayLength([1]) should return 1', () => {
  expect(arrayLength([1])).to.equal(1);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
