// NAMEEN:
// NAMERU:Удалить только дубликаты чисел из массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `deleteDuplicateNumber` принимает массив в качестве параметра. Массив может содержать числа и строки.

Функция должна вернуть новый массив, в котором удалены все дубликаты чисел. Дубликаты строк должны остаться неизменными.

Если в массиве есть не только числа, то они должны остаться на своих местах.

Не используйте метод `splice` для решения этой задачи.

Пример запуска функции:
```javascript
deleteDuplicateNumber([1, 2, 1, 4, 2, "hello", "hello"]) // [1, 2, 4, "hello", "hello"]
deleteDuplicateNumber([1, 2, 1, 4, 2, "hello", "hello", 1, 2, 1, 4, 2, "hello", "hello"]) // [1, 2, 4, "hello", "hello", "hello", "hello"]
deleteDuplicateNumber(["hello", "hello"]) // ["hello", "hello"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function deleteDuplicateNumber
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function deleteDuplicateNumber(arr) {
  const newArr = [];
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]] && typeof arr[i] === 'number') {
      obj[arr[i]] = 1;
      newArr.push(arr[i]);
    } else if (typeof arr[i] !== 'number') newArr.push(arr[i]);
  }
  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function deleteDuplicateNumber', () => {
  expect(deleteDuplicateNumber).to.be.a('function');
});

it('deleteDuplicateNumber does not include statement splice', () => {
  expect(deleteDuplicateNumber.toString().includes('splice')).to.equal(false);
});

it('deleteDuplicateNumber([1, 2, 1, 4, 2, "hello", "hello"]) should return [1, 2, 4, "hello", "hello"]', () => {
  expect(deleteDuplicateNumber([1, 2, 1, 4, 2, 'hello', 'hello'])).to.deep.equal([1, 2, 4, "hello", "hello"]);
});

it('deleteDuplicateNumber([1, 2, 1, 4, 2, "hello", "hello", 1, 2, 1, 4, 2, "hello", "hello"]) should return [1, 2, 4, "hello", "hello", "hello", "hello"]', () => {
  expect(deleteDuplicateNumber([1, 2, 1, 4, 2, 'hello', 'hello', 1, 2, 1, 4, 2, 'hello', 'hello'])).to.deep.equal([1, 2, 4, "hello", "hello", "hello", "hello"]);
});

it('deleteDuplicateNumber(["hello", "hello"]) should return ["hello", "hello"]', () => {
  expect(deleteDuplicateNumber(['hello', 'hello'])).to.deep.equal(["hello", "hello"]);
});

it('deleteDuplicateNumber([1, 2, 3]) should return [1, 2, 3]', () => {
  expect(deleteDuplicateNumber([1, 2, 3])).to.deep.equal([1, 2, 3]);
});

it('deleteDuplicateNumber([1, 2, 3, 1, 2, 3]) should return [1, 2, 3]', () => {
  expect(deleteDuplicateNumber([1, 2, 3, 1, 2, 3])).to.deep.equal([1, 2, 3]);
});

it('deleteDuplicateNumber([1, 1]) should return [1]', () => {
  expect(deleteDuplicateNumber([1, 1])).to.deep.equal([1]);
});

it('deleteDuplicateNumber([]) should return []', () => {
  expect(deleteDuplicateNumber([])).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
