// NAMEEN:
// NAMERU:Дубликат буквы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findDuplicate`, которая принимает строку `str` и возвращает `true`, если в строке `str` есть
 одинаковые
 буквы, возвращает `false` в противном случае.

Учитывайте, что большая буква не является дубликатом маленькой буквы или, наоборот.

Между каждым элементом есть один пробел.


Примеры запуска функции:
```javascript
findDuplicate('a b c d d'); // true
findDuplicate('a b c d e'); // false
findDuplicate('A b C d a'); // false
findDuplicate('A b C d A'); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findDuplicate(str) {
  for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ') {
      if(str.indexOf(str[i], i+1) !== -1){
        return true
      }
    }
  }
  return false;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findDuplicate', () => {
  expect(findDuplicate).to.be.a('function');
});

it("findDuplicate('a b c d d') should return true", () => {
  expect(findDuplicate('a b c d d')).true
});

it("findDuplicate('a b c d e') should return false", () => {
  expect(findDuplicate('a b c d e')).false
});

it("findDuplicate('A b C d a') should return false", () => {
  expect(findDuplicate('A b C d a')).false
});

it("findDuplicate('q W e R t') should return false", () => {
  expect(findDuplicate('q W e R t')).false
});

it("findDuplicate('q W e W t') should return true", () => {
  expect(findDuplicate('q W e W t')).true
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
