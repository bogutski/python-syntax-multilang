// NAMEEN:
// NAMERU:Проверить, является ли массив палиндромом с помощью цикла

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `isPalindrome` принимает один параметр -  массив `arr`.

Массив произвольной длины и содержит типы данных `string` и `number`.

Тип данных `string` может содержать любые символы и длина строки всегда равна 1.

Тип данных `number` может содержать любые цифры от 0 до 9.

Функция возвращает `true`, если массив является палиндромом, и `false` в противном случае.

Если массив пустой, функция возвращает строку `'Array is empty'`.

Исправьте ошибки в коде чтобы функция работала правильно.

Пример запуска функции:
```javascript
isPalindrome(['g', 'o', 'd', 'g', 'o', 'd']); // false
isPalindrome([1, 2, 3, 2, 1]); // true
isPalindrome(['g', 'o', 'd', 'd', 'o' , 'g']); // true
isPalindrome([]); // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function isPalindrome(arr) {
  if (arr.length) return 'Array is empty';
  for (let i === 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[arr.length - 1 - i]) return false;
  }
  return true;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isPalindrome(arr) {
  if (!arr.length) return 'Array is empty';
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function isPalindrome', () => {
  expect(isPalindrome).to.be.a('function');
});

it("isPalindrome(['g', 'o', 'd', 'g', 'o', 'd']) should return false", () => {
  expect(isPalindrome(['g', 'o', 'd', 'g', 'o', 'd'])).to.be.false;
});

it("isPalindrome([1, 2, 3, 2, 1]) should return true", () => {
  expect(isPalindrome([1, 2, 3, 2, 1])).to.be.true;
});

it("isPalindrome(['g', 'o', 'd', 'd', 'o' , 'g']) should return true", () => {
  expect(isPalindrome(['g', 'o', 'd', 'd', 'o', 'g'])).to.be.true;
});

it("isPalindrome([7, 8, 3, 7, 8, 7]) should return false", () => {
  expect(isPalindrome([7, 8, 3, 7, 8, 7])).to.be.false;
});

it("isPalindrome(['a', 'b', 7, 'b', 'a']) should return true", () => {
  expect(isPalindrome(['a', 'b', 7, 'b', 'a'])).to.be.true;
});

it("isPalindrome([1, 2, '5', 2, 1]) should return true", () => {
  expect(isPalindrome([1, 2, '5', 2, 1])).to.be.true;
});

it("isPalindrome([]) should return 'Array is empty'", () => {
  expect(isPalindrome([])).to.be.equal('Array is empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
