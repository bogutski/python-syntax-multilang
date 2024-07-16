// NAMEEN:
// NAMERU:Посчитать количество вхождений каждого элемента и вывести результат в виде строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `objectEntriesJoin`, которая принимает один параметр - строку.

Строка произвольной длины и содержит символы и/или буквы в разном регистре.

Перед созданием цикла for необходимо создать объект.

Объект будет наполняться свойствами, состоящими из ключей и значений.

Ключи - это буквы из строки, а значения - это количество вхождений буквы в строку.

Функция должна вернуть букву и количество ее вхождений в строку в виде строки:

`<буква>, <количество вхождений>`

Поиск не чувствителен к регистру.

Для решения задачи используйте следующие методы `Object.entries()` и `join()`.

Пример запуска функции:
```javascript
objectEntriesJoin('Referee'); // 'r,2 e,4 f,1'
objectEntriesJoin('donor'); // 'd,1 o,2 n,1 r,1'
objectEntriesJoin('sleep'); // 's,1 l,1 e,2 p,1'
objectEntriesJoin(''); // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function objectEntriesJoin(str) {
  str = str.toLowerCase();
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return Object.entries(obj).join(' ');
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function objectEntriesJoin', () => {
  expect(objectEntriesJoin).to.be.a('function');
});

it("objectEntriesJoin('Hallway') should return 'h,1 a,2 l,2 w,1 y,1'", () => {
  expect(objectEntriesJoin('Hallway')).to.equal('h,1 a,2 l,2 w,1 y,1');
});

it("objectEntriesJoin('Referee') should return 'r,2 e,4 f,1'", () => {
  expect(objectEntriesJoin('Referee')).to.equal('r,2 e,4 f,1');
});

it("objectEntriesJoin('Sausage') should return 's,2 a,2 u,1 g,1 e,1'", () => {
  expect(objectEntriesJoin('Sausage')).to.equal('s,2 a,2 u,1 g,1 e,1');
});

it("objectEntriesJoin('donor') should return 'd,1 o,2 n,1 r,1'", () => {
  expect(objectEntriesJoin('donor')).to.equal('d,1 o,2 n,1 r,1');
});

it("objectEntriesJoin('sleep') should return 's,1 l,1 e,2 p,1'", () => {
  expect(objectEntriesJoin('sleep')).to.equal('s,1 l,1 e,2 p,1');
});

it("objectEntriesJoin('Association') should return 'a,2 s,2 o,2 c,1 i,2 t,1 n,1'", () => {
  expect(objectEntriesJoin('Association')).to.equal('a,2 s,2 o,2 c,1 i,2 t,1 n,1');
});

it("objectEntriesJoin('') should return ''", () => {
  expect(objectEntriesJoin('')).to.equal('');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
