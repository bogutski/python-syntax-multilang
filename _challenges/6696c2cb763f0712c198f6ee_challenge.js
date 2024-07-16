// NAMEEN:
// NAMERU:Фильтрация ресторанов по кухне и рейтингу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `filterRestaurants`, которая принимает массив объектов, представляющих рестораны, а также желаемый тип кухни и минимальный рейтинг.

Функция должна возвращать новый массив, содержащий только те рестораны, которые соответствуют указанной кухне и имеют рейтинг выше или равный минимальному.


Примеры запуска функции:
```javascript
const restaurants = [
  { name: "Chez Panisse", cuisine: "Mexican", rating: 3.9 },
  { name: "Shalimar", cuisine: "Indian", rating: 4.0 },
  { name: "La Taqueria", cuisine: "Mexican", rating: 4.5 },
  { name: "Pizzeria Delfina", cuisine: "Italian", rating: 4.1 }
];

console.log(filterRestaurants(restaurants, "Mexican", 4.0));
// Вывод: [{ name: "La Taqueria", cuisine: "Mexican", rating: 4.5 }]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function filterRestaurants(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function filterRestaurants(arr, type, minRating) {
  return arr.filter(({cuisine, rating}) => cuisine === type && rating >= minRating);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function filterRestaurants', () => {
  expect(filterRestaurants).to.be.a('function');
});

it("Function filterRestaurants should include filter method", () => {
  const result = filterRestaurants.toString();
  expect(result).to.include('.filter(');
});

it("filterRestaurants([{name: 'La Taqueria', cuisine: 'Mexican', rating: 4.5}], 'Mexican', 4.0) should return [{name: 'La Taqueria', cuisine: 'Mexican', rating: 4.5}]", () => {
  const restaurants = [
    { name: "La Taqueria", cuisine: "Mexican", rating: 4.5 }
  ];
  expect(filterRestaurants(restaurants, "Mexican", 4.0)).to.deep.equal([
    { name: "La Taqueria", cuisine: "Mexican", rating: 4.5 }
  ]);
});

it("filterRestaurants([{name: 'Shalimar', cuisine: 'Indian', rating: 4.0}], 'Indian', 4.0) should return [{name: 'Shalimar', cuisine: 'Indian', rating: 4.0}]", () => {
  const restaurants = [
    { name: "Shalimar", cuisine: "Indian", rating: 4.0 }
  ];
  expect(filterRestaurants(restaurants, "Indian", 4.0)).to.deep.equal([
    { name: "Shalimar", cuisine: "Indian", rating: 4.0 }
  ]);
});

it("filterRestaurants([], 'Italian', 4.0) should return []", () => {
  expect(filterRestaurants([], "Italian", 4.0)).to.deep.equal([]);
});

it("filterRestaurants([{name: 'Pizzeria Delfina', cuisine: 'Italian', rating: 3.9}], 'Italian', 4.0) should return []", () => {
  const restaurants = [
    { name: "Pizzeria Delfina", cuisine: "Italian", rating: 3.9 }
  ];
  expect(filterRestaurants(restaurants, "Italian", 4.0)).to.deep.equal([]);
});

it("filterRestaurants([{name: 'Chez Panisse', cuisine: 'French', rating: 4.5}], 'French', 4.5) should return [{name: 'Chez Panisse', cuisine: 'French', rating: 4.5}]", () => {
  const restaurants = [
    { name: "Chez Panisse", cuisine: "French", rating: 4.5 }
  ];
  expect(filterRestaurants(restaurants, "French", 4.5)).to.deep.equal([
    { name: "Chez Panisse", cuisine: "French", rating: 4.5 }
  ]);
});

it("filterRestaurants([{name: 'Pizzeria Delfina', cuisine: 'Italian', rating: 4.0}], 'Italian', 4.0) should return [{name: 'Pizzeria Delfina', cuisine: 'Italian', rating: 4.0}]", () => {
  const restaurants = [
    { name: "Pizzeria Delfina", cuisine: "Italian", rating: 4.0 }
  ];
  expect(filterRestaurants(restaurants, "Italian", 4.0)).to.deep.equal([
    { name: "Pizzeria Delfina", cuisine: "Italian", rating: 4.0 }
  ]);
});

it("filterRestaurants([{name: 'La Taqueria', cuisine: 'Mexican', rating: 3.9}], 'Mexican', 4.0) should return [] because the rating is below the threshold", () => {
  const restaurants = [
    { name: "La Taqueria", cuisine: "Mexican", rating: 3.9 }
  ];
  expect(filterRestaurants(restaurants, "Mexican", 4.0)).to.deep.equal([]);
});

it("filterRestaurants([{name: 'Chez Panisse', cuisine: 'French', rating: 4.5}, {name: 'Bistro Margot', cuisine: 'French', rating: 4.5}], 'French', 4.5) should return both restaurants as they meet the criteria", () => {
  const restaurants = [
    { name: "Chez Panisse", cuisine: "French", rating: 4.5 },
    { name: "Bistro Margot", cuisine: "French", rating: 4.5 }
  ];
  expect(filterRestaurants(restaurants, "French", 4.5)).to.deep.equal([
    { name: "Chez Panisse", cuisine: "French", rating: 4.5 },
    { name: "Bistro Margot", cuisine: "French", rating: 4.5 }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
