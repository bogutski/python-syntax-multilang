// NAMEEN:
// NAMERU: Посчитать количество пробелов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numberOfSpaces`, которая принимает строку и возвращает количество пробелов в ней.

```javascript
numberOfSpaces('Hello, World!');  // 1;
numberOfSpaces(' You look young. How old  are you?');  // 8;
numberOfSpaces('end'); // 0
```


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numberOfSpaces(str){
  let count = 0;
  if(str.length === 0) return count;
  for (let i = 0; i < str.length; i++){
    if(str[i] === ' ')count++;
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('numberOfSpaces is a function', () => {
  expect(numberOfSpaces).to.be.a('function');
})

it("numberOfSpaces('Hello, World.') should return 1", () =>{
  expect(numberOfSpaces('Hello, World.')).equal(1);
});

it("numberOfSpaces(' You look young. How old  are you?') should return 8", () =>{
  expect(numberOfSpaces(' You look young. How old  are you?')).equal(8);
});

it("numberOfSpaces('Hey, what did you, say? ') should return 5", () =>{
  expect(numberOfSpaces('Hey, what did you, say? ')).equal(5);
});

it("numberOfSpaces('end') should return 0", () =>{
  expect(numberOfSpaces('end')).equal(0);
});

it("numberOfSpaces(' ') should return 1", () =>{
  expect(numberOfSpaces(' ')).equal(1);
});

it("numberOfSpaces('') should return 0", () =>{
  expect(numberOfSpaces('')).equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
