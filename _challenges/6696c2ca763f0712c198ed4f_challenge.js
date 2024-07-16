// NAMEEN:
// NAMERU: Посчитать количество знаков в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countSigns`, которая принимает две строки:

* `str` - строка с текстом.

* `sign` - знак, который нужно найти. Знаки могут быть такие: `'!', '?', '.', ','`.

Функция должна вернуть количество найденных `sign` в строке.

Примеры запуска функции:

```javascript
countSigns('Hello, World!', ',');  // 1
countSigns('What is your name? Alice?', '?');  // 2
countSigns('Omg! The food is terrible!', '!') // 2
```


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countSigns(str, sign){
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if(str[i] === sign)count++;
  }
  return count;
}
// SOLUTIONEND


// OPENTESTSSTART
it('countSigns is a function', () => {
  expect(countSigns).to.be.a('function');
})
it("(countSigns('Hello, World!', ',') should return 1", () =>{
  expect(countSigns('Hello, World!', ',')).equal(1);
});
it("(countSigns('What is your name? Alice?', '?') should return 2", () =>{
  expect(countSigns('What is your name? Alice?', '?')).equal(2);
});
it("(countSigns('Omg! The food is terrible!', '!') should return 2", () =>{
  expect(countSigns('Omg! The food is terrible!', '!')).equal(2);
});
it("(countSigns('!, ?, .,', ',') should return 3", () =>{
  expect(countSigns('!, ?, .,', ',')).equal(3);
});
it("(countSigns('How are you?', '.') should return 0", () =>{
  expect(countSigns('How are you?', '.')).equal(0);
});
it("(countSigns(' ', '.') should return 0", () =>{
  expect(countSigns(' ', '.')).equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
