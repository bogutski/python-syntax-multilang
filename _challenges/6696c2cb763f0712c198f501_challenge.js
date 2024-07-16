// NAMEEN:
// NAMERU:Модификация массива с помощью объекта действий

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `modifyArray`, которая принимает массив `arr` и объект действий `obj`.

Объект действий может содержать ключи `add`, `delete`, и `update` для выполнения различных операций над массивом:

* `add`: Массив элементов, которые нужно добавить в конец массива: `{add: ['add1', 'add2', 'add3']}`.
* `delete`: Индекс (число) элемента в `arr`, который нужно удалить: `{delete: 1}`.
* `update`: Массив из двух массивов - индексов элементов, которые нужно обновить, и соответствующих им новых значений: `{update: [[1, 3], ['update1', 'update2']]}`.


Функция должна возвращать новый массив, полученный в результате применения всех указанных в объекте действий к исходному массиву, не изменяя его.


Примеры Запуска Функции:
```javascript
const modifier1 = {
  add: ['add1', 'add2', 'add3'],
  delete: 0,
  update: [[2, 3], ['update1', 'update2']]
}
console.log(modifyArray(['q', 'w', 'e', 'r', 't', 'y'], modifier1))
// ['w', 'e', 'update1', 'update2', 'y', 'add1', 'add2', 'add3']


const modifier2 = {
  delete: 2,
  update: [[0, 1, 3], ['update1', 'update2', 'update3']]
}
console.log(modifyArray([1, 2, 3, 4, 5], modifier2))
// ['update1', 'update2', 4, 'update3']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function modifyArray(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function modifyArray(arr, obj){
  let result = [...arr]

  if('add' in obj) result.push(...obj.add)
  if('delete' in obj) result.splice(obj.delete, 1)
  if('update' in obj) obj.update[0].forEach((el, index) => result = result.with(el, obj.update[1][index]))

  return result
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.with = function(index, value){
  const newArray = this.slice();
  newArray.splice(index, 1, value);
  return newArray;
}

it('Created function modifyArray', () => {
  expect(modifyArray).to.be.a('function');
});

it("Adding ['add1', 'add2', 'add3'] to ['q', 'w', 'e', 'r', 't', 'y'] should result in ['q', 'w', 'e', 'r', 't', 'y', 'add1', 'add2', 'add3']", function() {
  const modifier = { add: ['add1', 'add2', 'add3'] };
  expect(modifyArray(['q', 'w', 'e', 'r', 't', 'y'], modifier)).to.deep.equal(['q', 'w', 'e', 'r', 't', 'y', 'add1', 'add2', 'add3']);
});

it("Deleting index 0 from ['q', 'w', 'e', 'r', 't', 'y'] should result in ['w', 'e', 'r', 't', 'y']", function() {
  const modifier = { delete: 0 };
  expect(modifyArray(['q', 'w', 'e', 'r', 't', 'y'], modifier)).to.deep.equal(['w', 'e', 'r', 't', 'y']);
});

it("Updating indices [2, 3] in ['q', 'w', 'e', 'r', 't', 'y'] with ['update1', 'update2'] should result in ['q', 'w', 'update1', 'update2', 't', 'y']", function() {
  const modifier = { update: [[2, 3], ['update1', 'update2']] };
  expect(modifyArray(['q', 'w', 'e', 'r', 't', 'y'], modifier)).to.deep.equal(['q', 'w', 'update1', 'update2', 't', 'y']);
});

it("Combining add, delete, and update actions on ['q', 'w', 'e', 'r', 't', 'y'] should result in ['w', 'e', 'update1', 'update2', 'y', 'add1', 'add2', 'add3']", function() {
  const modifier = {
    add: ['add1', 'add2', 'add3'],
    delete: 0,
    update: [[2, 3], ['update1', 'update2']]
  };
  expect(modifyArray(['q', 'w', 'e', 'r', 't', 'y'], modifier)).to.deep.equal(['w', 'e', 'update1', 'update2', 'y', 'add1', 'add2', 'add3']);
});

it("Applying an empty modifier object to ['a', 'b', 'c'] should result in ['a', 'b', 'c']", function() {
  const modifier = {};
  expect(modifyArray(['a', 'b', 'c'], modifier)).to.deep.equal(['a', 'b', 'c']);
});

it("Adding ['new1'] and deleting index 1 in ['first', 'second', 'third'] should result in ['first', 'third', 'new1']", function() {
  const modifier = { add: ['new1'], delete: 1 };
  expect(modifyArray(['first', 'second', 'third'], modifier)).to.deep.equal(['first', 'third', 'new1']);
});

it("Updating index 1 in ['start', 'middle', 'end'] with ['center'] without adding or deleting should result in ['start', 'center', 'end']", function() {
  const modifier = { update: [[1], ['center']] };
  expect(modifyArray(['start', 'middle', 'end'], modifier)).to.deep.equal(['start', 'center', 'end']);
});

it("Deleting index 2 in ['one', 'two', 'three', 'four'] and adding ['five'] should result in ['one', 'two', 'four', 'five']", function() {
  const modifier = { add: ['five'], delete: 2 };
  expect(modifyArray(['one', 'two', 'three', 'four'], modifier)).to.deep.equal(['one', 'two', 'four', 'five']);
});

it("modifyArray(['a', 'b', 'c'], { update: [[0], ['w']] })should return ['w', 'b', 'c']", function() {
  const modifier = { update: [[0], ['w']] };
  expect(modifyArray(['a', 'b', 'c'], modifier)).to.deep.equal(['w', 'b', 'c']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
