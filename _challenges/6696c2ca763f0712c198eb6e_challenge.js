// NAMEEN:
// NAMERU:Проверка строк на равенство

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `reverseAndCompare`, которая принимает две строки `str1` и `str2` в качестве аргументов.

Функция должна перевернуть строку `str1` и сравнить ее с `str2`.


Сравнение должно происходить по следующим правилам:

* Перевернутая строка должна быть приведена к верхнему регистру и сравнена с `str2`, если они равны, то функция должна вернуть строку `Strings are equal with uppercase`.

* Перевернутая строка должна быть приведена к нижнему регистру и сравнена с `str2`, если они равны, то функция должна вернуть строку `Strings are equal with lowercase`.

* Если строки не равны, то функция должна вернуть строку `Strings are not equal`.


Примеры запуска функции:
```javascript
reverseAndCompare('Hello', 'olleh'); // 'Strings are equal with lowercase'
reverseAndCompare('Hello', 'OLLEH'); // 'Strings are equal with uppercase'
reverseAndCompare('abc', 'dfg'); // 'Strings are not equal'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function reverseAndCompare(str1, str2) {
  let reversed = '';
  for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
  }
  if(reversed.toUpperCase() === str2) return 'Strings are equal with uppercase';
  else if(reversed.toLowerCase() === str2) return 'Strings are equal with lowercase';
  else return 'Strings are not equal';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function reverseAndCompare', () => {
  expect(reverseAndCompare).to.be.a('function');
});

it("reverseAndCompare('Hello', 'olleh') should return 'Strings are equal with lowercase'", () => {
  expect(reverseAndCompare('Hello', 'olleh')).to.equal('Strings are equal with lowercase');
});

it("reverseAndCompare('Hello', 'OLLEH') should return 'Strings are equal with uppercase'", () => {
  expect(reverseAndCompare('Hello', 'OLLEH')).to.equal('Strings are equal with uppercase');
});

it("reverseAndCompare('Hello', 'hello') should return 'Strings are not equal'", () => {
  expect(reverseAndCompare('Hello', 'hello')).to.equal('Strings are not equal');
});

it("reverseAndCompare('ananas', 'sanAna') should return 'Strings are not equal'", () => {
  expect(reverseAndCompare('ananas', 'sanAna')).to.equal('Strings are not equal');
});

it("reverseAndCompare('hi', 'hey') should return 'Strings are not equal'", () => {
  expect(reverseAndCompare('hi', 'hey')).to.equal('Strings are not equal');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
