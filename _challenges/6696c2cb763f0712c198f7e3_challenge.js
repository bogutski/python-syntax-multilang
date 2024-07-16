// NAMEEN:
// NAMERU:Найти индекс элемента с определенным свойством в массиве объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findIndexByProperty`, которая принимает массив объектов, с ключом: `name` и значение свойства.

Функция должна вернуть индекс первого объекта, у которого значение свойства совпадает с переданным. Если такой объект не найден, функция должна вернуть строку вида: `Value was not found`.


Примеры запуска функции:
```javascript
findIndexByProperty([{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}], 'Bob'); // 1
findIndexByProperty([{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}, {name: 'Alice'}], 'Alice'); // 0
findIndexByProperty([{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}], 'David'); // "Value was not found"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findIndexByProperty(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findIndexByProperty(arr, element) {
  const res = arr.map(({name}) => name).indexOf(element);
  return res !== -1 ? res : 'Value was not found'
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findIndexByProperty', () => {
  expect(findIndexByProperty).to.be.a('function');
});

it("Function findIndexByProperty should include indexOf method", () => {
  const result = findIndexByProperty.toString();
  expect(result).to.include('.indexOf(');
});

it('findIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "Bob") should return 1', function() {
  expect(findIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "Bob")).to.equal(1);
});

it('findIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}, {name: "Alice"}], "Alice") should return 0', function() {
  expect(findIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}, {name: "Alice"}], "Alice")).to.equal(0);
});

it('findIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "David") should return "Value was not found"', function() {
  expect(findIndexByProperty([{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "David")).to.equal("Value was not found");
});

it('findIndexByProperty([{name: "John"}, {name: "Doe"}, {name: "Smith"}], "Smith") should return 2', function() {
  expect(findIndexByProperty([{name: "John"}, {name: "Doe"}, {name: "Smith"}], "Smith")).to.equal(2);
});

it('findIndexByProperty([{name: "John"}, {name: "Doe"}, {name: "Smith"}], "Jane") should return "Value was not found"', function() {
  expect(findIndexByProperty([{name: "John"}, {name: "Doe"}, {name: "Smith"}], "Jane")).to.equal("Value was not found");
});

it('findIndexByProperty([{name: "Tom"}, {name: "Jerry"}, {name: "Spike"}], "Jerry") should return 1', function() {
  expect(findIndexByProperty([{name: "Tom"}, {name: "Jerry"}, {name: "Spike"}], "Jerry")).to.equal(1);
});

it('findIndexByProperty([{name: "Anna"}, {name: "Elsa"}, {name: "Olaf"}], "Olaf") should return 2', function() {
  expect(findIndexByProperty([{name: "Anna"}, {name: "Elsa"}, {name: "Olaf"}], "Olaf")).to.equal(2);
});

it('findIndexByProperty([], "anything") should return "Value was not found"', function() {
  expect(findIndexByProperty([], "anything")).to.equal("Value was not found");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
