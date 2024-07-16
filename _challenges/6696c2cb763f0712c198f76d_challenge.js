// NAMEEN:
// NAMERU:Найти последнюю строку-палиндром в массиве строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findLastPalindrome`, которая принимает массив строк.

Функция должна идентифицировать последнюю строку в массиве, которая является палиндромом (читается одинаково в обоих направлениях, игнорируя регистр и пробелы).

Функция возвращает объект с двумя свойствами: `newArr`, массив булевых значений, показывающих, является ли каждая их строк палиндромом, и `lastPalindrome`, содержащий последнюю строку-палиндром или сообщение о её отсутствии: `palindrome was not found`.


Примеры запуска функции:
```javascript
console.log(findLastPalindrome(["LEVel", "w o r l d", "r aDa r", "roCKet", "mA da  M "]));
// Вывод:
// {
//   newArr: [true, false, true, false, true],
//   lastPalindrome: 'mA da  M '
// }

console.log(findLastPalindrome(["hello", "world", "python", "RaceCar"]));
// Вывод:
// {
//   newArr: [false, false, false, true],
//   lastPalindrome: 'RaceCar'
// }

console.log(findLastPalindrome(["java", "javascript", "ruby"]));
// Вывод:
// {
//   newArr: [false, false, false],
//   lastPalindrome: 'palindrome was not found'
// }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findLastPalindrome(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findLastPalindrome(words) {
  const isPalindrome = str => {
    let original = ''
    let reversed = ''
    for(let el of str){
      if(el !== ' '){
        original += el.toLowerCase()
        reversed = el.toLowerCase() + reversed
      }
    }
    return original === reversed
  }

  const newArr = words.map(el => isPalindrome(el))
  const lastPalindrome = words.findLast((_, i) => newArr[i])

  return {newArr, lastPalindrome: lastPalindrome ? lastPalindrome : 'palindrome was not found'};
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findLastPalindrome', () => {
  expect(findLastPalindrome).to.be.a('function');
});

it('findLastPalindrome(["LEVel", "w o r l d", "r aDa r", "roCKet", "mA da  M "]) should return {newArr: [true, false, true, false, true], lastPalindrome: "mA da  M "}', function() {
  expect(findLastPalindrome(["LEVel", "w o r l d", "r aDa r", "roCKet", "mA da  M "])).to.deep.equal({
    newArr: [true, false, true, false, true],
    lastPalindrome: "mA da  M "
  });
});

it('findLastPalindrome(["hello", "world", "python", "RaceCar"]) should return {newArr: [false, false, false, true], lastPalindrome: "RaceCar"}', function() {
  expect(findLastPalindrome(["hello", "world", "python", "RaceCar"])).to.deep.equal({
    newArr: [false, false, false, true],
    lastPalindrome: "RaceCar"
  });
});

it('findLastPalindrome(["java", "javascript", "ruby"]) should return {newArr: [false, false, false], lastPalindrome: "palindrome was not found"}', function() {
  expect(findLastPalindrome(["java", "javascript", "ruby"])).to.deep.equal({
    newArr: [false, false, false],
    lastPalindrome: "palindrome was not found"
  });
});

it('findLastPalindrome(["Madam", "Nurse", "Run", "Able was I saw Elba"]) should return {newArr: [true, false, false, true], lastPalindrome: "Able was I saw Elba"}', function() {
  expect(findLastPalindrome(["Madam", "Nurse", "Run", "Able was I saw Elba"])).to.deep.equal({
    newArr: [true, false, false, true],
    lastPalindrome: "Able was I saw Elba"
  });
});

it('findLastPalindrome(["step on no pets", "evacuate", "level", "lager", "regal"]) should return {newArr: [true, false, true, false, false], lastPalindrome: "level"}', function() {
  expect(findLastPalindrome(["step on no pets", "evacuate", "level", "lager", "regal"])).to.deep.equal({
    newArr: [true, false, true, false, false],
    lastPalindrome: "level"
  });
});

it('findLastPalindrome(["not a palindrome", "neither is this", "nor this"]) should return {newArr: [false, false, false], lastPalindrome: "palindrome was not found"}', function() {
  expect(findLastPalindrome(["not a palindrome", "neither is this", "nor this"])).to.deep.equal({
    newArr: [false, false, false],
    lastPalindrome: "palindrome was not found"
  });
});

it('findLastPalindrome(["No lemon, no melon", "Was it a car or a cat I saw", "Murder for a jar of red rum"]) should return {newArr: [true, true, true], lastPalindrome: "Murder for a jar of red rum"}', function() {
  expect(findLastPalindrome(["No lemon, no melon", "Was it a car or a cat I saw", "Murder for a jar of red rum"])).to.deep.equal({
    newArr: [true, true, true],
    lastPalindrome: "Murder for a jar of red rum"
  });
});

it('findLastPalindrome(["racecar", "kayak", "civic", "deified", "rotator"]) should return {newArr: [true, true, true, true, true], lastPalindrome: "rotator"}', function() {
  expect(findLastPalindrome(["racecar", "kayak", "civic", "deified", "rotator"])).to.deep.equal({
    newArr: [true, true, true, true, true],
    lastPalindrome: "rotator"
  });
});

it('findLastPalindrome(["A Santa Lived As a Devil At NASA", "Live on time, emit no evil", "Step on no pets"]) should return {newArr: [true, true, true], lastPalindrome: "Step on no pets"}', function() {
  expect(findLastPalindrome(["A Santa Lived As a Devil At NASA", "Live on time, emit no evil", "Step on no pets"])).to.deep.equal({
    newArr: [true, true, true],
    lastPalindrome: "Step on no pets"
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
