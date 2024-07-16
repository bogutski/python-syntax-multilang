// NAMEEN:
// NAMERU:Проверить, является ли элемент массива палиндромом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `isPalindrome` которая принимает один параметр - массив.

Массив произвольной длины и может содержать типы данных `string` и/или `number`.

Тип данных `string` может содержать любые символы, буквы в разном регистре, пробелы в конце или начале слова.

Если строка состоит из нескольких слов, то слова всегда разделены между собой символом нижнего подчеркивания `_`.

Если тип данных элемента массива `string`, то необходимо удалить пробелы в начале и в конце строки.

Тип данных `number` может содержать только положительные целые и/или дробные числа.

Строки и числа в массиве уникальны.

Функция возвращает объект, в котором ключами являются элементы из массива, а значениями - результат проверки элемента на палиндром.

Если массив пустой, то функция возвращает строку `Array is empty`.


Для проверки элемента на палиндром используется функция `isElPalindrome`, которая вызывается внутри функции `isPalindrome`.

Функция `isElPalindrome` принимает один параметр - элемент массива.

Если элемент массива является числом, то необходимо его преобразовать в строку.

Если элемент массива - строка, то необходимо привести ее к единому регистру.

Если элемент массива - пустая строка, то функция возвращает строку вида `String is empty`.

Если элемент массива - палиндром, то функция возвращает строку `palindrome`.

Если элемент массива - не палиндром, то функция возвращает строку `not a palindrome`.

Пример запуска функции:
```javascript
isPalindrome(['madaM', 'level', 121, 13, ' cat ']);
// {cat: "not a palindrome", 121: "palindrome", 13: "not a palindrome", level: "palindrome", madaM: "palindrome"}
isPalindrome([47974, 1.1, 53]); // {1.1: "palindrome", 47974: "palindrome", 53: "not a palindrome"}
isPalindrome(['ciVIC', 'radaR', ' wow', '']);
// {'': "String is empty", wow: "palindrome", ciVIC: "palindrome", radaR: "palindrome"}
isPalindrome(['step_on_no_pets', 'Level', '  777 ', 89]);
// {777 : "palindrome", 89: "not a palindrome", Level: "palindrome", step_on_no_pets: "palindrome"}
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
    if (typeof arr[i] === 'string') arr[i] = arr[i].trim();
    obj[arr[i]] = isElPalindrome(arr[i]);
  }
  return obj;
}

function isElPalindrome(el) {
  if(typeof el === 'number') el = el.toString();
  if(typeof el === 'string') el = el.toLowerCase();
  if(!el.length) return 'String is empty';
  let middle = el.length / 2;
  for (let i = 0; i < middle; i++) {
    if (el[i] !== el[el.length - 1 - i]) {
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

it('Created function isElPalindrome', () => {
  expect(isElPalindrome).to.be.a('function');
});

it("isPalindrome(['madaM', 'level', 121, 13, ' cat ']) should return {cat : 'not a palindrome', 121: 'palindrome', 13: 'not a palindrome', level: 'palindrome', madaM: 'palindrome'}", () => {
  expect(isPalindrome(['madaM', 'level', 121, 13, ' cat '])).to.deep.equal({
    cat: 'not a palindrome',
    121: 'palindrome',
    13: 'not a palindrome',
    level: 'palindrome',
    madaM: 'palindrome'
  });
});

it("isPalindrome(['', 'lEveL', 121, 1.3, 'cat']) should return {'': 'String is empty', 121: 'palindrome', 1.3: 'not a palindrome', cat: 'not a palindrome', lEveL: 'palindrome'}", () => {
  expect(isPalindrome(['', 'lEveL', 121, 1.3, 'cat'])).to.deep.equal({
    '': 'String is empty',
    121: 'palindrome',
    1.3: 'not a palindrome',
    cat: 'not a palindrome',
    lEveL: 'palindrome'
  })
  ;
});

it("isPalindrome([47974, 1.1, 53]) should return {1.1: 'palindrome', 47974: 'palindrome', 53: 'not a palindrome'}", () => {
  expect(isPalindrome([47974, 1.1, 53])).to.deep.equal({
    1.1: 'palindrome',
    47974: 'palindrome',
    53: 'not a palindrome'
  });
});

it("isPalindrome(['ciVIC', 'radaR', ' wow', '']) should return {'': 'String is empty', wow: 'palindrome', ciVIC: 'palindrome', radaR: 'palindrome'}", () => {
  expect(isPalindrome(['ciVIC', 'radaR', ' wow', ''])).to.deep.equal({
    '': 'String is empty',
    wow: 'palindrome',
    ciVIC: 'palindrome',
    radaR: 'palindrome'
  })
  ;
});

it("isPalindrome(['step_on_no_pets', 'Level', '  777 ', 89]) should return {777 : 'palindrome', 89: 'not a palindrome', Level: 'palindrome', step_on_no_pets: 'palindrome'}", () => {
  expect(isPalindrome(['step_on_no_pets', 'Level', '  777 ', 89])).to.deep.equal({
    777: 'palindrome',
    89: 'not a palindrome',
    Level: 'palindrome',
    step_on_no_pets: 'palindrome'
  });
});

it("isPalindrome(['love', 'DoG']) should return {DoG: 'not a palindrome', love: 'not a palindrome'}", () => {
  expect(isPalindrome(['love', 'DoG'])).to.deep.equal({DoG: 'not a palindrome', love: 'not a palindrome'});
});

it("isPalindrome([]) should return 'Array is empty'", () => {
  expect(isPalindrome([])).to.equal('Array is empty');
});

it("isElPalindrome (['level']) should return 'palindrome'", () => {
  expect(isElPalindrome('level')).to.equal('palindrome');
});

it("isElPalindrome (['love'])should return 'not a palindrome'", () => {
  expect(isElPalindrome('love')).to.equal('not a palindrome');
});

it("isElPalindrome (['']) should return 'String is empty'", () => {
  expect(isElPalindrome('')).to.equal('String is empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
