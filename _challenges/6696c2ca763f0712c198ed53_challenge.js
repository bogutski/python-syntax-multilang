// NAMEEN:
// NAMERU: Посчитать количество слов в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countWords`, которая принимает строку и возвращает количество слов в строке.

Строка может содержать пробелы в начале и в конце.

Числа и знаки тоже считаются за слова.

Если строка пустая или содержит одни пробелы, то функция должна вернуть - 0.

Примеры запуска функции:
```javascript
countWords('Hello') // 1
countWords(' Hello  ') // 1
countWords('Hello  World') // 2
countWords('') // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countWords(str){
  let count = 0;
  str = str.trim();
  if(str.length === 0) return count;
  str = ' ' + str;
  for (let i = 0; i < str.length; i++){
    if(str[i] === ' ' && str[i+1] !== ' ')count++;
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART

it("countWords is a function", () => {
  expect(countWords).to.be.a('function');
})
it("countWords('string') should return 1", () =>{
  expect(countWords('string')).equal(1);
});
it("countWords('one  two ') should return 2", () =>{
  expect(countWords('one  two ')).equal(2);
});
it("countWords('  string ') should return 1", () =>{
  expect(countWords('  string ')).equal(1);
});
it("countWords('how many words are here?') should return 5", () =>{
  expect(countWords(' how many   words are here?')).equal(5);
});
it("countWords('') should return 0", () =>{
  expect(countWords('')).equal(0);
});
it("countWords(' ') should return 0", () =>{
  expect(countWords(' ')).equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
