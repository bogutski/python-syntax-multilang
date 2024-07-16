// NAMEEN:
// NAMERU:Проверка на анаграмму в массиве строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isAnagram`, которая принимает `массив строк` и возвращает `true`, если все строки являются анаграммами друг друга, и `false` в противном случае.

Все строки будут без пробелов и в нижнем регистре.

В этой задачи нужно только проверить, являются ли строки анаграммами друг друга, для этого выполните проверку на
 длину строки и наличие одних и тех же элементов в каждой строке.

Методы `split`, `sort` и `join` использовать запрещено.


Примеры запуска функции:
```javascript
isAnagram(['elbow', 'below', 'ebowl']);   // true
isAnagram(['123', '321', '132', '312']);  // true
isAnagram(['cat', 'dog', 'big']);         // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAnagram(arr){
  const checkWord = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(checkWord.length !== arr[i].length) return false;

    for(let j = 0; j < arr[i].length; j++){
      if(!checkWord.includes(arr[i][j])) return false;
    }

  }
  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnagram', () => {
  expect(isAnagram).to.be.a('function');
});

it("Function isAnagram should not have method 'split'", () => {
  expect(isAnagram.toString()).to.not.contain('split');
});

it("Function isAnagram should not have method 'sort'", () => {
  expect(isAnagram.toString()).to.not.contain('sort');
});

it("Function isAnagram should not have method 'join'", () => {
  expect(isAnagram.toString()).to.not.contain('join');
});

it("isAnagram(['elbow', 'below', 'ebowl']) should return true", () => {
  expect(isAnagram(['elbow', 'below', 'ebowl'])).to.be.true;
});

it("isAnagram(['1234', '4321', '3124', '2143']) should return true", () => {
  expect(isAnagram(['1234', '4321', '3124', '2143'])).to.be.true;
});

it("isAnagram(['listen', 'silent', 'enlist']) should return true", () => {
  expect(isAnagram(['listen', 'silent', 'enlist'])).to.be.true;
});

it("isAnagram(['cat', 'dog', 'big']) should return false", () => {
  expect(isAnagram(['cat', 'dog', 'big'])).to.be.false;
});

it("isAnagram(['cat', 'dog', 'big', 'tac']) should return false", () => {
  expect(isAnagram(['cat', 'dog', 'big', 'tac'])).to.be.false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
