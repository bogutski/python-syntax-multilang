// NAMEEN:
// NAMERU:Какая пицца выгоднее? Объекты.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `comparePizzas`, которая принимает два объекта: `pizza1` и `pizza2`.

Каждый объект описывает пиццу. Объекты имеют следующие свойства:
* `name` - название пиццы, строка
* `diameter` - диаметр пиццы, число
* `price` - цена пиццы, число

Функция должна вернуть строку, которая описывает, какая пицца выгоднее.

* Если первая пицца выгоднее, то функция должна вернуть строку вида: `Pizza1Name is the better deal`
* Если вторая пицца выгоднее, то функция должна вернуть строку вида: `Pizza2Name is the better deal`
* Если пиццы стоят одинаково, то функция должна вернуть строку вида: `Both pizzas have the same price per square inch`

`Pizza1Name` и `Pizza2Name` - это строки, названия пицц, которые будут переданы в функцию внутри объектов.

Пример запуска функции:
```javascript
comparePizzas(
  { name: 'Margherita ', diameter: 20, price: 32 },
  { name: 'BBQ', diameter: 20, price: 32 }
) // 'Both pizzas have the same price per square inch'

comparePizzas(
  { name: 'Pepperoni', diameter: 20, price: 32 },
  { name: 'Neapolitan', diameter: 20, price: 40 }
) // 'Pepperoni is the better deal'

comparePizzas(
  { name: 'Sicilian', diameter: 20, price: 32 },
  { name: 'Hawaiian', diameter: 20, price: 20 }
) // 'Hawaiian is the better deal'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function comparePizzas(pizza1, pizza2) {
  // pizza { name: 'PizzaName', diameter: 20, price: 32  }
  if (pizza1.price / pizza1.diameter < pizza2.price / pizza2.diameter) {
    return pizza1.name + ' is the better deal';
  } else if (pizza1.price / pizza1.diameter > pizza2.price / pizza2.diameter) {
    return pizza2.name + ' is the better deal';
  } else {
    return 'Both pizzas have the same price per square inch';
  }
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function comparePizzas', () => {
  expect(comparePizzas).to.be.a('function');
});

it('comparePizzas({ name: "Pepperoni", diameter: 20, price: 32 }, { name: "Americana", diameter: 20, price: 32 }) should return "Both pizzas have the same price per square inch"', () => {
  expect(
    comparePizzas(
      { name: 'Pepperoni', diameter: 20, price: 32 },
      { name: 'Americana', diameter: 20, price: 32 },
    ),
  ).to.equal('Both pizzas have the same price per square inch');
});

it('comparePizzas({ name: "Pepperoni", diameter: 20, price: 32 }, { name: "Tomato", diameter: 20, price: 40 }) should return "Pepperoni is the better deal"', () => {
  expect(
    comparePizzas(
      { name: 'Pepperoni', diameter: 20, price: 32 },
      { name: 'Tomato', diameter: 20, price: 40 },
    ),
  ).to.equal('Pepperoni is the better deal');
});

it('comparePizzas({ name: "Marinara", diameter: 20, price: 32 }, { name: "Romana", diameter: 20, price: 20 }) should return "Romana is the better deal"', () => {
  expect(
    comparePizzas(
      { name: 'Marinara', diameter: 20, price: 32 },
      { name: 'Romana', diameter: 20, price: 20 },
    ),
  ).to.equal('Romana is the better deal');
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
