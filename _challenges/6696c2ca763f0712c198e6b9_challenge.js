// NAMEEN:
// NAMERU:Покупки в интернет магазине. Проверка наличия денег

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Покупая в интернет магазине легко превысить лимит денег на счете.

Давайте оценим корзину, которую мы собрали в интернет магазине и проверим, хватит ли нам денег на покупки.

Напишите функцию `onlineOrder`, которая принимает четыре параметра:
* `product1` – объект, содержащий информацию о товаре
* `product2` – объект, содержащий информацию о товаре
* `product3` – объект, содержащий информацию о товаре
* `moneyAmount` – число, количество денег, которое есть у покупателя

Каждый объект из вышеперечисленных имеет следующую структуру:
* `name` – название товара, строка
* `price` – цена товара, число
* `quantity` – количество товара, число.

Если покупателю хватает денег на все товары, то функция должна вернуть строку `You can buy all products: product1,
 product2 and product3`.

Где `product1`, `product2`, `product3` – названия товаров, которые покупатель собирается купить.

Если денег не хватает на все товары, то функция должна вернуть строку `You don't have enough money for all products`


Пример запуска функции:
```javascript
onlineOrder({name: 'bread', price: 10, quantity: 2}, 
  {name: 'milk', price: 20, quantity: 1},
  {name: 'cheese', price: 30, quantity: 1},
  100) // `You can buy all products: bread, milk and cheese`

onlineOrder({name: 'socks', price: 40, quantity: 10},
  {name: 't-shirt', price: 700, quantity: 1},
  {name: 'pants', price: 1000, quantity: 1},
  500) // `You don't have enough money for all products`
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function onlineOrder(product1, product2, product3, moneyAmount) {
    const cost1 = product1.price * product1.quantity;
    const cost2 = product2.price * product2.quantity;
    const cost3 = product3.price * product3.quantity;
    if (moneyAmount >= (cost1 + cost2 + cost3)) {
        return `You can buy all products: ${product1.name}, ${product2.name} and ${product3.name}`;
    } else {
        return "You don't have enough money for all products";
    }
}
// SOLUTIONEND


// OPENTESTSSTART
it(`function onlineOrder`, () => {
    expect(onlineOrder).to.be.a('function');
});

it(`onlineOrder({name: 'bread', price: 10, quantity: 2}, {name: 'milk', price: 20, quantity: 1}, {name: 'cheese', price: 30, quantity: 1}, 100) should return 'You can buy all products: bread, milk and cheese'`, () => {
    expect(onlineOrder({name: 'bread', price: 10, quantity: 2}, {name: 'milk', price: 20, quantity: 1}, {name: 'cheese', price: 30, quantity: 1 }, 100)).eql('You can buy all products: bread, milk and cheese');
});

it(`onlineOrder({name: 'car', price: 1000, quantity: 1}, {name: 'piano', price: 700, quantity: 1}, {name: 'banana', price: 40, quantity: 10}, 2000) should return 'You don't have enough money for all products'`, () => {
    expect(onlineOrder({name: 'car', price: 1000, quantity: 1}, {name: 'piano', price: 700, quantity: 1 }, {name: 'banana', price: 40, quantity: 10}, 2000)).eql("You don't have enough money for all products");
});

it(`onlineOrder({name: 'car', price: 1000, quantity: 1}, {name: 'piano', price: 700, quantity: 1}, {name: 'banana', price: 40, quantity: 10}, 1500) should return 'You don't have enough money for all products'`, () => {
    expect(onlineOrder({name: 'car', price: 1000, quantity: 1}, {name: 'piano', price: 700, quantity: 1 }, {name: 'banana', price: 40, quantity: 10}, 1500)).eql("You don't have enough money for all products");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
