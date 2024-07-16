// NAMEEN:
// NAMERU:Проверить, являются ли два массива анаграммами друг друга

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `isAnagram` принимает два параметра - массивы.

Массивы произвольной длины и содержат только строки.

В строках нет пробелов и они состоят только из букв в верхнем или нижнем регистре и/или цифр.

Строки не могут быть пустыми.

Необходимо проверить, являются ли эти массивы анаграммами друг друга с помощью методов join(), sort(), split().

Если массивы являются анаграммами друг друга, то функция должна вернуть true, в противном случае - false.

Если оба массива пустые, то функция должна вернуть строку 'Arrays are empty'.

Если один из массивов пустой, то функция должна вернуть `false`.

Поиск не чувствителен к регистру.

Алгоритм решения:

1. Сделать проверку на пустые массивы.
2. Сделать проверку на пустоту одного из массивов.
3. Объединить все элементы первого и второго массивов в строки и привести строки к единому регистру.
4. Разбить строки на массивы, отсортировать их и снова объединить в строки.
5. Сравнить строки.


Пример запуска функции:
```javascript
isAnagram(['dog', 'spam'], ['god']); // false
isAnagram(['7', 'spam', '35'], ['maps', '735']); // true
isAnagram(['dog', 'spam'], []); // false
isAnagram([], []); // 'Arrays are empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAnagram(arr1, arr2) {
  if (!arr1.length && !arr2.length) return 'Arrays are empty';
  if (!arr1.length || !arr2.length) return false;

  const str1lowerCase = arr1.join('').toLowerCase();
  const str2lowerCase = arr2.join('').toLowerCase();

  const str1 = str1lowerCase.split('').sort().join('');
  const str2 = str2lowerCase.split('').sort().join('');

  return str1 === str2;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnagram', () => {
  expect(isAnagram).to.be.a('function');
});

it("isAnagram(['dog', 'DUSTY', 'spam'], ['study', 'maps', 'GOD']) should return true", () => {
  expect(isAnagram(['dog', 'DUSTY', 'spam'], ['study', 'maps', 'GOD'])).to.be.true;
});

it("isAnagram(['dog', 'spam'], ['god']) should return false", () => {
  expect(isAnagram(['dog', 'spam'], ['god'])).to.be.false;
});

it("isAnagram(['level', 'O'], ['love', 'EL']) should return true", () => {
  expect(isAnagram(['level', 'O'], ['love', 'EL'])).to.be.true;
});

it("isAnagram(['7', 'spam', '35'], ['maps', '735']) should return true", () => {
  expect(isAnagram(['7', 'spam', '35'], ['maps', '735'])).to.be.true;
});

it("isAnagram(['dog', 'spam'], []) should return false", () => {
  expect(isAnagram(['dog', 'spam'], [])).to.be.false;
});

it("isAnagram([], ['maps', 'god']) should return false", () => {
  expect(isAnagram([], ['maps', 'god'])).to.be.false;
});

it("isAnagram([], []) should return 'Arrays are empty'", () => {
  expect(isAnagram([], [])).to.be.equal('Arrays are empty');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
