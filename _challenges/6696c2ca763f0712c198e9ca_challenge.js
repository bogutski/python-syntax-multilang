// NAMEEN:
// NAMERU:Удалите все строки из массива. Метод continue

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `deleteString` принимает массив в качестве параметра.

Массив может содержать числа и строки.

Необходимо удалить из массива все элементы, которые не являются числами. Используйте метод `continue` для пропуска итерации цикла.

Решение будет проверять на использование метода `continue`.

Функция должна вернуть обновленный массив.

Подсказка:
После того как удаляется элемент из массива, длина массива уменьшается на 1. Поэтому необходимо уменьшать индекс на 1, чтобы не пропустить элемент.

Пример запуска функции:
```javascript
deleteString([1, 'a', 'b', 2, 'c', 3]); // [1, 2, 3]
deleteString([1, 2, 3, false]); // [1, 2, 3]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deleteString(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') continue;
    arr.splice(i, 1);
    i--;
  }
  return arr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function deleteString', () => {
  expect(deleteString).to.be.a('function');
});

it('function deleteString should include continue', () => {
  expect(deleteString.toString().includes('continue')).to.be.true;
});

it('function deleteString([1, "a", "b", 2, "c", 3]) should return [1, 2, 3]', () => {
  expect(deleteString([1, "a", "b", 2, "c", 3])).to.be.eql([1, 2, 3]);
});

it('function deleteString([1, 2, 3]) should return [1, 2, 3]', () => {
  expect(deleteString([1, 2, 3])).to.be.eql([1, 2, 3]);
});

it('function deleteString([10, "zero", "null", 0, "c", 100, 77]) should return [10, 0, 100, 77]', () => {
  expect(deleteString([10, "zero", "null", 0, "c", 100, 77])).to.be.eql([10, 0, 100, 77]);
});

it('function deleteString(["1", "null", "hello", "false"]) should return []', () => {
  expect(deleteString(["1", "null", "hello", "false"])).to.be.eql([]);
});

it('function deleteString([1, 2, 3, "false", "true", 10, 10, "a"]) should return [1, 2, 3, 10, 10]', () => {
  expect(deleteString([1, 2, 3, "false", "true", 10, 10, "a"])).to.be.eql([1, 2, 3, 10, 10]);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
