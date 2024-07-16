// NAMEEN:
// NAMERU:Сортировка городов по населению и названию

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortCities`, которая принимает массив объектов, представляющих города.

Каждый объект содержит свойства `name` (название города) и `population` (население города).

Функция должна возвращать новый массив, где города отсортированы сначала по населению (по убыванию), а при одинаковом населении — по названию города в алфавитном порядке.

Исходный массив должен оставаться неизменным.


Примеры запуска функции:
```javascript
console.log(sortCities([
  { name: "Smallville", population: 10000 },
  { name: "Metropolis", population: 1000000 },
  { name: "Gotham", population: 1000000 }
]));
// Вывод: [
//    { name: "Gotham", population: 1000000 },
//    { name: "Metropolis", population: 1000000 },
//    { name: "Smallville", population: 10000 }
// ]

console.log(sortCities([
  { name: "Springfield", population: 50000 },
  { name: "Shelbyville", population: 50000 }
]));
// Вывод: [
//    { name: "Shelbyville", population: 50000 },
//    { name: "Springfield", population: 50000 }
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortCities(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortCities(arr) {
  return arr.toSorted((a, b) => {
    if(a.population === b.population) return a.name.localeCompare(b.name)
    else return b.population - a.population
  });
}
// SOLUTIONEND


// OPENTESTSSTART
Array.prototype.toSorted = function(compareFunction){
  const newArray = this.slice()
  if(compareFunction) return newArray.sort(compareFunction)
  else return newArray.sort()
}

it('Created function sortCities', () => {
  expect(sortCities).to.be.a('function');
});

it('Function sortCities should include method toSorted()', () => {
  const res = sortCities.toString()
  expect(res).to.include('.toSorted(')
});

it('Function sortCities should not include method sort()', () => {
  const res = sortCities.toString()
  expect(res).to.not.include('.sort(')
});

it("sortCities([{ name: 'Smallville', population: 10000 }, { name: 'Metropolis', population: 1000000 }, { name: 'Gotham', population: 1000000 }]) should sort by population descending, then by name alphabetically", () => {
  expect(sortCities([
    { name: "Smallville", population: 10000 },
    { name: "Metropolis", population: 1000000 },
    { name: "Gotham", population: 1000000 }
  ])).to.deep.equal([
    { name: "Gotham", population: 1000000 },
    { name: "Metropolis", population: 1000000 },
    { name: "Smallville", population: 10000 }
  ]);
});

it("sortCities([{ name: 'Springfield', population: 50000 }, { name: 'Shelbyville', population: 50000 }]) should sort by name alphabetically when populations are equal", () => {
  expect(sortCities([
    { name: "Springfield", population: 50000 },
    { name: "Shelbyville", population: 50000 }
  ])).to.deep.equal([
    { name: "Shelbyville", population: 50000 },
    { name: "Springfield", population: 50000 }
  ]);
});

it("sortCities([]) should return an empty array", () => {
  expect(sortCities([])).to.deep.equal([]);
});

it("sortCities([{ name: 'Lonelytown', population: 1 }]) should return the same single-city array", () => {
  expect(sortCities([{ name: 'Lonelytown', population: 1 }])).to.deep.equal([{ name: 'Lonelytown', population: 1 }]);
});

it("sortCities([{ name: 'B', population: 200 }, { name: 'A', population: 300 }]) should return sorted by population then name", () => {
  expect(sortCities([
    { name: 'B', population: 200 },
    { name: 'A', population: 300 }
  ])).to.deep.equal([
    { name: 'A', population: 300 },
    { name: 'B', population: 200 }
  ]);
});

it("sortCities([{ name: 'A', population: 300 }, { name: 'A', population: 200 }]) should sort by population only", () => {
  expect(sortCities([
    { name: 'A', population: 300 },
    { name: 'A', population: 200 }
  ])).to.deep.equal([
    { name: 'A', population: 300 },
    { name: 'A', population: 200 }
  ]);
});

it("sortCities([{ name: 'C', population: 150 }, { name: 'B', population: 150 }, { name: 'A', population: 150 }]) should sort alphabetically when populations are the same", () => {
  expect(sortCities([
    { name: 'C', population: 150 },
    { name: 'B', population: 150 },
    { name: 'A', population: 150 }
  ])).to.deep.equal([
    { name: 'A', population: 150 },
    { name: 'B', population: 150 },
    { name: 'C', population: 150 }
  ]);
});

it("sortCities([{ name: 'A', population: 150 }, { name: 'a', population: 150 }]) should consider case sensitivity in alphabetical sorting", () => {
  expect(sortCities([
    { name: 'A', population: 150 },
    { name: 'a', population: 150 }
  ])).to.deep.equal([
    { name: 'a', population: 150 },
    { name: 'A', population: 150 }
  ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
