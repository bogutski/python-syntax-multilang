// NAMEEN:
// NAMERU:Универсальная сортировка массива объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortObjectsByKey`, которая принимает:

 * массив объектов,
 * ключ, по которому необходимо сортировать,
 * направление сортировки ("Ascending" или "Descending").

 Функция должна возвращать новый массив, содержащий объекты, отсортированные по указанному ключу в указанном направлении.


Примеры запуска функции:
```javascript
const items = [
  { name: "Table", price: 720 },
  { name: "Chair", price: 85 },
  { name: "Lamp", price: 35 }
];

console.log(sortObjectsByKey(items, 'price', 'Ascending'));
// Вывод: [{ name: "Lamp", price: 35 }, { name: "Chair", price: 85 }, { name: "Table", price: 720 }]

console.log(sortObjectsByKey(items, 'name', 'Descending'));
// Вывод: [{ name: "Table", price: 720 }, { name: "Chair", price: 85 }, { name: "Lamp", price: 35 }]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortObjectsByKey(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortObjectsByKey(arr, key, typeOfSort) {
  return arr.slice().sort((a, b) => {
    return typeOfSort === 'Ascending' ? a[key] - b[key] : b[key] - a[key]
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortObjectsByKey', () => {
  expect(sortObjectsByKey).to.be.a('function');
});

it('Function sortObjectsByKey should include method sort()', () => {
  const res = sortObjectsByKey.toString()
  expect(res).to.include('.sort(')
});

it('sortObjectsByKey should sort by price in ascending order', () => {
  const items = [
    { name: "Table", price: 720 },
    { name: "Chair", price: 85 },
    { name: "Lamp", price: 35 }
  ];
  expect(sortObjectsByKey(items, 'price', 'Ascending')).to.deep.equal([
    { name: "Lamp", price: 35 },
    { name: "Chair", price: 85 },
    { name: "Table", price: 720 }
  ]);
});

it('sortObjectsByKey should sort by name in descending order', () => {
  const items = [
    { name: "Table", price: 720 },
    { name: "Chair", price: 85 },
    { name: "Lamp", price: 35 }
  ];
  expect(sortObjectsByKey(items, 'name', 'Descending')).to.deep.equal([
    { name: "Table", price: 720 },
    { name: "Chair", price: 85 },
    { name: "Lamp", price: 35 }
  ]);
});

it('sortObjectsByKey with an empty array should return an empty array', () => {
  expect(sortObjectsByKey([], 'price', 'Ascending')).to.deep.equal([]);
});

it('sortObjectsByKey should handle non-existent keys gracefully', () => {
  const items = [
    { name: "Table", price: 720 },
    { name: "Chair", price: 85 },
    { name: "Lamp", price: 35 }
  ];
  expect(sortObjectsByKey(items, 'color', 'Ascending')).to.deep.equal(items);
});

it('sortObjectsByKey should not alter the original array', () => {
  const items = [
    { name: "Chair", price: 85 },
    { name: "Table", price: 720 },
    { name: "Lamp", price: 35 }
  ];
  sortObjectsByKey(items, 'price', 'Ascending');
  expect(items).to.deep.equal([
    { name: "Chair", price: 85 },
    { name: "Table", price: 720 },
    { name: "Lamp", price: 35 }
  ]);
});

it('sortObjectsByKey should correctly sort arrays with mixed data types for keys', () => {
  const items = [
    { name: "Book", price: "100" },
    { name: "Pen", price: 50 }
  ];
  expect(sortObjectsByKey(items, 'price', 'Ascending')[0].name).to.equal("Pen");
});

it('sortObjectsByKey should sort based on numeric values when key values are numbers', () => {
  const items = [
    { name: "Desk", height: 120 },
    { name: "Stool", height: 45 }
  ];
  expect(sortObjectsByKey(items, 'height', 'Descending')[0].name).to.equal("Desk");
});

it('sortObjectsByKey should treat numeric strings properly when direction is specified', () => {
  const items = [
    { name: "Laptop", weight: "2" },
    { name: "Monitor", weight: "10" }
  ];
  expect(sortObjectsByKey(items, 'weight', 'Descending')[0].name).to.equal("Monitor");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
