// NAMEEN:
// NAMERU:Сортировка пользователей по возрасту

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortUsersByAge`, которая принимает массив объектов.

Каждый из объектов представляет пользователя со свойствами: `name` и `age`.

Функция должна возвращать новый массив, где пользователи отсортированы по возрасту в порядке возрастания.

Исходный массив должен оставаться неизменным.


Примеры запуска функции:
```javascript
console.log(sortUsersByAge([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Clara", age: 28 }
]));
// Вывод: [
//    { name: "Alice", age: 25 },
//    { name: "Clara", age: 28 },
//    { name: "Bob", age: 30 }
// ]

console.log(sortUsersByAge([
  { name: "Tom", age: 31 },
  { name: "Jerry", age: 29 },
  { name: "Mike", age: 25 }
]));
// Вывод: [
//    { name: "Mike", age: 25 },
//    { name: "Jerry", age: 29 },
//    { name: "Tom", age: 31 }
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortUsersByAge(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortUsersByAge(arr) {
  return arr.toSorted((a, b) => a.age - b.age);
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSorted = function(compareFunction){
  const newArray = this.slice()
  if(compareFunction) return newArray.sort(compareFunction)
  else return newArray.sort()
}

it('Created function sortUsersByAge', () => {
  expect(sortUsersByAge).to.be.a('function');
});

it('Function sortUsersByAge should include method toSorted()', () => {
  const res = sortUsersByAge.toString()
  expect(res).to.include('.toSorted(')
});

it('Function sortUsersByAge should not include method sort()', () => {
  const res = sortUsersByAge.toString()
  expect(res).to.not.include('.sort(')
});

it("sortUsersByAge([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Clara', age: 28 }]) should return sorted by age", () => {
  expect(sortUsersByAge([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Clara", age: 28 }
  ])).to.deep.equal([
    { name: "Alice", age: 25 },
    { name: "Clara", age: 28 },
    { name: "Bob", age: 30 }
  ]);
});

it("sortUsersByAge([{ name: 'Tom', age: 31 }, { name: 'Jerry', age: 29 }, { name: 'Mike', age: 25 }]) should return sorted by age", () => {
  expect(sortUsersByAge([
    { name: "Tom", age: 31 },
    { name: "Jerry", age: 29 },
    { name: "Mike", age: 25 }
  ])).to.deep.equal([
    { name: "Mike", age: 25 },
    { name: "Jerry", age: 29 },
    { name: "Tom", age: 31 }
  ]);
});

it("sortUsersByAge([]) should return an empty array", () => {
  expect(sortUsersByAge([])).to.deep.equal([]);
});

it("sortUsersByAge([{ name: 'Sam', age: 35 }]) should return the same single-user array", () => {
  expect(sortUsersByAge([{ name: 'Sam', age: 35 }])).to.deep.equal([{ name: 'Sam', age: 35 }]);
});

it("sortUsersByAge([{ name: 'Anne', age: 22 }, { name: 'Anne', age: 22 }]) should return the array unchanged", () => {
  expect(sortUsersByAge([
    { name: 'Anne', age: 22 },
    { name: 'Anne', age: 22 }
  ])).to.deep.equal([
    { name: 'Anne', age: 22 },
    { name: 'Anne', age: 22 }
  ]);
});

it("sortUsersByAge([{ name: 'Zoe', age: 26 }, { name: 'Adam', age: 26 }]) should sort by age, names remain in original order", () => {
  expect(sortUsersByAge([
    { name: 'Zoe', age: 26 },
    { name: 'Adam', age: 26 }
  ])).to.deep.equal([
    { name: 'Zoe', age: 26 },
    { name: 'Adam', age: 26 }
  ]);
});

it("sortUsersByAge([{ name: 'Liam', age: 29 }, { name: 'Noah', age: 27 }, { name: 'Emma', age: 31 }]) should return sorted by age", () => {
  expect(sortUsersByAge([
    { name: 'Liam', age: 29 },
    { name: 'Noah', age: 27 },
    { name: 'Emma', age: 31 }
  ])).to.deep.equal([
    { name: 'Noah', age: 27 },
    { name: 'Liam', age: 29 },
    { name: 'Emma', age: 31 }
  ]);
});

it("sortUsersByAge([{ name: 'Oliver', age: 28 }, { name: 'Olivia', age: 28 }]) should return the array with the same order", () => {
  expect(sortUsersByAge([
    { name: 'Oliver', age: 28 },
    { name: 'Olivia', age: 28 }
  ])).to.deep.equal([
    { name: 'Oliver', age: 28 },
    { name: 'Olivia', age: 28 }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
