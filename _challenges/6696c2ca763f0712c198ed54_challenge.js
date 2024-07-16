// NAMEEN:
// NAMERU: Найти количество "BUG" в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Написать функцию `findBugs` которая принимает строку `str` и возвращает количество `"BUG"` в ней.

`"BUG"` может находится даже посередине слова.

Для простоты можно использовать методы `.includes()` и `.indexOf()`.

```javascript
findBugs('Hello, BUGWorld!'); // 1
findBugs('it is a nice day'); // 0
findBugs('BUG'); // 1
```


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findBugs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.includes("BUG", i)) {
      count++;
      i = str.indexOf("BUG", i) + 2;
    }
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('findBugs is a function', () => {
  expect(findBugs).to.be.a('function');
})
it("(findBugs('Hello, BUGWorld!') should return 1", () =>{
  expect(findBugs('Hello, BUGWorld!')).equal(1);
});
it("(findBugs('BUGWhat isBUG your favorite food?BUG') should return 3", () =>{
  expect(findBugs('BUGWhat iBUGs your favorite food?BUG')).equal(3);
});
it("(findBugs('it is a nice day') should return 0", () =>{
  expect(findBugs('it is a nice day')).eql(0);
});
it("(findBugs('BUG') should return 1", () =>{
  expect(findBugs('BUG')).eql(1);
});
it("(findBugs('') should return 0", () =>{
  expect(findBugs('')).eql(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
