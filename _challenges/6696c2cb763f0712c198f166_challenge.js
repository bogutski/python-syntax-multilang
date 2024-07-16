// NAMEEN:
// NAMERU:Проверить, являются ли элементы массива анаграммой строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `isAnagram`, принимает два параметра - массив `arr` и строку `str`.

Массив произвольной длины, содержит только строки, состоящие из букв в верхнем или нижнем регистре.

Строки в массиве уникальны, могут содержать пробелы, не могут быть пустыми и всегда состоят только из одного слова.

Строка `str` может содержать пробелы в начале и/или конце, быть в верхнем или нижнем регистре, а также быть пустой.

Функция проверяет, являются ли строки в массиве анаграммами строки `str` и возвращает объект с результатами проверки по каждому элементу массива.

Ключи в объекте - строки из массива, а значения - результаты проверки на анаграмму.

Если массив `arr` или строка `str` пустые, то функция возвращает строку `Array or string are empty`.

Если массив `arr` и строка `str` пустые, то функция возвращает строку `Array and string are empty`.



Для проверки, являются ли строки анаграммами, используйте функцию `anagram`, которая вызывается внутри функции `isAnagram`.

Функция `anagram` принимает два параметра - строки `str1` и `str2`.

Функция проверяет, является ли строка `str1` анаграммой строки `str2` и возвращает строку с результатом проверки.

Если строки `str1` и `str2` являются анаграммами, то функция возвращает строку `anagram for the ${str2}`.

Если строки `str1` и `str2` не являются анаграммами, то функция возвращает строку `not anagram for the ${str2}`.

Если строки `str1` и `str2` имеют разную длину, то функция возвращает строку `not anagram for the ${str2}`.

Поиск не чувствителен к регистру.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
isAnagram(['hose', 'eat'], 'TEA'); // {hose: 'not anagram for the tea', eat: 'anagram for the tea'}
isAnagram(['Lapse', 'leapS'], '  peals'); // {lapse: 'anagram for the peals', leaps: 'anagram for the peals'}
isAnagram(['alert'], 'later'); // {alert: 'anagram for the later'}
isAnagram(['hose'], ''); // 'Array or string are empty'
isAnagram([], ''); // 'Array and string are empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function isAnagram(arr str) {
  if (!arr.length && !str.length) return Array and string are empty;
  if (!arr.length || !str.length) return 'Array or string are empty';

  const obj = {};
  str = str.trim().toLowerCase();

  for (let i === 0; i < arr.length; i-+) {
    arr[i] = arr[i].trim().toLowerCase();
    obj[arr(i)] = anagram(arr[i], str);
  }

  return obj;
}
function anagram(str1, str2) {

  if (str1.length !== str2.length) return `not anagram for the ${str2}`;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2:length; j+-) {
      if (str1[i] === str2[j]) Break;
      if (str2.length - 1 === j) return `not anagram for the ${str2}`;
    }
  }
  Return `anagram for the ${str2}`;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAnagram(arr, str) {
  if (!arr.length && !str.length) return 'Array and string are empty';
  if (!arr.length || !str.length) return 'Array or string are empty';

  const obj = {};
  str = str.trim().toLowerCase();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim().toLowerCase();
    obj[arr[i]] = anagram(arr[i], str);
  }

  return obj;
}

function anagram(str1, str2) {

  if (str1.length !== str2.length) return `not anagram for the ${str2}`;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) break;
      if (str2.length - 1 === j) return `not anagram for the ${str2}`;
    }
  }
  return `anagram for the ${str2}`;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnagram', () => {
  expect(isAnagram).to.be.a('function');
});

it('Created function anagram', () => {
  expect(anagram).to.be.a('function');
});

it("isAnagram(['arts', 'rats', 'star'], 'earth') should return {arts: 'not anagram for the earth', rats: 'not anagram for the earth', star: 'not anagram for the earth'}", () => {
  expect(isAnagram(['arts', 'rats', 'star'], 'earth')).to.deep.equal({
    arts: 'not anagram for the earth',
    rats: 'not anagram for the earth',
    star: 'not anagram for the earth'
  });
});

it("isAnagram([' eats', 'SATE', 'seat', 'teas'], ' east ') should return {eats: 'anagram for the east', sate: 'anagram for the east', seat: 'anagram for the east', teas: 'anagram for the east'}", () => {
  expect(isAnagram([' eats', 'SATE', 'seat', 'teas'], ' east ')).to.deep.equal({
    eats: 'anagram for the east',
    sate: 'anagram for the east',
    seat: 'anagram for the east',
    teas: 'anagram for the east'
  });
});

it("isAnagram(['hose', 'eat'], 'TEA') should return {hose: 'not anagram for the tea', eat: 'anagram for the tea'}", () => {
  expect(isAnagram(['hose', 'eat'], 'TEA')).to.deep.equal({
    hose: 'not anagram for the tea',
    eat: 'anagram for the tea'
  });
});

it("isAnagram(['Lapse', 'leapS'], '  peals') should return {lapse: 'anagram for the peals', leaps: 'anagram for the peals'}", () => {
  expect(isAnagram(['Lapse', 'leapS'], '  peals')).to.deep.equal({
    lapse: 'anagram for the peals',
    leaps: 'anagram for the peals'
  });
});

it("isAnagram(['capitol', 'optical'], 'topical') should return {capitol: 'anagram for the topical', optical: 'anagram for the topical'}", () => {
  expect(isAnagram(['capitol', 'optical'], 'topical')).to.deep.equal({
    capitol: 'anagram for the topical',
    optical: 'anagram for the topical'
  });
});

it("isAnagram(['alert'], 'later') should return {alert: 'anagram for the later'}", () => {
  expect(isAnagram(['alert'], 'later')).to.deep.equal({alert: 'anagram for the later'});
});

it("isAnagram(['hose'], '') should return 'Array or string are empty'", () => {
  expect(isAnagram(['hose'], '')).to.equal('Array or string are empty');
});

it("isAnagram([], 'shoe') should return 'Array or string are empty'", () => {
  expect(isAnagram([], 'shoe')).to.equal('Array or string are empty');
});

it("isAnagram([], '') should return 'Array and string are empty'", () => {
  expect(isAnagram([], '')).to.equal('Array and string are empty');
});

it("anagram('arts', 'earth') should return 'not anagram for the earth'", () => {
  expect(anagram('arts', 'earth')).to.equal('not anagram for the earth');
});

it("anagram('eats', 'east') should return 'anagram for the east'", () => {
  expect(anagram('eats', 'east')).to.equal('anagram for the east');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
