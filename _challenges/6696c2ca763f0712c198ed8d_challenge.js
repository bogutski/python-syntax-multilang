// NAMEEN:
// NAMERU:Найти одинаковые элементы в массиве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Написать функцию `doubleElement`, которая принимает массив со строками и возвращает `true`, если в массиве есть два
 одинаковых элемента и возвращает `false`, если таких элементов нет.

Если массив пустой, то функция должна вернуть `"No array - no work"`

Строки в массиве написаны в нижнем регистре и не имеют пробелов.

Для решения можно воспользоваться методом `indexOf()`.

Примеры запуска функции:
```javascript
doubleElement(['str', 'str']); // true
doubleElement(['one', 'two', 'three']); // false
doubleElement([]); // 'No array - no work'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleElement(arr) {
  if(arr.length === 0) return 'No array - no work';
  for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i], i+1) !== -1) return true;
  }
  return false;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleElement', () => {
  expect(doubleElement).to.be.a('function');
});

it("doubleElement(['str', 'str']) should return true", () => {
  expect(doubleElement(['str', 'str'])).true
});

it("doubleElement(['one', 'two', 'three']) should return false", () => {
  expect(doubleElement(['one', 'two', 'three'])).false
});

it("doubleElement(['one', 'two', 'three', 'one']) should return true", () => {
  expect(doubleElement(['one', 'two', 'three', 'one'])).true
});

it("doubleElement(['empty', '', '']) should return true", () => {
  expect(doubleElement(['empty', '', ''])).true
});

it("doubleElement([]) should return 'No array - no work'", () => {
  expect(doubleElement([])).to.equal('No array - no work')
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND