// NAMEEN:
// NAMERU:Добавление предметов в рюкзак

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `packBackpack`, которая принимает два аргумента: исходный массив с вещами, уже упакованными в рюкзак, и массив новых предметов для путешествия.

Используя метод `push()`, функция должна добавить новые предметы в конец массива (рюкзака).

После добавления новых предметов, если в рюкзаке окажется более 5 предметов, функция должна вернуть сообщение о том, что рюкзак полон, указав, сколько предметов находится в рюкзаке.

В противном случае, вернуть обновленный список предметов в рюкзаке.

Примеры запуска функции:
```javascript
packBackpack(["Flashlight", "Lighter"], ["Knife", "Binoculars", "Pot", "Machete"]) // "Backpack is full. It contains 6 items."
packBackpack(["Map", "Compass"], ["Tent", "Sleeping Bag"]) // ["Map", "Compass", "Tent", "Sleeping Bag"]
packBackpack(["Food", "Water", "First Aid"], ["Book"]) // ["Food", "Water", "First Aid", "Book"]
packBackpack(["Water Bottle"], []) // ["Water Bottle"]
packBackpack([], ["Canned Food"]) // ["Canned Food"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function packBackpack(backpack, newItems) {
  backpack.push(...newItems)
  return backpack.length > 5 ? `Backpack is full. It contains ${backpack.length} items.` : backpack;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function packBackpack', () => {
  expect(packBackpack).to.be.a('function');
});

it('packBackpack(["Water", "Food"], ["Map", "Knife", "Torch", "Compass"]) should return "Backpack is full. It contains 6 items."', () => {
  expect(packBackpack(["Water", "Food"], ["Map", "Knife", "Torch", "Compass"])).to.equal('Backpack is full. It contains 6 items.');
});

it('packBackpack(["Food", "Water", "Map", "Knife", "Torch"], ["Compass", "Tent"]) should return "Backpack is full. It contains 7 items."', () => {
  const backpack = ["Food", "Water", "Map", "Knife", "Torch"];
  expect(packBackpack(backpack, ["Compass", "Tent"])).to.equal('Backpack is full. It contains 7 items.');
});

it('Returns a message when the backpack is full', () => {
  expect(packBackpack(["Water", "Food", "Map", "Knife"], ["Torch", "Compass", "Sleeping Bag", "Stove"])).to.equal("Backpack is full. It contains 8 items.");
});

it('packBackpack(["Food", "Water"], ["Tent", "Sleeping Bag", "Stove", "Map"]) should return "Backpack is full. It contains 6 items."', () => {
  expect(packBackpack(["Food", "Water"], ["Tent", "Sleeping Bag", "Stove", "Map"])).to.equal('Backpack is full. It contains 6 items.');
});

it('Handles adding to an empty backpack', () => {
  expect(packBackpack([], ["Sleeping Bag"])).to.deep.equal(["Sleeping Bag"]);
});

it('Handles adding no new items to the backpack', () => {
  expect(packBackpack(["Tent"], [])).to.deep.equal(["Tent"]);
});

it('Correctly adds one item when the backpack has space for one more', () => {
  expect(packBackpack(["Food", "Water", "Map", "Knife"], ["Compass"])).to.deep.equal(["Food", "Water", "Map", "Knife", "Compass"]);
});

it('Adds multiple types of items to the backpack', () => {
  expect(packBackpack(["Food"], ["Water", "First Aid Kit"])).to.deep.equal(["Food", "Water", "First Aid Kit"]);
});

it('Handles adding an array of items that exceeds the backpack limit', () => {
  expect(packBackpack(["Food", "Water", "Tent"], ["Map", "Knife", "Compass", "Binoculars"])).to.equal("Backpack is full. It contains 7 items.");
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
