// NAMEEN:
// NAMERU: Посчитать количество слов в строке не учитывая цифры

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countWordsNotNumbers`, которая принимает строку и должна вернуть количество слов в ней не учитывая цифры.

После каждого слова есть один пробел.

Для проверки на число можно использовать метод `isNaN()`.

Метод `isNaN()` определяет являться ли литерал или переменная нечисловым значением `NaN` или нет.

Примеры метода `isNaN()`:
```javascript
console.log(isNaN(NaN));  // true
console.log(isNaN(+('string'))); // true, с помощью унарного плюса мы преобразовали строку в число, но так как это не число, то получаем - Not a Number
console.log(isNaN(+('5'))); // false, с помощью унарного плюса мы преобразовали строку в число, и получили число
```

Примеры запуска функции:
```javascript
countWords('Hello') // 1
countWords('5 plus 5') // 1
countWords('7') // 0
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
function countWordsNotNumbers(str){
  let count = 0;
  if(str.length === 0) return count;
  str = ' ' + str;
  for (let i = 0; i < str.length; i++){
    if(isNaN(+str[i])) continue;
    if(str[i] === ' ' && isNaN(+str[i+1]))count++;
  }
  return count;
}

// SOLUTIONEND


// OPENTESTSSTART
it('countWordsNotNumbers is a function', () => {
  expect(countWordsNotNumbers).to.be.a('function');
})
it("countWordsNotNumbers('My favorite number is 7') should return 4", () =>{
  expect(countWordsNotNumbers('My favorite number is 7')).equal(4);
});
it("countWordsNotNumbers('how much is 2 by 2') should return 4", () =>{
  expect(countWordsNotNumbers('how much is 2 by 2')).equal(4);
});
it("countWordsNotNumbers('5 plus 5') should return 1", () =>{
  expect(countWordsNotNumbers('5 plus 5')).equal(1);
});
it("countWordsNotNumbers('7') should return 0", () =>{
  expect(countWordsNotNumbers('7')).equal(0);
});
it("countWordsNotNumbers('') should return 0", () =>{
  expect(countWordsNotNumbers('')).equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
