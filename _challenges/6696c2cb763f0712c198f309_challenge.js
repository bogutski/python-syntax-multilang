// NAMEEN:
// NAMERU:Создание и обновление рейтинга продуктов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `updateProductRatings` принимает массив рейтингов продуктов и массив обновлений.

Каждый элемент в массиве рейтингов — это объект со свойствами `product` и `rating`.

Пример: `[{product: "Apple", rating: 8}]`

Каждое обновление — это объект со свойствами `product` и `newRating`.

Пример: `[{product: "Apple", newRating: 4}]`

Функция должна обновить рейтинг продуктов на основе предоставленных обновлений. Если продукт в обновлениях не существует в рейтингах, его следует добавить.

Верните обновленный массив рейтингов.

Примеры запуска функции:
```javascript
updateProductRatings(
  [{product: "Apple", rating: 5}, {product: "Banana", rating: 3}],
  [{product: "Apple", newRating: 4}, {product: "Cherry", newRating: 5}]
)
// возвращает [{product: "Apple", rating: 4}, {product: "Banana", rating: 3}, {product: "Cherry", rating: 5}]

updateProductRatings(
  [{product: "Watermelon", rating: 2}],
  [{product: "Watermelon", newRating: 5}, {product: "Peach", newRating: 4}]
)
// возвращает [{product: "Watermelon", rating: 5}, {product: "Peach", rating: 4}]

updateProductRatings(
  [],
  [{product: "Grapes", newRating: 5}]
)
// возвращает [{product: "Grapes", rating: 5}]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function updateProductRatings(ratings, updates) {
  for(let newObj of updates){
    let needToAdd = true

    for(let originalObj of ratings){
      if(newObj.product === originalObj.product){
        originalObj.rating = newObj.newRating
        needToAdd = false
        break
      }
    }

    if(needToAdd) {
      const objToAdd = {product: newObj.product, rating: newObj.newRating}
      ratings.push(objToAdd)
    }

  }

  return ratings;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function updateProductRatings', () => {
  expect(updateProductRatings).to.be.a('function');
});

it('updateProductRatings updates existing product rating', () => {
  expect(updateProductRatings([{product: "Apple", rating: 5}], [{product: "Apple", newRating: 4}])).to.deep.equal([{product: "Apple", rating: 4}]);
});

it('updateProductRatings adds new product with its rating', () => {
  expect(updateProductRatings([{product: "Apple", rating: 5}], [{product: "Banana", newRating: 3}])).to.deep.equal([{product: "Apple", rating: 5}, {product: "Banana", rating: 3}]);
});

it('updateProductRatings handles multiple updates correctly', () => {
  expect(updateProductRatings(
      [{product: "Apple", rating: 5}, {product: "Banana", rating: 3}],
      [{product: "Apple", newRating: 4}, {product: "Cherry", newRating: 5}]
  )).to.deep.equal([{product: "Apple", rating: 4}, {product: "Banana", rating: 3}, {product: "Cherry", rating: 5}]);
});

it('updateProductRatings returns original ratings if no updates provided', () => {
  expect(updateProductRatings([{product: "Apple", rating: 5}], [])).to.deep.equal([{product: "Apple", rating: 5}]);
});

it('updateProductRatings updates all products if all have updates', () => {
  expect(updateProductRatings(
      [{product: "Apple", rating: 5}, {product: "Banana", rating: 3}],
      [{product: "Apple", newRating: 1}, {product: "Banana", newRating: 2}]
  )).to.deep.equal([{product: "Apple", rating: 1}, {product: "Banana", rating: 2}]);
});

it('updateProductRatings correctly handles an empty initial ratings array', () => {
  expect(updateProductRatings([], [{product: "Grapes", newRating: 5}])).to.deep.equal([{product: "Grapes", rating: 5}]);
});

it('updateProductRatings correctly updates a product to a lower rating', () => {
  expect(updateProductRatings([{product: "Mango", rating: 5}], [{product: "Mango", newRating: 3}])).to.deep.equal([{product: "Mango", rating: 3}]);
});

it('updateProductRatings maintains the order of products after updates', () => {
  const originalRatings = [{product: "Apple", rating: 5}, {product: "Banana", rating: 3}];
  const updates = [{product: "Banana", newRating: 5}, {product: "Apple", newRating: 4}];
  const updatedRatings = updateProductRatings(originalRatings, updates);
  expect(updatedRatings[0].product).to.equal("Apple");
  expect(updatedRatings[1].product).to.equal("Banana");
  expect(updatedRatings).to.deep.equal([{product: "Apple", rating: 4}, {product: "Banana", rating: 5}]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
