// NAMEEN:
// NAMERU:Транзакция с банковским счетом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `bankTransaction`, которая принимает два объекта: `client` и `transaction`.

Первый объект - это объект счета клиента, который содержит следующие свойства:
* `name` - имя владельца счета (string)
* `balance` - баланс счета (number)

Второй - это объект транзакции, который содержит следующие свойства:
* `type` - тип транзакции (string): `deposit` или `withdrawal`
* `amount` - сумма транзакции (number)

Если тип транзакции `deposit`, то функция должна добавить сумму транзакции к балансу и вернуть строку вида:
* `Success: John Smith has a balance of 7000`.

Если тип транзакции `withdrawal` и сумма транзакции меньше или равна балансу, то функция должна вычесть сумму
 транзакции из баланса и вернуть строку вида:
* `Success: John Smith has a balance of 3000`.

Если тип транзакции `withdrawal` и сумма транзакции больше баланса, то функция должна вернуть строку вида:
* `Error: John Smith has insufficient funds`.


Пример запуска функции:
```javascript
bankTransaction({ name: 'John Smith', balance: 5000 }, { type: 'deposit', amount: 2000 });
// "Success: John Smith has a balance of 7000"

bankTransaction({ name: 'John Smith', balance: 5000 }, { type: 'withdrawal', amount: 2000 });
// "Success: John Smith has a balance of 3000"

bankTransaction({ name: 'John Smith', balance: 5000 }, { type: 'withdrawal', amount: 6000 });
// "Error: John Smith has insufficient funds"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function bankTransaction(client, transaction) {
  if (transaction.type === 'deposit') {
    return `Success: ${client.name} has a balance of ${client.balance + transaction.amount}`;
  } else if (transaction.type === 'withdrawal' && transaction.amount > client.balance) {
    return `Error: ${client.name} has insufficient funds`;
  } else {
    return `Success: ${client.name} has a balance of ${client.balance - transaction.amount}`;
  }
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function bankTransaction', () => {
  expect(bankTransaction).to.be.a('function');
});

it('bankTransaction({ name: "John Smith", balance: 5000 }, { type: "deposit", amount: 2000 }) should return "Success: John Smith has a balance of 7000"', () => {
  expect(bankTransaction(
      { name: 'John Smith', balance: 5000 },
      { type: 'deposit', amount: 2000 }))
    .to.be.equal('Success: John Smith has a balance of 7000');
});

it('bankTransaction({ name: "Mike Gran", balance: 2000000 }, { type: "deposit", amount: 500155 }) should return "Success: Mike Gran has a balance of 2500155"', () => {
  expect(bankTransaction(
      { name: 'Mike Gran', balance: 2000000 },
      { type: 'deposit', amount: 500155 }))
    .to.be.equal('Success: Mike Gran has a balance of 2500155');
});

it('bankTransaction({ name: "John Smith", balance: 5000 }, { type: "withdrawal", amount: 2000 }) should return "Success: John Smith has a balance of 3000"', () => {
  expect(bankTransaction(
      { name: 'John Smith', balance: 5000 },
      { type: 'withdrawal', amount: 2000 }))
    .to.be.equal('Success: John Smith has a balance of 3000');
});

it('bankTransaction({ name: "Mike Gran", balance: 800000 }, { type: "withdrawal", amount: 54800 }) should return "Success: Mike Gran has a balance of 745200"', () => {
  expect(bankTransaction(
      { name: 'Mike Gran', balance: 800000 },
      { type: 'withdrawal', amount: 54800 }))
    .to.be.equal('Success: Mike Gran has a balance of 745200');
});

it('bankTransaction({ name: "John Smith", balance: 5000 }, { type: "withdrawal", amount: 6000 }) should return "Error: John Smith has insufficient funds"', () => {
  expect(bankTransaction(
      { name: 'John Smith', balance: 5000 },
      { type: 'withdrawal', amount: 6000 }))
    .to.be.equal('Error: John Smith has insufficient funds');
});

it('bankTransaction({ name: "John Smith", balance: 5000 }, { type: "withdrawal", amount: 6000 }) should return "Error: John Smith has insufficient funds"', () => {
  expect(bankTransaction(
      { name: 'John Smith', balance: 5000 },
      { type: 'withdrawal', amount: 6000 }))
    .to.be.equal('Error: John Smith has insufficient funds');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
