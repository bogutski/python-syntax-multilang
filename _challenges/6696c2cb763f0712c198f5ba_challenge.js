// NAMEEN:
// NAMERU:Фильтрация и объединение категорий продуктов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterAndFlattenCategories`, которая принимает массив объектов.

Каждый объект содержит ключ `categories`, который ассоциируется с массивом категорий (строк).

Функция должна вернуть массив всех категорий, у которых длина строки больше трех символов, в одном "разглаженном" массиве.

Используйте метод `flatMap()`.


Пример запуска функции:
```javascript
const products = [
  { categories: ['toy', 'games', 'books'] },
  { categories: ['food', 'drinks'] },
  { categories: ['electronics', 'apparel', 'toys'] }
];

console.log(filterAndFlattenCategories(products));
// Вывод: ['games', 'books', 'food', 'drinks', 'electronics', 'apparel', 'toys']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterAndFlattenCategories(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterAndFlattenCategories(arr) {
  const allCategories = arr.flatMap(({categories}) => categories)
  const res = [];

  allCategories.forEach(el => {
    if(el.length > 3) res.push(el)
  })

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterAndFlattenCategories', () => {
  expect(filterAndFlattenCategories).to.be.a('function');
});

it('Function filterAndFlattenCategories should include method flatMap()', () => {
  const res = filterAndFlattenCategories.toString()
  expect(res).to.include('.flatMap(')
});

it('filterAndFlattenCategories([{ categories: ["toys", "games", "books"] }, { categories: ["food", "drinks"] }, { categories: ["electronics", "apparel", "toys"] }]) should return ["toys", "games", "books", "food", "drinks", "electronics", "apparel", "toys"]', () => {
  const products = [
    { categories: ['toys', 'games', 'books'] },
    { categories: ['food', 'drinks'] },
    { categories: ['electronics', 'apparel', 'toys'] }
  ];
  expect(filterAndFlattenCategories(products)).to.deep.equal(['toys', 'games', 'books', 'food', 'drinks', 'electronics', 'apparel', 'toys']);
});

it('filterAndFlattenCategories([]) should return []', () => {
  expect(filterAndFlattenCategories([])).to.deep.equal([]);
});

it('filterAndFlattenCategories([{ categories: [] }, { categories: ["tea", "pi"] }]) should return []', () => {
  const products = [{ categories: [] }, { categories: ['tea', 'pi'] }];
  expect(filterAndFlattenCategories(products)).to.deep.equal([]);
});

it('filterAndFlattenCategories([{ categories: [] }, { categories: [] }]) should return []', () => {
  const products = [{ categories: [] }, { categories: [] }];
  expect(filterAndFlattenCategories(products)).to.deep.equal([]);
});

it('filterAndFlattenCategories([{ categories: ["cat"] }, { categories: ["dog"] }, { categories: ["fish"] }]) should return ["fish"]', () => {
  const products = [{ categories: ['cat'] }, { categories: ['dog'] }, { categories: ['fish'] }];
  expect(filterAndFlattenCategories(products)).to.deep.equal(['fish']);
});

it('filterAndFlattenCategories(large array of 1000 entries) should process correctly', () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({ categories: [`product${i}`, `item${i}`] }));
  const expectedResult = largeArray.flatMap(product => product.categories.filter(category => category.length > 3));
  expect(filterAndFlattenCategories(largeArray)).to.deep.equal(expectedResult);
});

it('filterAndFlattenCategories([{ categories: ["short", "longEnough", "tiny", "sufficient"] }]) should filter out short category names', () => {
  const products = [{ categories: ['short', 'longEnough', 'tiny', 'sufficient'] }];
  expect(filterAndFlattenCategories(products)).to.deep.equal(['short', 'longEnough', 'tiny', 'sufficient']);
});

it('filterAndFlattenCategories([{ categories: ["short", "tiny"] }, { categories: ["another", "mini", "array"] }]) should return ["short", "tiny", "another", "mini", "array"]', () => {
  const products = [{ categories: ['short', 'tiny'] }, { categories: ['another', 'mini', 'array'] }];
  expect(filterAndFlattenCategories(products)).to.deep.equal(['short', 'tiny', 'another', 'mini', 'array']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
