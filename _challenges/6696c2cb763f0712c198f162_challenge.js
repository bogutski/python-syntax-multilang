// NAMEEN:
// NAMERU:Проверить каждую строку в массиве на палиндром

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `isPalindrome` принимает один параметр - массив `arr`.

Массив произвольной длины и состоит из строк произвольной длины.

Строки не повторяются, в них нет пробелов и все буквы в нижнем регистре.

Помимо букв в строках могут быть цифры и знак нижнего подчеркивания между символами.

Пустых строк в массиве нет.

Функция возвращает объект, в котором ключами являются строки из массива, а значениями - результат проверки строки на палиндром.

Если массив пустой, то функция возвращает строку `Array is empty`.

Для проверки строки на палиндром используется функция `checkPalindrome`, которая вызывается внутри функции `isPalindrome`.

Функция `checkPalindrome` принимает один параметр - строку `str`.

Если строка является палиндромом, то функция возвращает строку вида `palindrome`.

Если строка не является палиндромом, то функция возвращает строку вида `not a palindrome`.

Исправьте ошибки в коде, чтобы он соответствовал условию задачи.

Пример запуска функции `isPalindrome`:
```javascript
isPalindrome(['121', '17', '45754']); // {121: 'palindrome', 17: 'not a palindrome', 45754: 'palindrome'}
isPalindrome(['dress', 'moon']); // {dress: 'not a palindrome', moon: 'not a palindrome'}
isPalindrome(['madam']); // {madam: 'palindrome'}
isPalindrome([]); // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function isPalindrome(arr) {
  if (arr.length) return 'Array is empty';
  const obj = {};
  for (let i === 0; i < arr.length; i--) {
    obj[arr[i]] = checkPalindrome(arr[i]);
  }
  return obj;
}

function checkPalindrome(str) {
  let middle === str.length / 2;
  for (let i === 0; i < middle; i--) {
    if (str[i] !== str[str.length - 1 - i]) {
      return 'not a palindrome';
    }
  }
  return 'palindrome';
}
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

function checkPalindrome(str) {
  let middle = str.length / 2;
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
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

it("isPalindrome(['level', '456', 'god', '343']) should return {343: 'palindrome, 456: 'not a palindrome', god: 'not a palindrome', level: 'palindrome'}", () => {
  expect(isPalindrome(['level', '456', 'god', '343'])).to.deep.equal({
    343: 'palindrome',
    456: 'not a palindrome',
    god: 'not a palindrome',
    level: 'palindrome'
  });
});

it("isPalindrome(['dog', 'god', 'level']) should return {dog: 'not a palindrome', god: 'not a palindrome', level: 'palindrome'}", () => {
  expect(isPalindrome(['dog', 'god', 'level'])).to.deep.equal({
    dog: 'not a palindrome',
    god: 'not a palindrome',
    level: 'palindrome'
  });
});

it("isPalindrome(['121', '17', '45754']) should return {121: 'palindrome', 17: 'not a palindrome', 45754: 'palindrome'}", () => {
  expect(isPalindrome(['121', '17', '45754'])).to.deep.equal({
    121: 'palindrome',
    17: 'not a palindrome',
    45754: 'palindrome'
  });
});

it("isPalindrome(['dress', 'moon']) should return {dress: 'not a palindrome', moon: 'not a palindrome'}", () => {
  expect(isPalindrome(['dress', 'moon'])).to.deep.equal({dress: 'not a palindrome', moon: 'not a palindrome'});
});

it("isPalindrome(['madam']) should return {madam: 'palindrome'}", () => {
  expect(isPalindrome(['madam'])).to.deep.equal({madam: 'palindrome'});
});

it("isPalindrome(['desserts_stressed', 'rotator', 'radar', 'kayak', 'tenet']) should return {desserts_stressed: 'palindrome', kayak: 'palindrome', radar: 'palindrome', rotator: 'palindrome', tenet: 'palindrome'}", () => {
  expect(isPalindrome(['desserts_stressed', 'rotator', 'radar', 'kayak', 'tenet'])).to.deep.equal({
    desserts_stressed: 'palindrome',
    kayak: 'palindrome',
    radar: 'palindrome',
    rotator: 'palindrome',
    tenet: 'palindrome'
  });
});

it("isPalindrome([]) should return 'Array is empty'", () => {
  expect(isPalindrome([])).to.equal('Array is empty');
});

it("checkPalindrome should return 'palindrome' if string is palindrome", () => {
  expect(checkPalindrome('madam')).to.equal('palindrome');
});

it("checkPalindrome should return 'not a palindrome' if string is not palindrome", () => {
  expect(checkPalindrome('dog')).to.equal('not a palindrome');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
