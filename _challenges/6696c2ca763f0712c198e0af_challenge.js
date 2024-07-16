// NAMEEN:
// NAMERU:Расчет процентной прибыли или убытка от продажи

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
На вход функция `saleMargin` принимает два параметра:
 `costPrice` – цена закупки и `salePrice` – цена продажи.

Функция должна возвращать процентную прибыль или убыток от продажи в процентах в виде числа.

Примеры:
```javascript
saleMargin(100, 200); // 100
saleMargin(100, 150); // 50
saleMargin(10, 100); // 900
```

Используйте формулу: `(salePrice - costPrice) / costPrice * 100`

Пример:

Допустим, вы купили товар за 100 долларов, а продали его за 120 долларов.

Тогда: `(salePrice - costPrice) / costPrice * 100 = (120 - 100) / 100 * 100 = 20%`

Вы получили прибыль в размере 20% от стоимости товара для продавца.

Если бы вы продали товар за 90 долларов, то результат был бы:

`(salePrice - costPrice) / costPrice * 100 = (90 - 100) / 100 * 100 = -10%`

Вы потеряли бы 10% от стоимости товара для продавца, то есть понесли убыток.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function saleMargin(costPrice, salePrice) {
  return ((salePrice - costPrice) / costPrice) * 100;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function saleMargin', () => {
  expect(saleMargin).to.be.a('function');
});

it('saleMargin(100, 200) should return 100', () => {
  expect(saleMargin(100, 200)).to.be.equal(100);
});

it('saleMargin(100, 150) should return 50', () => {
  expect(saleMargin(100, 150)).to.be.equal(50);
});

it('saleMargin(10, 100) should return 900', () => {
  expect(saleMargin(10, 100)).to.be.equal(900);
});

it('saleMargin(100, 10) should return -90', () => {
  expect(saleMargin(100, 10)).to.be.equal(-90);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
