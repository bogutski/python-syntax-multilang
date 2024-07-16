// NAMEEN:
// NAMERU:Множественная условная сортировка с динамическими параметрами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `multiSort`, которая принимает массив объектов для сортировки и массив параметров сортировки.

Каждый элемент параметров сортировки представляет собой массив с тремя значениями:

 * Булево значение, указывающее, должен ли данный критерий использоваться для сортировки.
 * Строка, указывающая направление сортировки ('Ascending' или 'Descending').
 * Ключ объекта, по которому следует проводить сортировку.

Функция возвращает новый массив, содержащий объекты, отсортированные согласно указанным параметрам.

Если массив параметров сортировки пуст, функция возвращает строку: `Sorting parameters are empty`.


Примеры запуска функции:
```javascript
const items = [
  { name: "Table", weight: 34, price: 50 },
  { name: "Chair", weight: 10, price: 20 },
  { name: "Lamp", weight: 5, price: 50 }
];

const sortParams1 = [
  [true, 'Ascending', 'weight'],
  [true, 'Descending', 'price']
];

console.log(multiSort(items, sortParams1));
// Вывод: [
//   { name: 'Lamp', weight: 5, price: 50 },
//   { name: 'Table', weight: 34, price: 50 },
//   { name: 'Chair', weight: 10, price: 20 }
// ]


const sortParams2 = [];

console.log(multiSort(items, sortParams2));
// Вывод: "Sorting parameters are empty"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function multiSort(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function multiSort(arr, sortParam) {
  if(!sortParam.length) return 'Sorting parameters are empty'

  let res = [...arr]

  sortParam.forEach(el => {
    const [isTrue, type, key] = el

    if(isTrue) res.sort((a, b) => type === 'Ascending' ? a[key] - b[key] : b[key] - a[key])
  })

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function multiSort', () => {
  expect(multiSort).to.be.a('function');
});

it('Function multiSort should include method sort()', () => {
  const res = multiSort.toString()
  expect(res).to.include('.sort(')
});

it('multiSort should correctly apply multiple sorting parameters on numeric values', () => {
  const items = [
    { name: "Table", weight: 34, price: 50 },
    { name: "Chair", weight: 10, price: 20 },
    { name: "Lamp", weight: 5, price: 50 }
  ];
  const sortParams = [
    [true, 'Ascending', 'weight'],
    [true, 'Descending', 'price']
  ];
  expect(multiSort(items, sortParams)).to.deep.equal([
    { name: "Lamp", weight: 5, price: 50 },
    { name: "Table", weight: 34, price: 50 },
    { name: "Chair", weight: 10, price: 20 }
  ]);
});

it('multiSort should return an error message if the sorting parameters array is empty', () => {
  expect(multiSort([], [])).to.equal('Sorting parameters are empty');
});

it('multiSort should handle a single sorting criterion based on numeric values', () => {
  const items = [
    { name: "Lamp", weight: 5, price: 50 },
    { name: "Chair", weight: 10, price: 20 }
  ];
  const sortParams = [
    [true, 'Ascending', 'price']
  ];
  expect(multiSort(items, sortParams)[0].name).to.equal("Chair");
});

it('multiSort should handle sorting parameters that do not affect the order when false', () => {
  const items = [
    { name: "Lamp", weight: 5, price: 50 },
    { name: "Chair", weight: 10, price: 20 }
  ];
  const sortParams = [
    [false, 'Descending', 'price']
  ];
  expect(multiSort(items, sortParams)).to.deep.equal(items);
});

it('multiSort should preserve the original array', () => {
  const items = [
    { name: "Lamp", weight: 5, price: 50 },
    { name: "Chair", weight: 10, price: 20 }
  ];
  const originalItems = [...items];
  const sortParams = [
    [true, 'Ascending', 'price']
  ];
  multiSort(items, sortParams);
  expect(items).to.deep.equal(originalItems);
});

it('multiSort should correctly sort items when all elements are set to sort by the same criterion in descending order', () => {
  const items = [
    { name: "Monitor", weight: 27, price: 150 },
    { name: "Laptop", weight: 15, price: 120 }
  ];
  const sortParams = [
    [true, 'Descending', 'price']
  ];
  expect(multiSort(items, sortParams)[0].name).to.equal("Monitor");
});

it('multiSort should not change the array order when sorting by non-existent keys', () => {
  const items = [
    { name: "Desk", weight: 15 },
    { name: "Chair", weight: 10 }
  ];
  const sortParams = [
    [true, 'Ascending', 'height']  // 'height' does not exist in items
  ];
  expect(multiSort(items, sortParams)).to.deep.equal(items);
});

it('multiSort should sort based on a single numeric key when multiple criteria are provided but only one is active', () => {
  const items = [
    { name: "Desk", weight: 20 },
    { name: "Chair", weight: 10 }
  ];
  const sortParams = [
    [false, 'Ascending', 'price'],  // Inactive sorting by 'price'
    [true, 'Ascending', 'weight']   // Active sorting by 'weight'
  ];
  expect(multiSort(items, sortParams)[0].name).to.equal("Chair");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
