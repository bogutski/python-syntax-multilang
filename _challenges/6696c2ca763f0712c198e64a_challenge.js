// NAMEEN:
// NAMERU:Заполнение образца чека. Объекты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Существует образец чека за покупку в магазине. Но он изменяется в зависимости от суммы покупки.

Напишите функцию `receipt`, которая принимает три параметра:
* `template` – объект, содержащий информацию о чеке
* `amount` – сумма покупки, число
* `number` – номер чека, число

Функция должна вернуть объект `template`, который имеет следующую структуру:
* `purchaseAmount` – сумма покупки равная параметру `amount`, число
* `receiptNumber` – номер чека равный параметру `number`, число
* `discount` – сумма скидки - необходимо вычислить
* `finalAmount` – итоговая сумма покупки, смотри условия ниже, число

Если сумма покупки `amount` больше или равна `1000`, то скидка составляет `10%` от суммы покупки.

Если сумма покупки меньше `1000`, то необходимо удалить свойство `discount` из объекта `template` и вместо него
добавить свойство `message` со значением `Thank you for your purchase!`.

Свойство `finalAmount` должно содержать итоговую сумму покупки.

Если скидка отсутствует, то итоговая сумма равна сумме покупки `purchaseAmount`.

Пример запуска функции:
```javascript
receipt({purchaseAmount: 0, receiptNumber: 0}, 1000, 1);
// {purchaseAmount: 1000, receiptNumber: 1, discount: 100, finalAmount: 900}

receipt({purchaseAmount: 0, receiptNumber: 0}, 100, 1);
// {purchaseAmount: 100, receiptNumber: 1, message: 'Thank you for your purchase!', finalAmount: 100}
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function receipt(template, amount, number) {
  if (amount >= 1000) {
    template.discount = amount * 0.1;
    template.finalAmount = amount - template.discount;
  } else {
    delete template.discount;
    template.message = 'Thank you for your purchase!';
    template.finalAmount = amount;
  }
  template.receiptNumber = number;
  template.purchaseAmount = amount;
  return template;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function receipt', () => {
  expect(receipt).to.be.a('function');
});

it('receipt({purchaseAmount: 0, receiptNumber: 0}, 1000, 1) // {purchaseAmount: 1000, receiptNumber: 1, discount: 100, finalAmount: 900}', () => {
  expect(receipt({ purchaseAmount: 0, receiptNumber: 0 }, 1000, 1)).to.deep.equal({
    purchaseAmount: 1000,
    receiptNumber: 1,
    discount: 100,
    finalAmount: 900,
  });
});

it('receipt({purchaseAmount: 0, receiptNumber: 0}, 100, 1) // {purchaseAmount: 100, receiptNumber: 1, message: Thank you for your purchase!, finalAmount: 100}', () => {
  expect(receipt({ purchaseAmount: 0, receiptNumber: 0 }, 100, 1)).to.deep.equal({
    purchaseAmount: 100,
    receiptNumber: 1,
    message: 'Thank you for your purchase!',
    finalAmount: 100,
  });
});

it('receipt({purchaseAmount: 0, receiptNumber: 0}, 2000, 14562) // {purchaseAmount: 2000, receiptNumber: 14562, discount: 200, finalAmount: 1800}', () => {
  expect(receipt({ purchaseAmount: 0, receiptNumber: 0 }, 2000, 14562)).to.deep.equal({
    purchaseAmount: 2000,
    receiptNumber: 14562,
    discount: 200,
    finalAmount: 1800,
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
