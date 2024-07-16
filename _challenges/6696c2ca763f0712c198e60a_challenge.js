// NAMEEN:
// NAMERU:Проверка типов данных и добавление свойств в объект

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addItems`, которая принимает четыре параметра:
* `firstName` - тип данных должен быть `string`,
* `lastName` - тип данных должен быть `string`,
* `age` - тип данных должен быть `number`,
* `isStudent` - тип данных должен быть `boolean`.


Функция должна вернуть новый объект, в который должны будут добавлены свойства, если они соответствуют типам данных,
указанным выше.
Если какое-либо из свойств не соответствует типу данных, то оно не должно быть добавлено в объект.
Если все свойства не соответствуют типу данных, то функция должна вернуть пустой объект.


Пример запуска функции:
```javascript
addItems('John', 'Doe', 25, true); // { firstName: "John", lastName: "Doe", age: 25, isStudent: true }
addItems(undefined, undefined, null, null); // {}
addItems('Angel', 'Fisk', null, null); // { firstName: "Angel", lastName: "Fisk" }
```

Аналогичный пример:
```javascript
function addItems(name, year, isOnSale) {
  const obj = {};
  if (typeof name === 'string') obj.name = name;
  if (typeof year === 'number') obj.year = year;
  if (typeof isOnSale === 'boolean') obj.isOnSale = isOnSale;
  return obj;
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addItems(firstName, lastName, age, isStudent) {
  const obj = {};
  if (typeof firstName === 'string') obj.firstName = firstName;
  if (typeof lastName === 'string') obj.lastName = lastName;
  if (typeof age === 'number') obj.age = age;
  if (typeof isStudent === 'boolean') obj.isStudent = isStudent;
  return obj;
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function addItems', () => {
  expect(addItems).to.be.a('function');
});

it('Function addItems returns object', () => {
  expect(addItems('John', 'Doe', 25, true)).to.be.a('object');
});

it('addItems("John", "Doe", 25, true) returns { firstName: "John", lastName: "Doe", age: 25, isStudent: true }', () => {
  expect(addItems('John', 'Doe', 25, true)).to.eql({
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    isStudent: true,
  });
});

it('addItems(undefined, undefined, null, null) returns {}', () => {
  expect(addItems(undefined, undefined, null, null)).to.eql({});
});

it('addItems("Jack", "Smith", 55, false) returns { firstName: "Jack", lastName: "Smith", age: 55, isStudent: false }', () => {
  expect(addItems(undefined, 'Smith', true, false)).to.eql({
    lastName: 'Smith',
    isStudent: false,
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
