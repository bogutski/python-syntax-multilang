// NAMEEN:
// NAMERU:Преобразование объектов в массив строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `objectsToStrings`, которая принимает массив объектов и возвращает новый массив, содержащий строки, сформированные из значений объектов.

Каждый объект имеет одинаковые ключи: `{firstName: "John", lastName: "Doe", age: 30}`.

Используйте метод `map()` для создания массива строк, где каждая строка содержит значения объекта, разделенные пробелом.


Пример запуска функции:
```javascript
const people = [
  { firstName: "John", lastName: "Doe", age: 30 },
  { firstName: "Jane", lastName: "Doe", age: 25 },
  { firstName: "Emily", lastName: "Smith", age: 27 }
];
objectsToStrings(people); // [ 'John Doe 30', 'Jane Doe 25', 'Emily Smith 27' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function objectsToStrings(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function objectsToStrings(arr) {
  return arr.map(({firstName, lastName, age}) => firstName + ' ' + lastName + ' ' + age);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function objectsToStrings', () => {
  expect(objectsToStrings).to.be.a('function');
});

it('Function objectsToStrings should include method map()', () => {
  const res = objectsToStrings.toString()
  expect(res).to.include('.map(')
});

it("objectsToStrings([{ firstName: 'John', lastName: 'Doe', age: 30 }, { firstName: 'Jane', lastName: 'Doe', age: 25 }, { firstName: 'Emily', lastName: 'Smith', age: 27 }]) should return ['John Doe 30', 'Jane Doe 25', 'Emily Smith 27']", () => {
  const people = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "Jane", lastName: "Doe", age: 25 },
    { firstName: "Emily", lastName: "Smith", age: 27 }
  ];
  expect(objectsToStrings(people)).to.deep.equal(["John Doe 30", "Jane Doe 25", "Emily Smith 27"]);
});

it("objectsToStrings([]) should return []", () => {
  expect(objectsToStrings([])).to.deep.equal([]);
});

it("objectsToStrings([{ firstName: 'Single', lastName: 'Person', age: 40 }]) should return ['Single Person 40']", () => {
  expect(objectsToStrings([{ firstName: 'Single', lastName: 'Person', age: 40 }])).to.deep.equal(["Single Person 40"]);
});

it("objectsToStrings([{ firstName: 'No', lastName: 'Name', age: 0 }]) should return ['No Name 0']", () => {
  expect(objectsToStrings([{ firstName: 'No', lastName: 'Name', age: 0 }])).to.deep.equal(["No Name 0"]);
});

it("objectsToStrings([{ firstName: 'Alice', lastName: 'Wonderland', age: 28 }, { firstName: 'Bob', lastName: 'Marley', age: 32 }]) should return ['Alice Wonderland 28', 'Bob Marley 32']", () => {
  const people = [
    { firstName: "Alice", lastName: "Wonderland", age: 28 },
    { firstName: "Bob", lastName: "Marley", age: 32 }
  ];
  expect(objectsToStrings(people)).to.deep.equal(["Alice Wonderland 28", "Bob Marley 32"]);
});

it("objectsToStrings([{ firstName: 'Charlie', lastName: 'Brown', age: 10 }]) should return ['Charlie Brown 10']", () => {
  const kids = [{ firstName: "Charlie", lastName: "Brown", age: 10 }];
  expect(objectsToStrings(kids)).to.deep.equal(["Charlie Brown 10"]);
});

it("objectsToStrings([{ firstName: 'Dorothy', lastName: 'Gale', age: 16 }, { firstName: 'Toto', lastName: 'Dog', age: 4 }]) should return ['Dorothy Gale 16', 'Toto Dog 4']", () => {
  const characters = [
    { firstName: "Dorothy", lastName: "Gale", age: 16 },
    { firstName: "Toto", lastName: "Dog", age: 4 }
  ];
  expect(objectsToStrings(characters)).to.deep.equal(["Dorothy Gale 16", "Toto Dog 4"]);
});

it("objectsToStrings([{ firstName: 'Elsa', lastName: 'Snow', age: 21 }]) should return ['Elsa Snow 21']", () => {
  const princesses = [{ firstName: "Elsa", lastName: "Snow", age: 21 }];
  expect(objectsToStrings(princesses)).to.deep.equal(["Elsa Snow 21"]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
