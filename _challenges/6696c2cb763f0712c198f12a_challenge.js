// NAMEEN:
// NAMERU:Удалить дубликат по id

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `onlyUnique` принимает массив объектов.

Объекты в массиве имеют вид:
*id,
*title,
*class,

Если объекты имеют одинаковый `id`, то они считаются одинаковыми даже если остальные свойства объекта отличаются и дубликат необходимо удалить.

Первое вхождение объекта (id) считается уникальным.

Функция должна вернуть массив объектов, в котором не будет дубликатов.

Примеры запуска функции:
```javascript
onlyUnique([{id: 2342, title: 'Sherlock Holmes', class: 'detective'}, {id: 2342, title: 'The lost Word', class: 'fantastic'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}])
//[{id: 2342, title: 'Sherlock Holmes', class: 'detective'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function onlyUnique(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i].id === arr[j].id){
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function onlyUnique', () => {
  expect(onlyUnique).to.be.a('function');
});

it("onlyUnique([{id: 2342, title: 'Sherlock Holmes', class: 'detective'}, {id: 2342, title: 'The lost Word', class: 'fantastic'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}]) should return [{id: 2342, title: 'Sherlock Holmes', class: 'detective'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}]", () => {
  expect(onlyUnique([{id: 2342, title: 'Sherlock Holmes', class: 'detective'}, {id: 2342, title: 'The lost Word', class: 'fantastic'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}])).to.deep.equal([{id: 2342, title: 'Sherlock Holmes', class: 'detective'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}]);
});

it("onlyUnique([{id: 2342, title: 'Sherlock Holmes', class: 'detective'}, {id: 4564, title: 'The lost Word', class: 'fantastic'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}]) should return [{id: 2342, title: 'Sherlock Holmes', class: 'detective'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}]", () => {
  expect(onlyUnique([{id:2342, title: 'Sherlock Holmes', class: 'detective'}, {id: 4564, title: 'The lost Word', class: 'fantastic'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}])).to.deep.equal([{id: 2342, title: 'Sherlock Holmes', class: 'detective'}, {id: 4564, title: 'The lost Word', class: 'fantastic'}, {id: 3453, title: 'The lost Word', class: 'fantastic'}]);
});

it("onlyUnique([]) should return []", () => {
  expect(onlyUnique([])).to.deep.equal([]);
});

it("onlyUnique([{id: 2342, title: 'Sherlock Holmes', class: 'detective'}]) should return [{id: 2342, title: 'Sherlock Holmes', class: 'detective'}]", () => {
  expect(onlyUnique([{id: 2342, title: 'Sherlock Holmes', class: 'detective'}])).to.deep.equal([{id: 2342, title: 'Sherlock Holmes', class: 'detective'}]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
