// NAMEEN:
// NAMERU:Попрошайка возле продавца хот-догов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Возле уличного продавца хот-догов стоит попрошайка.

Он просит у покупателей отдать ему монеты со сдачи.

Треть всех покупателей отдает ему монеты.

Нужно рассчитать заработок попрошайки за месяц.

Напишите функцию `monthCollected`.

Параметры:
* `customers` – количество покупателей в день
* `days` – количество дней, которое продавец работал в месяце
* `hotDogPrice` – цена хот-дога

* Заработок возможен только если цена хот-дога содержит дробную часть.
* Один человек покупает только один хот-дог.
* Покупатель передает продавцу только купюры без монет.

* Если цена хот-дога $1.65 то покупатель отдает $2 и получает сдачу $0.35.
* Если цена хот-дога $1.25 то покупатель отдает $2 и получает сдачу $0.75.
* Если цена хот-дога $1.00 то покупатель отдает $1 и получает сдачу $0.

Алгоритм расчета выполните по следующим шагам псевдокода:
```javascript
// Рассчитать количество хот-догов, которые продал продавец за месяц.
DEALS = CUSTOMERS * DAYS

//Рассчитать количество покупателей, которые отдали попрошайке монеты со сдачи.
CUSTOMERS_WITH_COINS = RoundDown(DEALS / 3)

// Рассчитать заработок попрошайки за одну сделку.
ONE_DEAL_PROFIT = RoundUp(HOT_DOG_PRICE) - HOT_DOG_PRICE

// Рассчитать заработок попрошайки за месяц.
MONTH_COLLECTED = RoundDown(CUSTOMERS_WITH_COINS * ONE_DEAL_PROFIT)
```

Псевдокод – это не код, а описание алгоритма в свободной форме без использования конкретного языка программирования.


Примеры запуска функции:
```javascript
monthCollected(70, 24, 1.15) // 476
monthCollected(100, 30, 1.65) // 350
monthCollected(100, 30, 1.25) // 750
monthCollected(100, 30, 1.00) // 0
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function monthCollected(customers, days, hotDogPrice) {
  const deals = customers * days;
  const customersWithCoins = Math.floor(deals / 3);
  const oneDealProfit = Math.ceil(hotDogPrice) - hotDogPrice;
  return Math.floor(customersWithCoins * oneDealProfit);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function monthCollected', () => {
  expect(monthCollected).to.be.a('function');
});

it('monthCollected(70, 24, 1.15) should return 476', () => {
  expect(monthCollected(70, 24, 1.15)).to.equal(476);
});

it('monthCollected(100, 30, 1.65) should return 350', () => {
  expect(monthCollected(100, 30, 1.65)).to.equal(350);
});

it('monthCollected(100, 30, 1.25) should return 750', () => {
  expect(monthCollected(100, 30, 1.25)).to.equal(750);
});

it('monthCollected(100, 30, 1.00) should return 0', () => {
  expect(monthCollected(100, 30, 1.0)).to.equal(0);
});

it('monthCollected(100, 30, 0.65) should return 350', () => {
  expect(monthCollected(100, 30, 0.65)).to.equal(350);
});

it('monthCollected(300, 28, 0.65) should return 979', () => {
  expect(monthCollected(300, 28, 0.65)).to.equal(979);
});

it('monthCollected(600, 29, 1.25) should return 4350', () => {
  expect(monthCollected(600, 29, 1.25)).to.equal(4350);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
