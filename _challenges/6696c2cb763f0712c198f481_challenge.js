// NAMEEN:
// NAMERU:Форматирование информации о пользователях

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `formatUserInfo`, которая принимает массив объектов, где каждый объект представляет пользователя с ключами: `id`, `name`, и `email`.

Функция должна возвращать новый массив строк, где каждая строка содержит информацию о пользователе в формате: `ID: [id], Name: [name], Email: [email]`.

Используйте метод `map()` для этого преобразования.


Пример запуска функции:
```javascript
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" }
];

console.log(formatUserInfo(users));
// ["ID: 1, Name: Alice, Email: alice@example.com",
//  "ID: 2, Name: Bob, Email: bob@example.com",
//  "ID: 3, Name: Charlie, Email: charlie@example.com"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function formatUserInfo(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formatUserInfo(arr) {
  return arr.map(({id, name, email}) => `ID: ${id}, Name: ${name}, Email: ${email}`);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function formatUserInfo', () => {
  expect(formatUserInfo).to.be.a('function');
});

it('Function formatUserInfo should include method map()', () => {
  const res = formatUserInfo.toString()
  expect(res).to.include('.map(')
});

it("formatUserInfo([{ id: 1, name: 'Alice', email: 'alice@example.com' }, { id: 2, name: 'Bob', email: 'bob@example.com' }, { id: 3, name: 'Charlie', email: 'charlie@example.com' }]) should return ['ID: 1, Name: Alice, Email: alice@example.com', 'ID: 2, Name: Bob, Email: bob@example.com', 'ID: 3, Name: Charlie, Email: charlie@example.com']", () => {
  expect(formatUserInfo([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
  ])).to.deep.equal([
    "ID: 1, Name: Alice, Email: alice@example.com",
    "ID: 2, Name: Bob, Email: bob@example.com",
    "ID: 3, Name: Charlie, Email: charlie@example.com"
  ]);
});

it("formatUserInfo([]) should return []", () => {
  expect(formatUserInfo([])).to.deep.equal([]);
});

it("formatUserInfo([{ id: 4, name: 'Diana', email: 'diana@example.com' }]) should return ['ID: 4, Name: Diana, Email: diana@example.com']", () => {
  expect(formatUserInfo([{ id: 4, name: "Diana", email: "diana@example.com" }])).to.deep.equal(["ID: 4, Name: Diana, Email: diana@example.com"]);
});

it("formatUserInfo([{ id: 5, name: 'Evan', email: 'evan@example.com' }]) should return ['ID: 5, Name: Evan, Email: evan@example.com']", () => {
  expect(formatUserInfo([{ id: 5, name: "Evan", email: "evan@example.com" }])).to.deep.equal(["ID: 5, Name: Evan, Email: evan@example.com"]);
});

it("formatUserInfo([{ id: 6, name: 'Fiona', email: 'fiona@sample.com' }, { id: 7, name: 'George', email: 'george@sample.com' }]) should return ['ID: 6, Name: Fiona, Email: fiona@sample.com', 'ID: 7, Name: George, Email: george@sample.com']", () => {
  expect(formatUserInfo([
    { id: 6, name: "Fiona", email: "fiona@sample.com" },
    { id: 7, name: "George", email: "george@sample.com" }
  ])).to.deep.equal([
    "ID: 6, Name: Fiona, Email: fiona@sample.com",
    "ID: 7, Name: George, Email: george@sample.com"
  ]);
});

it("formatUserInfo([{ id: 8, name: 'Hannah', email: 'hannah@demo.com' }]) should return ['ID: 8, Name: Hannah, Email: hannah@demo.com']", () => {
  expect(formatUserInfo([{ id: 8, name: "Hannah", email: "hannah@demo.com" }])).to.deep.equal(["ID: 8, Name: Hannah, Email: hannah@demo.com"]);
});

it("formatUserInfo([{ id: 9, name: 'Ian', email: 'ian@demo.com' }, { id: 10, name: 'Jane', email: 'jane@demo.com' }]) should return ['ID: 9, Name: Ian, Email: ian@demo.com', 'ID: 10, Name: Jane, Email: jane@demo.com']", () => {
  expect(formatUserInfo([
    { id: 9, name: "Ian", email: "ian@demo.com" },
    { id: 10, name: "Jane", email: "jane@demo.com" }
  ])).to.deep.equal([
    "ID: 9, Name: Ian, Email: ian@demo.com",
    "ID: 10, Name: Jane, Email: jane@demo.com"
  ]);
});

it("formatUserInfo([{ id: 11, name: 'Kyle', email: 'kyle@info.com' }]) should return ['ID: 11, Name: Kyle, Email: kyle@info.com']", () => {
  expect(formatUserInfo([{ id: 11, name: "Kyle", email: "kyle@info.com" }])).to.deep.equal(["ID: 11, Name: Kyle, Email: kyle@info.com"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
