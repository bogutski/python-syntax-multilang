// NAMEEN:
// NAMERU:Поиск дубликата последнего элемента в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `searchDuplicate` принимает массив `arr` в качестве параметра.

Необходимо проверить, является ли последний элемент массива дубликатом какого-либо из предыдущих элементов.

Для проверки найдите последний элемент массива, а затем используйте метод `lastIndexOf` для поиска предыдущего вхождения этого элемента в массив.

Функция должна вернуть строку:
`Last element is duplicate`, если последний элемент является дубликатом,
`Last element is not duplicate`, если последний элемент не является дубликатом

Пример запуска функции:
```javascript
searchDuplicate(['a', 'b', 'c', 'd', 'a']); // Last element is duplicate
searchDuplicate([35, 25, 15, 55, 45]); // Last element is not duplicate
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function searchDuplicate(arr) {
  const lastElement = arr[arr.length - 1];
  if (arr.lastIndexOf(lastElement, arr.length - 2) !== -1) {
    return 'Last element is duplicate';
  }
  return 'Last element is not duplicate';
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function searchDuplicate', () => {
  expect(searchDuplicate).to.be.a('function');
});

it(`searchDuplicate(['a', 'b', 'c', 'd', 'a']) should return "Last element is duplicate"`, () => {
  expect(searchDuplicate(['a', 'b', 'c', 'd', 'a'])).to.be.equal(
    'Last element is duplicate',
  );
});

it(`searchDuplicate([35, 25, 15, 55, 45]) should return "Last element is not duplicate"`, () => {
  expect(searchDuplicate([35, 25, 15, 55, 45])).to.be.equal(
    'Last element is not duplicate',
  );
});

it(`searchDuplicate(['Alice', 'Anna', 'Alisha', 'Amy', 'Amy']) should return "Last element is duplicate"`, () => {
  expect(searchDuplicate(['Alice', 'Anna', 'Alisha', 'Amy', 'Amy'])).to.be.equal(
    'Last element is duplicate',
  );
});

it(`searchDuplicate(['a', 'b', 'c', 'd', 'e']) should return "Last element is not duplicate"`, () => {
  expect(searchDuplicate(['a', 'b', 'c', 'd', 'e'])).to.be.equal(
    'Last element is not duplicate',
  );
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
