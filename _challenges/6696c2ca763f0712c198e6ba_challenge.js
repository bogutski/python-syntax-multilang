// NAMEEN:
// NAMERU:Подтверждение заказа. Доставка или самовывоз

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `orderDelivery` принимает три параметра: объект `delivery`, `isDelivery` и `meridiem`.

`meridiem` - строка, которая может принимать значения `am` или `pm`.
`isDelivery` – флаг доставки, булево значение;

Объект `delivery` имеет следующую структуру:
* `address` – адрес доставки, строка;
* `date` – дата доставки, строка;
* `time` – время доставки, строка;

Если свойство `isDelivery` равно `true`, то функция должна вернуть строку вида: `Your order was delivered to New York on 01.01.2020 at 12:00 pm`, где:
* `New York` – это свойство `address`,
* `01.01.2020` – это свойство `date`,
* `12:00` – это свойство `time`,
* `pm` – это значение `meridiem`.

Если свойство `isDelivery` равно `false`, то функция должна вернуть строку вида: `Your order was picked up by courier at 8:00 am on 01.01.2020`, где:
* `8:00` – это свойство `time`,
* `am` – это значение `meridiem`,
* `01.01.2020` – это свойство `date`.

Пример запуска функции:
```javascript
orderDelivery({ orderNumber: 7987, address: 'New York', date: '01.01.2020', time: '12:00'}, 'true', 'pm' ); //
Your order 7987 was delivered to New York on 01.01.2020 at 12:00 pm
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function orderDelivery(delivery, isDelivery, meridiem) {
  if (isDelivery) {
    return `Your order was delivered to ${delivery.address} on ${delivery.date} at ${delivery.time} ${meridiem}`;
  } else {
    return `Your order was picked up by courier at ${delivery.time} ${meridiem} on ${delivery.date}`;
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function orderDelivery', () => {
  expect(orderDelivery).to.be.a('function');
});

it("orderDelivery({ address: 'New York', date: '01.01.2020', time: '12:00' }, 'true', 'pm') return Your order was delivered to New York on 01.01.2020 at 12:00 pm", () => {
    expect(orderDelivery({ address: 'New York', date: '01.01.2020', time: '12:00' }, true, 'pm')).eql('Your order was delivered to New York on 01.01.2020 at 12:00 pm');
});

it("orderDelivery({ address: 'Hong Kong', date: '15.13.2023', time: '06:00' }, false, 'am') return Your order was picked up by courier and will be delivered to to Hong Kong on 15.13.2023 at 06:00 am", () => {
    expect(orderDelivery({ address: 'Hong Kong', date: '15.13.2023', time: '06:00' }, false, 'am')).eql('Your order was picked up by courier at 06:00 am on 15.13.2023');
});

it("orderDelivery({ address: 'Paris', date: '01.01.2020', time: '12:00' }, 'true', 'pm') return Your order was delivered to Paris on 01.01.2020 at 12:00 pm", () => {
    expect(orderDelivery({ address: 'Paris', date: '01.01.2020', time: '12:00' }, true, 'pm')).eql('Your order was delivered to Paris on 01.01.2020 at 12:00 pm');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
