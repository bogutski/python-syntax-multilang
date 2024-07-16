// NAMEEN:
// NAMERU:Список покупок

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Нужно написать функцию `shoppingList`, которая принимает массив `items`.

Каждый элемент массива - это строка с названием продукта, который нужно купить.

Функция должна возвращать отформатированную строку со списком продуктов, разделенных символами переноса строки `\n`.

Строка должна начинаться с фразы - `Shopping list:`.

Перед каждым элементом списка нужно поставить символ переноса строки `\n` и дефис `-`.

Строка "Shopping list:\n-milk\n-eggs\n-bread" - это пример отформатированной строки.

Она будет выведена на консоль в следующем виде:

"Shopping list:
-milk
-eggs
-bread"

Примеры вызова функции:

```javascript
shoppingList(['milk', 'eggs', 'bread']); // "Shopping list:\n-milk\n-eggs\n-bread"
shoppingList(['apples']); // "Shopping list:\n-apples"
shoppingList([]); // "Shopping list:"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function shoppingList(items) {
  let str = "Shopping list:";
  for (let i = 0; i < items.length; i++) {
    str += '\n-'+items[i];
  }
  return str;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function shoppingList', () => {
  expect(shoppingList).to.be.a('function');
});

it('shoppingList(["milk", "eggs", "bread"]) should return "Shopping list:\\n-milk\\n-eggs\\n-bread"', () => {
  expect(shoppingList(["milk", "eggs", "bread"])).to.be.equal("Shopping list:\n-milk\n-eggs\n-bread");
});

it('shoppingList(["apples"]) should return "Shopping list:\\n-apples"', () => {
  expect(shoppingList(["apples"])).to.be.equal("Shopping list:\n-apples");
});

it('shoppingList([]) should return "Shopping list:"', () => {
  expect(shoppingList([])).to.be.equal("Shopping list:");
});

it('shoppingList(["sour cream", "cheese", "bread", "bananas", "orange juice", "cat food"]) should return "Shopping list:\\n-sour cream\\n-cheese\\n-bread\\n-bananas\\n-orange juice\\n-cat food"', () => {
  expect(shoppingList(["sour cream", "cheese", "bread", "bananas", "orange juice", "cat food"])).to.be.equal("Shopping list:\n-sour cream\n-cheese\n-bread\n-bananas\n-orange juice\n-cat food");
});

it('shoppingList(["tomatoes", "eggs", "corn", "celery"]) should return "Shopping list:\\n-tomatoes\\n-eggs\\n-corn\\n-celery"', () => {
  expect(shoppingList(["tomatoes", "eggs", "corn", "celery"])).to.be.equal("Shopping list:\n-tomatoes\n-eggs\n-corn\n-celery");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
