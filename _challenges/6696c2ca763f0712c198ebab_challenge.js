// NAMEEN:
// NAMERU:Является ли массив палиндромом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `isArrayPalindrome` принимает массив `arr` в качестве параметра. Массив не может быть пустым.

Функция должна вернуть `true`, если массив является палиндромом, и `false` в противном случае.

Примеры запуска функции:
```javascript
isArrayPalindrome([1, 2, 3, 2, 1]) // true
isArrayPalindrome([1, 2, 3, 4, 5]) // false
isArrayPalindrome(["m", "a", "d", "a", "m"]) // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isArrayPalindrome(arr){
  for(let i = 0; i < arr.length / 2; i++){
    if(arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function isArrayPalindrome', () => {
  expect(isArrayPalindrome).to.be.a('function');
});

it('isArrayPalindrome([1, 2, 3, 2, 1]) should return true', () => {
  expect(isArrayPalindrome([1, 2, 3, 2, 1])).to.be.true;
});

it('isArrayPalindrome([1, 2, 3, 4, 5]) should return false', () => {
  expect(isArrayPalindrome([1, 2, 3, 4, 5])).to.be.false;
});

it('isArrayPalindrome(["m", "a", "d", "a", "m"]) should return true', () => {
  expect(isArrayPalindrome(["m", "a", "d", "a", "m"])).to.be.true;
});

it('isArrayPalindrome(["m", "a", "d", "a", "m", "m"]) should return false', () => {
  expect(isArrayPalindrome(["m", "a", "d", "a", "m", "m"])).to.be.false;
});

it(`isArrayPalindrome(["r", "a", "c", "e", "c", "a", "r"]) should return true`, () => {
  expect(isArrayPalindrome(["r", "a", "c", "e", "c", "a", "r"])).to.be.true;
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
