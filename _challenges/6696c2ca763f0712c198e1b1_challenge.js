// NAMEEN:
// NAMERU:Применяем скидку к покупке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `discountPrint` принимает:

`clientName` - имя покупателя
`pricePerBox` - цена за одну коробку
`boxCount` - количество коробок

Функция должна вернуть строку вида:
`Hello Albert. Boxes: 5. Price: 100. Subtotal: 500. Discount: 4%. Total: 480.`

Дисконт должен быть применен к общей сумме покупки.

- `0%` - если сумма меньше 100
- `1%` - если сумма от 100  до 250
- `2%` - если сумма от 250 до 350
- `3%` - если сумма от 350 до 450
- `4%` - если сумма от 450


Для решения этой задачи действуйте по следующему алгоритму:
1. Высчитайте `subtotal` - общую сумму покупки, без учета скидки для этого умножьте `pricePerBox` на `boxCount`
2. Создайте переменную discount с начальным значением 0. `let discount = 0;`
3. Высчитайте `discount` - скидку в процентах для этого используйте условный оператор `if` и сравните `subtotal` с разными значениями

Пример сравнения:
```javascript
if (a < 10) discount = 5;
else if (a < 20) discount = 10;
else if (a < 30) discount = 15;
else discount = 20;

// Такой синтаксис допустим для однострочных действий
// Это то же самое что и:
if (a < 10) {
  discount = 5;
} else if (a < 20) {
  discount = 10;
} else if (a < 30) {
  discount = 15;
} else {
  discount = 20;
}

```

4. Высчитайте `total` - общую сумму покупки с учетом скидки `subtotal - (subtotal * discount / 100)`
5. Используйте конкатенацию для создания строки вида `Hello Albert. Boxes: 5. Price: 100. Subtotal: 500. Discount: 4%. Total: 480.` и верните ее из функции
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function discountPrint(clientName, pricePerBox, boxCount) {
  const subtotal = pricePerBox * boxCount;
  let discount = 0

  if (subtotal < 100) discount = 0;
  else if (subtotal < 250) discount = 1
  else if (subtotal < 350) discount = 2
  else if (subtotal < 450) discount = 3
  else discount = 4

  const total = subtotal - (subtotal * discount / 100);

  return `Hello ${clientName}. Boxes: ${boxCount}. Price: ${pricePerBox}. Subtotal: ${subtotal}. Discount: ${discount}%. Total: ${total}.`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function discountPrint', () => {
  expect(discountPrint).to.be.a('function');
});

it('discountPrint("Albert", 99, 1) returns "Hello Albert. Boxes: 1. Price: 99. Subtotal: 99. Discount: 0%. Total: 99."', () => {
  expect(discountPrint('Albert', 99, 1)).to.equal('Hello Albert. Boxes: 1. Price: 99. Subtotal: 99. Discount: 0%. Total: 99.');
} );

it('discountPrint("Tim", 100, 5) returns "Hello Tim. Boxes: 5. Price: 100. Subtotal: 500. Discount: 4%. Total: 480."', () => {
  expect(discountPrint('Tim', 100, 5)).to.equal('Hello Tim. Boxes: 5. Price: 100. Subtotal: 500. Discount: 4%. Total: 480.');
});

it('discountPrint("Alan", 249, 1) returns "Hello Alan. Boxes: 1. Price: 249. Subtotal: 249. Discount: 1%. Total: 246.51."', () => {
  expect(discountPrint('Alan', 249, 1)).to.equal('Hello Alan. Boxes: 1. Price: 249. Subtotal: 249. Discount: 1%. Total: 246.51.');
});

it('discountPrint("Ken", 250, 1) returns "Hello Ken. Boxes: 1. Price: 250. Subtotal: 250. Discount: 2%. Total: 245."', () => {
  expect(discountPrint('Ken', 250, 1)).to.equal('Hello Ken. Boxes: 1. Price: 250. Subtotal: 250. Discount: 2%. Total: 245.');
});

it('discountPrint("Bo", 349, 1) returns "Hello Bo. Boxes: 1. Price: 349. Subtotal: 349. Discount: 2%. Total: 342.02."', () => {
  expect(discountPrint('Bo', 349, 1)).to.equal('Hello Bo. Boxes: 1. Price: 349. Subtotal: 349. Discount: 2%. Total: 342.02.');
} );

it('discountPrint("Mike", 350, 1) returns "Hello Mike. Boxes: 1. Price: 350. Subtotal: 350. Discount: 3%. Total: 339.5."', () => {
  expect(discountPrint('Mike', 350, 1)).to.equal('Hello Mike. Boxes: 1. Price: 350. Subtotal: 350. Discount: 3%. Total: 339.5.');
} );

it('discountPrint("Gordon", 449, 1) returns "Hello Gordon. Boxes: 1. Price: 449. Subtotal: 449. Discount: 3%. Total: 435.53."', () => {
  expect(discountPrint('Gordon', 449, 1)).to.equal('Hello Gordon. Boxes: 1. Price: 449. Subtotal: 449. Discount: 3%. Total: 435.53.');
} );

it('discountPrint("Brian", 450, 1) returns "Hello Brian. Boxes: 1. Price: 450. Subtotal: 450. Discount: 4%. Total: 432."', () => {
  expect(discountPrint('Brian', 450, 1)).to.equal('Hello Brian. Boxes: 1. Price: 450. Subtotal: 450. Discount: 4%. Total: 432.');
} );

it('discountPrint("Bob", 5, 20) returns "Hello Bob. Boxes: 20. Price: 5. Subtotal: 100. Discount: 1%. Total: 99."', () => {
  expect(discountPrint('Bob', 5, 20)).to.equal('Hello Bob. Boxes: 20. Price: 5. Subtotal: 100. Discount: 1%. Total: 99.');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
