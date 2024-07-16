// NAMEEN:
// NAMERU:Проверить каждое число в массиве на палиндром

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `isPalindrome` принимает один параметр - массив чисел.

Массив произвольной длины и содержит уникальные только положительные целые и/или дробные числа.

Функция возвращает объект, в котором ключами являются числа из массива, а значениями - результат проверки числа на палиндром.

Если массив пустой, то функция возвращает строку `Array is empty`.

Для проверки числа на палиндром используется функция `checkPalindrome`, которая вызывается внутри функции `isPalindrome`.

Функция `checkPalindrome` принимает один параметр - число.

Если число является палиндромом, то функция возвращает строку вида `palindrome`.

Если число не является палиндромом, то функция возвращает строку вида `not a palindrome`.

Пример запуска функции `isPalindrome`:
```javascript
isPalindrome([7]); // {7: "palindrome"}
isPalindrome([1001, 5.5]); // {1001: "palindrome", 5.5: "palindrome"}
isPalindrome([13, 11235]); // {11235: "not a palindrome", 13: "not a palindrome"}
isPalindrome([]); // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isPalindrome(arr) {
  if (!arr.length) return 'Array is empty';
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = checkPalindrome(arr[i]);
  }
  return obj;
}

function checkPalindrome(num) {
  num = num.toString();
  let middle = num.length / 2;
  for (let i = 0; i < middle; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return 'not a palindrome';
    }
  }
  return 'palindrome';
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function isPalindrome', () => {
  expect(isPalindrome).to.be.a('function');
});

it('Created function checkPalindrome', () => {
  expect(checkPalindrome).to.be.a('function');
});

it("isPalindrome([12, 131, 44, 5431]) returns {12: 'not a palindrome', 131: 'palindrome', 44: 'palindrome', 5431: 'not a palindrome'}", () => {
  expect(isPalindrome([12, 131, 44, 5431])).to.deep.equal({
    12: 'not a palindrome',
    131: 'palindrome',
    44: 'palindrome',
    5431: 'not a palindrome'
  });
});

it("isPalindrome([7]) returns {7: 'palindrome'}", () => {
  expect(isPalindrome([7])).to.deep.equal({7: 'palindrome'});
});

it("isPalindrome([1001, 5.5]) returns {1001: 'palindrome', 5.5: 'palindrome'}", () => {
  expect(isPalindrome([1001, 5.5])).to.deep.equal({1001: 'palindrome', 5.5: 'palindrome'});
});

it("isPalindrome([0.5, 2.2, 17.71]) returns {0.5: 'not a palindrome', 17.71: 'palindrome', 2.2: 'palindrome'}", () => {
  expect(isPalindrome([0.5, 2.2, 17.71])).to.deep.equal({
    0.5: 'not a palindrome',
    17.71: 'palindrome',
    2.2: 'palindrome'
  });
});

it("isPalindrome([13, 11235]) returns {11235: 'not a palindrome', 13: 'not a palindrome'}", () => {
  expect(isPalindrome([13, 11235])).to.deep.equal({11235: 'not a palindrome', 13: 'not a palindrome'});
});

it("isPalindrome([]) returns 'Array is empty'", () => {
  expect(isPalindrome([])).to.equal('Array is empty');
});

it("checkPalindrome(121) should return 'palindrome'", () => {
  expect(checkPalindrome(121)).to.equal('palindrome');
});

it("checkPalindrome(123) should return 'not a palindrome'", () => {
  expect(checkPalindrome(123)).to.equal('not a palindrome');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
