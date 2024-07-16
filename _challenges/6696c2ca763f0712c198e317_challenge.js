// NAMEEN:
// NAMERU:Закупка кофе для офиса на месяц

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В месяце 20 рабочих дней.

В среднем каждый сотрудник использует 100 грамм кофе в день.

Кофе продается пачками по 1 кг.

Напишите функцию `coffeeForOffice`, которая принимает параметры:
* `price` - цена за 1 кг кофе
* `employees` - количество сотрудников в офисе

Функция должна возвращать строку вида:
`You need to buy 7 kg of coffee. Price: $123`

Примеры запуска функции:
```javascript
coffeeForOffice(10, 5) // 'You need to buy 10 kg of coffee. Price: $100'
coffeeForOffice(15, 15) // 'You need to buy 30 kg of coffee. Price: $450'
coffeeForOffice(25, 30) // 'You need to buy 60 kg of coffee. Price: $1500'
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function coffeeForOffice(price, employees) {
  const kg = Math.ceil((employees * 20 * 100) / 1000);
  return `You need to buy ${kg} kg of coffee. Price: $${kg * price}`;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function coffeeForOffice', () => {
  expect(coffeeForOffice).to.be.a('function');
});

it('coffeeForOffice(10, 5) should return "You need to buy 10 kg of coffee. Price: $100"', () => {
  expect(coffeeForOffice(10, 5)).to.equal(
    'You need to buy 10 kg of coffee. Price: $100',
  );
});

it('coffeeForOffice(15, 15) should return "You need to buy 30 kg of coffee. Price: $450"', () => {
  expect(coffeeForOffice(15, 15)).to.equal(
    'You need to buy 30 kg of coffee. Price: $450',
  );
});

it('coffeeForOffice(25, 30) should return "You need to buy 60 kg of coffee. Price: $1500"', () => {
  expect(coffeeForOffice(25, 30)).to.equal(
    'You need to buy 60 kg of coffee. Price: $1500',
  );
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
