// NAMEEN:
// NAMERU:Проверка на анаграмму с использованием объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isAnagram`, которая принимает две строки.

Функция должна проверять является ли первая строка анаграммой второй строки. В этой задаче используйте `вариант
 решения с объектом`.

Перед проверкой все элементы должны быть приведены к одному регистру.

Функция должна вернуть `false`, если:

* строки имеют разную длину, после удаления пробелов `только` в начале и конце строки,
* строки не являются анаграммой друг друга.


Если строки являются анаграммой друг друга, то функция должна вернуть массив, например:

* Даны строки: `isAnagram('abc', 'CBA')`

* Результат: `[ true, {a: true, b: true, c: true} ]` - ключи `a`, `b`, `c` - это элементы строки `abc`.

  * `true` - это результат проверки, что строки являются анаграммой друг друга,

  * `{a: true, b: true, c: true}` - это объект, который был использован для проверки.


Методы `sort`, `split` и `join` использовать нельзя.


Примеры запуска функции:
```javascript
isAnagram('123', '312');         // [ true, { '1': true, '2': true, '3': true } ]
isAnagram('a b c', 'cba');       // false
isAnagram('  CAR', 'ra c  ');    // false
isAnagram('AbCd', '   BacD  ');  // [ true, { a: true, b: true, c: true, d: true } ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAnagram(str1, str2){
  const s1 = str1.trim().toLowerCase()
  const s2 = str2.trim().toLowerCase()

  if(s1.length !== s2.length) return false;

  const string1obj = {};

  for(let i = 0; i < s1.length; i++){
    const el = s1[i]
    string1obj[el] = true;
  }

  for(let i = 0; i < s2.length; i++){
    const el = s2[i]
    if(!string1obj[el]) return false;
  }

  return [true, string1obj]
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnagram', () => {
  expect(isAnagram).to.be.a('function');
});

it("Function isAnagram does not contain method 'sort'", () => {
  expect(isAnagram.toString()).to.not.contain('sort');
});

it("Function isAnagram does not contain method 'split'", () => {
  expect(isAnagram.toString()).to.not.contain('split');
});

it("Function isAnagram does not contain method 'join'", () => {
  expect(isAnagram.toString()).to.not.contain('join');
});

it("isAnagram('123', '321') should return [ true, { '1': true, '2': true, '3': true } ]", () => {
  expect(isAnagram('123', '321')).to.deep.equal([ true, { '1': true, '2': true, '3': true } ]);
});

it("isAnagram('elbow', 'bELOw') should return [ true, { b: true, e: true, l: true, o: true, w: true } ]", () => {
  expect(isAnagram('elbow', 'bELOw')).to.deep.equal([ true, { b: true, e: true, l: true, o: true, w: true } ]);
});

it("isAnagram(' listen  ', ' silent ') should return [ true, { e: true, i: true, l: true, n: true, s: true, t: true } ]", () => {
  expect(isAnagram(' listen  ', ' silent ')).to.deep.equal([ true, { e: true, i: true, l: true, n: true, s: true, t: true } ]);
});

it("isAnagram('conversation', 'voices rant on') should return false", () => {
  expect(isAnagram('conversation', 'voices rant on')).to.equal(false);
});

it("isAnagram('S T A T E', 'taste') should return false", () => {
  expect(isAnagram('S T A T E', 'taste')).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
