// NAMEEN:
// NAMERU:Объединение информации из массива объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Разработайте функцию `mergeObjectInfo`, которая принимает массив объектов и возвращает строку, объединяющую информацию из всех объектов в формате "ключ: значение".

Ключи и значения каждого объекта должны быть разделены двоеточием и пробелом, а пары ключ-значение — запятой и пробелом.

Обратите внимание, пар "ключ: значение" может быть разное количество в объектах.

Используйте метод `forEach` для итерации по массиву и объектам.


Пример запуска функции:
```javascript
mergeObjectInfo([{ animal: 'dog' }, { item: 'ball' }]) // "animal: dog, item: ball"


const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 50 }
];
mergeObjectInfo(users); // "name: John, age: 30, name: Jane, age: 25, name: Doe, age: 50"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function mergeObjectInfo(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function mergeObjectInfo(arr) {
  let str = ''

  arr.forEach(obj => {
    const parsedObj = Object.keys(obj)

    parsedObj.forEach(key => {
      if(!str) str += key + ': ' + obj[key]
      else str += ', ' + key + ': ' + obj[key]
    })
  })

  return str;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function mergeObjectInfo', () => {
  expect(mergeObjectInfo).to.be.a('function');
});

it('Function mergeObjectInfo should include method forEach()', () => {
  const res = mergeObjectInfo.toString()
  expect(res).to.include('.forEach(')
});

it("mergeObjectInfo([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Doe', age: 50 }]) should return 'name: John, age: 30, name: Jane, age: 25, name: Doe, age: 50'", () => {
  expect(mergeObjectInfo([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 50 }
  ])).to.equal("name: John, age: 30, name: Jane, age: 25, name: Doe, age: 50");
});

it("mergeObjectInfo([]) should return an empty string", () => {
  expect(mergeObjectInfo([])).to.equal("");
});

it("mergeObjectInfo([{ key1: 'value1' }, { key2: 'value2' }]) should return 'key1: value1, key2: value2'", () => {
  expect(mergeObjectInfo([{ key1: 'value1' }, { key2: 'value2' }])).to.equal("key1: value1, key2: value2");
});

it("mergeObjectInfo([{ fruit: 'apple' }, { fruit: 'banana' }, { fruit: 'cherry' }]) should return 'fruit: apple, fruit: banana, fruit: cherry'", () => {
  expect(mergeObjectInfo([
    { fruit: "apple" },
    { fruit: "banana" },
    { fruit: "cherry" }
  ])).to.equal("fruit: apple, fruit: banana, fruit: cherry");
});

it("mergeObjectInfo([{ animal: 'dog' }, { item: 'ball' }]) should return 'animal: dog, item: ball'", () => {
  expect(mergeObjectInfo([{ animal: 'dog' }, { item: 'ball' }])).to.equal("animal: dog, item: ball");
});

it("mergeObjectInfo([{color: 'red'}, {color: 'green'}, {color: 'blue'}]) should return 'color: red, color: green, color: blue'", () => {
  expect(mergeObjectInfo([
    { color: "red" },
    { color: "green" },
    { color: "blue" }
  ])).to.equal("color: red, color: green, color: blue");
});

it("mergeObjectInfo([{id: 1, status: 'active'}, {id: 2, status: 'inactive'}]) should return 'id: 1, status: active, id: 2, status: inactive'", () => {
  expect(mergeObjectInfo([
    { id: 1, status: "active" },
    { id: 2, status: "inactive" }
  ])).to.equal("id: 1, status: active, id: 2, status: inactive");
});

it("mergeObjectInfo([{product: 'book', quantity: 3}, {product: 'pen', quantity: 10}]) should return 'product: book, quantity: 3, product: pen, quantity: 10'", () => {
  expect(mergeObjectInfo([
    { product: "book", quantity: 3 },
    { product: "pen", quantity: 10 }
  ])).to.equal("product: book, quantity: 3, product: pen, quantity: 10");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
