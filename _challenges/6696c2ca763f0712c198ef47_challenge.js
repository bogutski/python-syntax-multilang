// NAMEEN:
// NAMERU:Сортировка букв по регистру

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortLettersByCase`, которая принимает массив заглавных и строчных букв.

Функция должна вернуть новый массив, в котором сначала идут все строчные буквы, а потом все заглавные.

Расположение букв должно соответствовать порядку в исходном массиве.

Например, массив `['a', 'B', 'c', 'D']` должен вернуть `['a', 'c', 'B', 'D']`.

Если массив пустой, то вернуть строку 'Array is empty'.

В данной задаче можно использовать оператор развертывания (Spread operator).
Вы можете повторить материал по `Spread operator` в разделе:
* `JavaScript Syntax -> Section 11 Массивы -> Копирование массивов`


Пример запуска функции:
```javascript
sortLettersByCase(['a', 'B']) // ['a', 'B']
sortLettersByCase(['A', 'b', 'c', 'd', 'e', 'F']) // ['b', 'c', 'd', 'e', 'A', 'F']
sortLettersByCase(['A', 'B', 'C', 'd', 'e', 'f']) // ['d', 'e', 'f', 'A', 'B', 'C']
sortLettersByCase([]) // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortLettersByCase(arr){
  if(!arr.length) return 'Array is empty';
  const lowerCase = [];
  const upperCase = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i].toLowerCase()) lowerCase.push(arr[i]);
    else upperCase.push(arr[i]);
  }
  return [...lowerCase, ...upperCase];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortLettersByCase', () => {
  expect(sortLettersByCase).to.be.a('function');
});

it("sortLettersByCase(['a', 'B', 'c', 'D', 'e', 'F']) should return ['a', 'c', 'e', 'B', 'D', 'F']", () => {
  expect(sortLettersByCase(['a', 'B', 'c', 'D', 'e', 'F'])).to.deep.equal(['a', 'c', 'e', 'B', 'D', 'F']);
});

it("sortLettersByCase(['a', 'b', 'c', 'd', 'e', 'f']) should return ['a', 'b', 'c', 'd', 'e', 'f']", () => {
  expect(sortLettersByCase(['a', 'b', 'c', 'd', 'e', 'f'])).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f']);
});

it("sortLettersByCase(['A', 'B', 'C', 'D', 'E', 'F']) should return ['A', 'B', 'C', 'D', 'E', 'F']", () => {
  expect(sortLettersByCase(['A', 'B', 'C', 'D', 'E', 'F'])).to.deep.equal(['A', 'B', 'C', 'D', 'E', 'F']);
});

it("sortLettersByCase(['A', 'b', 'a', 'C', 'd', 'c', 'E', 'f', 'D', 'B', 'o']) should return ['b', 'a', 'd', 'c', 'f', 'o', 'A', 'C', 'E', 'D', 'B']", () => {
  expect(sortLettersByCase(['A', 'b', 'a', 'C', 'd', 'c', 'E', 'f', 'D', 'B', 'o'])).to.deep.equal(['b', 'a', 'd', 'c', 'f', 'o', 'A', 'C', 'E', 'D', 'B']);
});

it("sortLettersByCase([]) should return 'Array is empty'", () => {
  expect(sortLettersByCase([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
