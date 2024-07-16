// NAMEEN:
// NAMERU:Поиск первого дубликата в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findFirstDuplicate`, которая принимает массив значений и возвращает первый элемент, который имеет дубликат в этом массиве.

Функция должна учитывать как числовые, так и строковые значения, которые нужно привести к одному регистру перед проверкой.

Если дубликатов нет, функция должна вернуть `null`.


Пример запуска функции:
```javascript
findFirstDuplicate([1, 2, 3, 4, 5]); // null
findFirstDuplicate([1, 2, 3, 4, 2]); // 2
findFirstDuplicate(['3', 'a', 4, 'B', 'C', 'HeLLo', 'A']); // 'a'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findFirstDuplicate(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findFirstDuplicate(arr) {
  const result = arr
      .map(el => {
        if(typeof el === 'string') return el.toLowerCase()
        else return el
      })
      .find((el, index, array) => array.indexOf(el, index + 1) !== -1)

  return result ? result : null;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findFirstDuplicate', () => {
  expect(findFirstDuplicate).to.be.a('function');
});

it("findFirstDuplicate([1, 2, 3, 4, 5]) should return null", () => {
  expect(findFirstDuplicate([1, 2, 3, 4, 5])).to.be.null;
});

it("findFirstDuplicate([1, 2, 3, 4, 2]) should return 2", () => {
  expect(findFirstDuplicate([1, 2, 3, 4, 2])).to.equal(2);
});

it("findFirstDuplicate(['3', 'a', 4, 'B', 'C', 'HeLLo', 'A']) should return 'a'", () => {
  expect(findFirstDuplicate(['3', 'a', 4, 'B', 'C', 'HeLLo', 'A'])).to.equal('a');
});

it("findFirstDuplicate(['a', 'b', 'c', 'a', 'd', 'e', 'f']) should return 'a'", () => {
  expect(findFirstDuplicate(['a', 'b', 'c', 'a', 'd', 'e', 'f'])).to.equal('a');
});

it("findFirstDuplicate(['a', 'b', 'c', 'd', 'e', 'f', 'a']) should return 'a'", () => {
  expect(findFirstDuplicate(['a', 'b', 'c', 'd', 'e', 'f', 'a'])).to.equal('a');
});

it("findFirstDuplicate(['a', 'b', 'c', 'd', 'e', 'f']) should return null", () => {
  expect(findFirstDuplicate(['a', 'b', 'c', 'd', 'e', 'f'])).to.be.null;
});

it("findFirstDuplicate([1, '2', 3, '4', 5]) should return null", () => {
  expect(findFirstDuplicate([1, '2', 3, '4', 5])).to.be.null;
});

it("findFirstDuplicate(['a', 'B', 'c', 'd', 'e', 'f', 'a']) should return 'a'", () => {
  expect(findFirstDuplicate(['a', 'B', 'c', 'd', 'e', 'f', 'a'])).to.equal('a');
});

it("findFirstDuplicate(['a', 'b', 'c', 'd', 'e', 'a', 'f']) should return 'a'", () => {
  expect(findFirstDuplicate(['a', 'b', 'c', 'd', 'e', 'a', 'f'])).to.equal('a');
});

it("findFirstDuplicate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a']) should return 'a'", () => {
  expect(findFirstDuplicate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a'])).to.equal('a');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
