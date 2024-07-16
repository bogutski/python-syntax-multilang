// NAMEEN:
// NAMERU:Сортировка имен по последней букве

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortNamesByLastLetter`, которая принимает массив строк и возвращает новый массив, содержащий те же строки, отсортированные по последней букве в алфавитном порядке.

Функция возвращает новый массив.


Примеры запуска функции:
```javascript
sortNamesByLastLetter(["Alice", "Bob", "Clara", "Dave"]); // ['Clara', 'Bob', 'Alice', 'Dave']
sortNamesByLastLetter(["Steve", "Jennifer", "Edgar", "Monica"]); // ['Monica', 'Steve', 'Jennifer', 'Edgar']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sortNamesByLastLetter(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortNamesByLastLetter(arr) {
  return arr.slice().sort((a, b) => {
    const lastA = a[a.length - 1]
    const lastB = b[b.length - 1]

    return lastA.localeCompare(lastB)
  })
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortNamesByLastLetter', () => {
  expect(sortNamesByLastLetter).to.be.a('function');
});

it('Function sortNamesByLastLetter should include method sort()', () => {
  const res = sortNamesByLastLetter.toString()
  expect(res).to.include('.sort(')
});

it('sortNamesByLastLetter(["Alice", "Bob", "Clara", "Dave"]) should return ["Clara", "Bob", "Alice", "Dave"]', () => {
  expect(sortNamesByLastLetter(["Alice", "Bob", "Clara", "Dave"])).to.deep.equal(["Clara", "Bob", "Alice", "Dave"]);
});

it('sortNamesByLastLetter(["Steve", "Jennifer", "Edgar", "Monica"]) should return ["Monica", "Steve", "Jennifer", "Edgar"]', () => {
  expect(sortNamesByLastLetter(["Steve", "Jennifer", "Edgar", "Monica"])).to.deep.equal(["Monica", "Steve", "Jennifer", "Edgar"]);
});

it('sortNamesByLastLetter([]) should return []', () => {
  expect(sortNamesByLastLetter([])).to.deep.equal([]);
});

it('sortNamesByLastLetter(["Paul"]) should return ["Paul"]', () => {
  expect(sortNamesByLastLetter(["Paul"])).to.deep.equal(["Paul"]);
});

it('sortNamesByLastLetter(["John", "Paul", "George", "Ringo"]) should return ["George", "Paul", "John", "Ringo"]', () => {
  expect(sortNamesByLastLetter(["John", "Paul", "George", "Ringo"])).to.deep.equal(["George", "Paul", "John", "Ringo"]);
});

it('sortNamesByLastLetter(["Sarah", "Andrew", "Diana", "Jim", "Oscar"]) should return ["Diana", "Sarah", "Jim", "Oscar", "Andrew"]', () => {
  expect(sortNamesByLastLetter(["Sarah", "Andrew", "Diana", "Jim", "Oscar"])).to.deep.equal(["Diana", "Sarah", "Jim", "Oscar", "Andrew"]);
});

it('sortNamesByLastLetter(["beta", "alpha", "echo", "charlie"]) should sort by last letter to ["beta", "alpha", "charlie", "echo"]', () => {
  expect(sortNamesByLastLetter(["beta", "alpha", "echo", "charlie"])).to.deep.equal(["beta", "alpha", "charlie", "echo"]);
});

it('sortNamesByLastLetter(["gamma", "beta", "alpha"]) should return ["gamma", "beta", "alpha"] sorted by the last letter', () => {
  expect(sortNamesByLastLetter(["gamma", "beta", "alpha"])).to.deep.equal(["gamma", "beta", "alpha"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
