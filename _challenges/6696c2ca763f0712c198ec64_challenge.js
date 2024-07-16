// NAMEEN:
// NAMERU:Вернуть массив значений объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `objectValues` которая принимает один параметр - строку.

Строка произвольной длины может содержать любые символы и буквы в верхнем и/или нижнем регистре.

Перед созданием цикла for необходимо создать объект.

Объект будет наполняться свойствами, состоящими из ключей и значений.

Ключи - это буквы из строки, а значения - это количество вхождений буквы в строку.

Функция должна вернуть массив значений свойств объекта, где значение это количество повторений символа в строке.

Поиск не должен быть чувствителен к регистру.

Для решения задачи используйте метод `Object.values()`.

Пример запуска функции:
```javascript
objectValues('minimumMAXIMUM'); // [6, 3, 1, 2, 1, 1]
objectValues('Onion'); // [2, 2, 1]
objectValues('ASSOCIATION'); // [2, 2, 2, 1, 2, 1, 1]
objectValues(''); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function objectValues(str) {
  str = str.toLowerCase();
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++
    else obj[str[i]] = 1;
  }
  return Object.values(obj);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function objectValues', () => {
  expect(objectValues).to.be.a('function');
});

it("objectValues('minimumMAXIMUM') should return [6, 3, 1, 2, 1, 1]", () => {
  expect(objectValues('minimumMAXIMUM')).to.deep.equal([6, 3, 1, 2, 1, 1]);
});

it("objectValues('Onion') should return [2, 2, 1]", () => {
  expect(objectValues('Onion')).to.deep.equal([2, 2, 1]);
});

it("objectValues('Reactor') should return [2, 1, 1, 1, 1, 1]", () => {
  expect(objectValues('Reactor')).to.deep.equal([2, 1, 1, 1, 1, 1]);
});

it("objectValues('improvement') should return [1, 2, 1, 1, 1, 1, 2, 1, 1]", () => {
  expect(objectValues('improvement')).to.deep.equal([1, 2, 1, 1, 1, 1, 2, 1, 1]);
});

it("objectValues('wheel') should return [1, 1, 2, 1]", () => {
  expect(objectValues('wheel')).to.deep.equal([1, 1, 2, 1]);
});

it("objectValues('ASSOCIATION') should return [2, 2, 2, 1, 2, 1, 1]", () => {
  expect(objectValues('ASSOCIATION')).to.deep.equal([2, 2, 2, 1, 2, 1, 1]);
});

it("objectValues('') should return []", () => {
  expect(objectValues('')).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
