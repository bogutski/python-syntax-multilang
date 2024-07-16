// NAMEEN:
// NAMERU:Проверить, является ли массив палиндромом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isPalindrome`, которая принимает один параметр - массив строк.

Массив состоит из произвольного количества строк.

Функция должна вернуть `true`, если массив является палиндромом, и `false` в противном случае.

Если массив пустой, функция должна вернуть строку `Array is empty`.

Алгоритм решения внутри функции:
* Создать условие if на проверку пустого массива.
* Преобразовать массив в строку, объединив элементы массива через пробел (метод join())
  и привести строку к нижнему или верхнему регистру.
* Создать цикл for, который будет проходить до половины длины строки.
* В цикле, в условии if, сравнивать символы строки с противоположными им символами
  (первый с последним, второй с предпоследним и т.д.).
* Если хотя бы одна пара символов не равна, вернуть `false`.
* В противном случае вернуть `true`.

Пример запуска функции:
```javascript
isPalindrome(['LEVEL', 'Anna', 'level']); // 'level anna level' = true
isPalindrome(['level', '']); // 'level ' = false
isPalindrome(['le', 'v', 'el']); // 'le v el' = true
isPalindrome(['123', '321', '']); // '123 321 ' = false
isPalindrome([]); // 'Array is empty' = true
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
  let arrToStr = arr.join(' ').toLowerCase();
  for (let i = 0; i < arrToStr.length / 2; i++) {
    if (arrToStr[i] !== arrToStr[arrToStr.length - 1 - i]) return false;
  }
  return true;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function isPalindrome', () => {
  expect(isPalindrome).to.be.a('function');
});

it("isPalindrome(['a', 'b', 'c', 'b', 'a']) should return true", () => {
  expect(isPalindrome(['a', 'b', 'c', 'b', 'a'])).to.be.true;
});

it("isPalindrome(['a', 'b', 'c', 'b', 'b']) should return false", () => {
  expect(isPalindrome(['a', 'b', 'c', 'b', 'b'])).to.be.false;
});

it("isPalindrome(['level', '55', 'level']) should return true", () => {
  expect(isPalindrome(['level', '55', 'level'])).to.be.true;
});

it("isPalindrome(['LEVEL', 'Anna', 'level']) should return true", () => {
  expect(isPalindrome(['LEVEL', 'Anna', 'level'])).to.be.true;
});

it("isPalindrome(['level', '']) should return false", () => {
  expect(isPalindrome(['level', ''])).to.be.false;
});

it("isPalindrome(['le', 'v', 'el']) should return true", () => {
  expect(isPalindrome(['le', 'v', 'el'])).to.be.true;
});

it("isPalindrome(['', '!', 'Anna', '!', '']) should return true", () => {
  expect(isPalindrome(['', '!', 'Anna', '!', ''])).to.be.true;
});

it("isPalindrome(['Ma', 'D', 'AM']) should return true", () => {
  expect(isPalindrome(['Ma', 'D', 'AM'])).to.be.true;
});

it("isPalindrome(['123', '321', '']) should return false", () => {
  expect(isPalindrome(['123', '321', ''])).to.be.false;
});

it("isPalindrome(['', '']) should return true", () => {
  expect(isPalindrome(['', ''])).to.be.true;
});

it("isPalindrome([]) should return 'Array is empty'", () => {
  expect(isPalindrome([])).to.be.equal('Array is empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
