// NAMEEN:
// NAMERU:Насколько подешевела машина за несколько лет

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `changePrice`, которая принимает параметры:
* объект `car` с информацией о машине,
* целое положительное число `year` – текущий год,
* целое положительное число `n` – на сколько подешевела машина за год.

В объекте `car` хранится информация о машине:
* `make` - марка автомобиля, строка,
* `model` - модель автомобиля, строка,
* `year` - год выпуска автомобиля, число,
* `color` - цвет автомобиля, строка,
* `price` - цена автомобиля, число.

Каждый год цена машины уменьшается на `n` долларов.


Функция должна вернуть строку вида:
'TOYOTA - CAMRY - 2020 - WHITE $60000'

Пример запуска функции:
```javascript
changePrice(
  { make: 'Toyota', model: 'Camry', year: 2010, color: 'red', price: 20000 },
  2015,
  1500
) // 'TOYOTA - CAMRY - 2010 - RED $12500'

changePrice(
  { make: 'Ford', model: 'Mustang', year: 2015, color: 'white', price: 60000 },
  2016,
  2500
) // 'FORD - MUSTANG - 2015 - WHITE $57500'
```

Ответ должен быть в верхнем регистре.

Если текущий год меньше года выпуска машины, то функция должна вернуть строку вида: `Current year is less than car year`

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function changePrice(car, year, n) {
  if (year < car.year) return 'Current year is less than car year';
  const price = car.price - (year - car.year) * n;
  return (
    car.make +
    ' - ' +
    car.model +
    ' - ' +
    car.year +
    ' - ' +
    car.color +
    ' $' +
    price
  ).toUpperCase();
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function changePrice', () => {
  expect(changePrice).to.be.a('function');
});

it('changePrice({ make: "Toyota", model: "Camry", year: 2010, color: "red", price: 20000 }, 2015, 1000) should return TOYOTA - CAMRY - 2010 - RED $15000', () => {
  expect(
    changePrice(
      { make: 'Toyota', model: 'Camry', year: 2010, color: 'red', price: 20000 },
      2015,
      1000,
    ),
  ).eq('TOYOTA - CAMRY - 2010 - RED $15000');
});

it('changePrice({ make: "Toyota", model: "Camry", year: 2020, color: "white", price: 40000 }, 2015, 2000) should return Current year is less than car year', () => {
  expect(
    changePrice(
      { make: 'Toyota', model: 'Camry', year: 2020, color: 'white', price: 40000 },
      2015,
      2000,
    ),
  ).eq('Current year is less than car year');
});

it('changePrice({ make: "Ford", model: "Mustang", year: 2015, color: "white", price: 60000 }, 2016, 2500) should return FORD - MUSTANG - 2015 - WHITE $57500', () => {
  expect(
    changePrice(
      { make: 'Ford', model: 'Mustang', year: 2015, color: 'white', price: 60000 },
      2016,
      2500,
    ),
  ).eq('FORD - MUSTANG - 2015 - WHITE $57500');
});

it('changePrice({ make: "Ford", model: "Mustang", year: 2015, color: "white", price: 60000 }, 2015, 2500) should return FORD - MUSTANG - 2015 - WHITE $60000', () => {
  expect(
    changePrice(
      { make: 'Ford', model: 'Mustang', year: 2015, color: 'white', price: 60000 },
      2015,
      2500,
    ),
  ).eq('FORD - MUSTANG - 2015 - WHITE $60000');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
