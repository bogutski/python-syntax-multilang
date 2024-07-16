// NAMEEN:
// NAMERU:Объект автомобиля

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `carCreate`, которая принимает четыре параметра:

* `brand` - строка, название марки автомобиля
* `model` - строка, название модели автомобиля
* `year` - число, год выпуска автомобиля
* `color` - строка, цвет автомобиля

Функция должна возвращать объект со свойствами:
* `brand` - название марки автомобиля. Удалите пробелы в начале и в конце строки.
* `model` - название модели автомобиля. Удалите пробелы в начале и в конце строки.
* `year` - год выпуска автомобиля
* `color` - цвет автомобиля. Удалите пробелы в начале и в конце строки, а также приведите к нижнему регистру.
* `code` - строка, состоящая из первых букв марки, модели, года и цвета автомобиля. Буквы должны быть в верхнем регистре.

Примеры запуска функции:
```javascript
carCreate(' Toyota   ', ' Camry  ', 2010, '  BLACK '); // { brand: 'Toyota', model: 'Camry', year: 2010, color: 'black', code: 'TC2010B' }
carCreate('   Nissan ', ' Almera ', 2015, ' White   '); // { brand: 'Nissan', model: 'Almera', year: 2015, color: 'white', code: 'NA2015W' }
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function carCreate(brand, model, year, color) {
  const b = brand.trim();
  const m = model.trim();
  const c = color.trim().toLowerCase();

  return {
    brand: b,
    model: m,
    year,
    color: c,
    code: (b[0] + m[0] + year + c[0]).toUpperCase(),
  };
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function carCreate', () => {
  expect(carCreate).to.be.a('function');
});

it('carCreate(" Toyota   ", " Camry  ", 2010, "  BLACK ") return { brand: "Toyota", model: "Camry", year: 2010, color: "black", code: "TC2010B" }', () => {
  expect(carCreate(' Toyota   ', ' Camry  ', 2010, '  BLACK ')).eql({
    brand: 'Toyota',
    model: 'Camry',
    year: 2010,
    color: 'black',
    code: 'TC2010B',
  });
});

it('carCreate("   Nissan ", " Almera ", 2015, " White   ") return { brand: "Nissan", model: "Almera", year: 2015, color: "white", code: "NA2015W" }', () => {
  expect(carCreate('   Nissan ', ' Almera ', 2015, ' White   ')).eql({
    brand: 'Nissan',
    model: 'Almera',
    year: 2015,
    color: 'white',
    code: 'NA2015W',
  });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
