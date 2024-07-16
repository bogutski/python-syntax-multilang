// NAMEEN:
// NAMERU:Добавление или обновление элемента с проверкой на уникальность

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Разработайте функцию `addOrUpdateElement`, которая принимает три аргумента: массив `array`, индекс `index` для вставки или обновления элемента, и новое значение `newValue`.

Функция должна проверить, присутствует ли `newValue` уже в массиве:

* Если `newValue` не присутствует в массиве, функция должна заменить элемент на позиции `index` новым значением `newValue`, используя метод `with()`.
* Если `newValue` уже есть в массиве, функция должна добавить к `newValue` префикс `Copy - ` и заменить элемент на позиции `index` этим новым составным значением.

Функция должна возвращать новый массив с внесенными изменениями, не изменяя исходный массив.


Примеры использования функции:
```javascript
const originalArray = ['January', 'March', 'April', 'May'];
const newArray1 = addOrUpdateElement(originalArray, 1, 'February');
console.log(newArray1); // Вывод: ['January', 'February', 'April', 'May']

const newArray2 = addOrUpdateElement(originalArray, 2, 'March');
console.log(newArray2); // Вывод: ['January', 'March', 'copy - March', 'May']

const newArray3 = addOrUpdateElement(originalArray, 0, 'December');
console.log(newArray3); // Вывод: ['December', 'March', 'April', 'May']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addOrUpdateElement(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addOrUpdateElement(arr, i, newEl) {
  const elToAdd = arr.includes(newEl) ? 'Copy - ' + newEl : newEl
  return arr.with(i, elToAdd);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.with = function(index, value){
  const newArray = this.slice();
  newArray.splice(index, 1, value);
  return newArray;
}

it('Created function addOrUpdateElement', () => {
  expect(addOrUpdateElement).to.be.a('function');
});

it('Function addOrUpdateElement should include method with()', () => {
  const res = addOrUpdateElement.toString()
  expect(res).to.include('.with(')
});

it('updates element at index when newValue is not in the array', () => {
  const originalArray = ['January', 'March', 'April', 'May'];
  const result = addOrUpdateElement(originalArray, 1, 'February');
  expect(result).to.deep.equal(['January', 'February', 'April', 'May']);
});

it('adds prefix and updates element at index when newValue is in the array', () => {
  const originalArray = ['January', 'March', 'April', 'May'];
  const result = addOrUpdateElement(originalArray, 2, 'March');
  expect(result).to.deep.equal(['January', 'March', 'Copy - March', 'May']);
});

it('updates first element when index is 0 and newValue is new', () => {
  const originalArray = ['January', 'March', 'April', 'May'];
  const result = addOrUpdateElement(originalArray, 0, 'December');
  expect(result).to.deep.equal(['December', 'March', 'April', 'May']);
});

it('adds prefix and updates the last element when newValue is in the array', () => {
  const originalArray = ['January', 'February', 'March', 'April'];
  const result = addOrUpdateElement(originalArray, 3, 'January');
  expect(result).to.deep.equal(['January', 'February', 'March', 'Copy - January']);
});

it('correctly handles negative index to update element from the end', () => {
  const originalArray = ['Spring', 'Summer', 'Autumn', 'Winter'];
  const result = addOrUpdateElement(originalArray, -2, 'Monsoon');
  expect(result).to.deep.equal(['Spring', 'Summer', 'Monsoon', 'Winter']);
});

it('updates element at index 0 with a prefix when newValue is the first element', () => {
  const originalArray = ['Red', 'Green', 'Blue'];
  const result = addOrUpdateElement(originalArray, 0, 'Red');
  expect(result).to.deep.equal(['Copy - Red', 'Green', 'Blue']);
});

it('returns a new array with negative index', () => {
  const originalArray = ['Cat', 'Dog', 'Fish'];
  const result = addOrUpdateElement(originalArray, -3, 'Bird');
  expect(result).to.deep.equal(['Bird', 'Dog', 'Fish']);
});

it('does not modify the original array', () => {
  const originalArray = ['One', 'Two', 'Three'];
  addOrUpdateElement(originalArray, 1, 'Four');
  expect(originalArray).to.deep.equal(['One', 'Two', 'Three']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
